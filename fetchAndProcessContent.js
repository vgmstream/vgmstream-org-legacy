const path = require('path')
const git = require('isomorphic-git')
const http = require('isomorphic-git/http/node')
const fs = require('fs')

const glob = require("glob");
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const yaml = require('js-yaml');

const author = {
  name: 'Kevin López',
  email: 'kevin@kddlb.cl'
}

const dir = path.join(process.cwd(), 'data')

if (fs.existsSync(dir)) {

  console.log('data directory exists, pulling from remote')

  git.pull({
    fs, http, dir, author
  }).then(parse)

} else {

  console.log('data directory does not exist, cloning from remote')

  git.clone({
    fs, http, dir, author,
    url: 'https://github.com/vgmstream/vgmstream'
  }).then(parse)

}

function getFirstLine(text) {
  let index = text.indexOf("\n");
  if (index === -1) index = undefined;
  return text.substring(0, index);
}

function parse() {
  const files = glob.sync(path.join(dir, '**/*.md'))

  if (fs.existsSync(path.join(__dirname, "content"))) {
    fs.rmSync(path.join(__dirname, "content"), { recursive: true })
  }
  fs.mkdirSync(path.join(__dirname, "content"))

  for (const file of files) {
    const normalized = path.basename(file)
    const relative = path.relative(dir, file)
    const log = git.log({
      fs,
      dir,
      filepath: relative,
      depth: 0
    }).then((result) => {
      var commitDate = new Date(result[0].commit.author.timestamp * 1000)

      console.log(`Copying ${normalized} to content/...`)
      let fileContents = fs.readFileSync(file, 'utf8')
      let firstLine = getFirstLine(fileContents).trim().replace("# ", "")

      let frontMatter = {
        title: (normalized === "README.md" ? "README" : firstLine),
        updatedAt: commitDate
      }

      const regex = /\((.*)\.md\)/gm;

      let newFileContents = `---
${yaml.dump(frontMatter)}
---
${fileContents}
`.replace(regex, `($1)`)


      fs.writeFileSync(path.join(__dirname, "content", normalized), newFileContents, {encoding: "utf-8"})
      console.log(`${normalized} processed.`)
    })
  }

}
