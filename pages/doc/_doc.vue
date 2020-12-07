<template>
  <div>
    <div class="clearfix">
      <div class="float-left"><nuxt-link to="/doc">Go back</nuxt-link></div>
      <div class="float-right"><a :href="url">View source code</a></div>
    </div>
    <hr/>
    <div v-html="mdHtml" class="pt-3">
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.title
    }
  },
  async asyncData(context) {
    const docArray = ['readme', 'build', 'cmake', 'dev', 'genh', 'txth', 'txtp']
    if (!docArray.includes(context.route.params.doc)) {
      context.error(404)
    } else {
      let apiBaseUrl = "https://api.github.com/repos/vgmstream/vgmstream/contents/"
      let repoBaseUrl = "https://github.com/vgmstream/vgmstream/blob/master/"
      let fileName
      if (context.route.params.doc === 'readme') {
        fileName = "README.md"
      } else {
        fileName = `doc/${context.route.params.doc.toUpperCase()}.md`
      }
      let dt = await context.$axios.get(`https://api.github.com/repos/vgmstream/vgmstream/contents/${fileName}`, {
        headers: {
          "accept": "application/vnd.github.v3.html"
        }
      })
      return {mdHtml: dt.data.replace("CMAKE.md", "cmake"), title: fileName === "README.md" ? "README" :  dt.data.match(/<h1>(.*)<\/h1>/i)[1].replace(/(<([^>]+)>)/gi, ""), url: `${repoBaseUrl}${fileName}`}
    }
  }
}
</script>

<style lang="scss">
.anchor {
  display: none;
}
</style>
