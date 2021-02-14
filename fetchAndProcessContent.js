const Git = require("nodegit");
const fs = require("fs");
const glob = require("glob");
const path = require("path");
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const yaml = require('js-yaml');

function getFirstLine(text) {
  let index = text.indexOf("\n");
  if (index === -1) index = undefined;
  return text.substring(0, index);
}

(async () => {

  if (fs.existsSync("../vgmstream")) {
    console.log("Copy of repo exists...")
    let repo = await Git.Repository.open("../vgmstream")
    console.log("Fetching remote...")
    await repo.fetchAll()
    console.log("Merging remote with local...")
    await repo.mergeBranches("master", "origin/master")

  } else {
    console.log("Cloning repo...")
    await Git.Clone("https://github.com/vgmstream/vgmstream","../vgmstream")
  }

  const files = glob.sync("../vgmstream/**/*.md");

  if (fs.existsSync(path.join(__dirname, "content"))) {
    fs.rmdirSync(path.join(__dirname, "content"), { recursive: true })
  }
  fs.mkdirSync(path.join(__dirname, "content"))

  for (const file of files) {
    const normalizedFileName = path.basename(file);
    const gitFileName = file.replace("../vgmstream/",'')
    const {stdout: log} = await exec("git --no-pager log --pretty=format:\"%ad\" --date=iso-strict -- " + gitFileName, {
      cwd: "../vgmstream"
    })
    const array = log.split("\n")
    const {first, last} = {first: array[0], last: array[array.length-1]}
    console.log(`Copying ${file} to content/...`)
    let fileContents = fs.readFileSync(file, "utf-8")
    let firstLine = getFirstLine(fileContents).trim().replace("# ", "")

    let frontMatter = {
      title: (normalizedFileName === "readme.md" ? "README" : firstLine),
      createdAt: new Date(Date.parse(last)),
      updatedAt: new Date(Date.parse(first))
    }

    const regex = /\((.*)\.md\)/gm;

    let newFileContents = `---
${yaml.dump(frontMatter)}
---
${fileContents}
`.replace(regex, `($1)`)

    fs.writeFileSync(path.join(__dirname, "content", normalizedFileName), newFileContents, {encoding: "utf-8"})
    console.log(`${normalizedFileName} processed.`)
  }


})()
