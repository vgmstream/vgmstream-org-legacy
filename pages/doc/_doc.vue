<template>
  <div>
    <span class="text-muted">Last updated on <time :datetime="page.updatedAt">{{$moment(page.updatedAt).format("LLLL")}}</time>. </span>
    <nuxt-content :document="page" id="body" />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.page.title
    }
  },
  middleware({redirect, route: {params}}) {
    if (params.doc !== params.doc.toUpperCase()) {
      redirect(`/doc/${params.doc.toUpperCase()}`)
    }
  },
  async asyncData({$content, error, route: {params}}) {
    const page = await $content(params.doc).fetch().catch((err) => {
      error({ statusCode: 404, message: 'Page not found' })
    })

    return {page}
  }
}
</script>

<style lang="scss">
.toc {
  position: sticky;
  top: 74px;
}
</style>
