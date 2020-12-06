<template>
  <div>
    <h1>vgmstream documentation</h1>
    <b-list-group>
      <b-list-group-item to="/doc/readme">README</b-list-group-item>
      <b-list-group-item to="/doc/dev">Development help</b-list-group-item>
      <b-list-group-item to="/doc/build">Building instructions</b-list-group-item>
      <b-list-group-item to="/doc/cmake">Building instructions for CMake</b-list-group-item>
      <b-list-group-item to="/doc/txtp">Info about the <code>TXTP</code> format</b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  head: {
    title: "Documentation"
  }
}
</script>
