<template>
  <div>
    <div class="float-right"><a :href="url">View source code</a></div>
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

      let apiBaseUrl = "https://api.github.com/repos/vgmstream/vgmstream/contents/"
      let repoBaseUrl = "https://github.com/vgmstream/vgmstream/blob/master/"
      let fileName =  "README.md"
      let dt = await context.$axios.get(`https://api.github.com/repos/vgmstream/vgmstream/contents/${fileName}`, {
        headers: {
          "accept": "application/vnd.github.v3.html"
        }
      })
      return {mdHtml: dt.data, title: "About", url: `${repoBaseUrl}${fileName}`}
    }
}
</script>

<style lang="scss">
.anchor {
  display: none;
}
</style>
