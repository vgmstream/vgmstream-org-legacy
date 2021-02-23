export default async () => {
  const { $content } = require("@nuxt/content");
  const files = await $content({ deep: true }).only(["path", "updatedAt"]).fetch();

  return files.map((file) => {
    return {
      url: `doc/${file.path === "/index" ? "/" : file.path}`,
      lastmod: file.updatedAt
    }
  });
};
