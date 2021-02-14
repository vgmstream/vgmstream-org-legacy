<template>
  <div>
    <h1>vgmstream documentation</h1>
    <b-list-group>
      <b-list-group-item v-for="(item, index) in pages" :key="index" :to="`/doc${item.path}`">{{item.title}}</b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  head: {
    title: "Documentation"
  },
  async asyncData ({ $content }) {
    return {pages: await $content().only(['title']).fetch()}
  }
}
</script>
