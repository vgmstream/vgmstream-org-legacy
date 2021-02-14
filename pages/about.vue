<template>
  <nuxt-content :document="page" />
</template>

<script>
export default {
  head() {
    return {
      title: this.page.title
    }
  },
  async asyncData ({ $content }) {
    const page = await $content('README').fetch()

    return {page}
  }
}
</script>
