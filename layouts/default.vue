<template>
  <div>
    <transition name="fade2">
      <b-navbar toggleable="md" type="dark" variant="primary" class="shadow" sticky v-if="$route.name !== 'index'">
        <b-navbar-brand to="/">vgmstream</b-navbar-brand>
        <b-navbar-toggle target="nav-col"  v-if="$route.name !== 'index'"></b-navbar-toggle>
          <b-collapse id="nav-col" is-nav  v-if="$route.name !== 'index'">
            <b-navbar-nav>
              <b-nav-item to="/about" active-class="active">About</b-nav-item>
              <b-nav-item to="/downloads" active-class="active">Downloads</b-nav-item>
              <b-nav-item to="/doc" active-class="active">Documentation</b-nav-item>
            </b-navbar-nav>
            <b-navbar-nav class="ml-auto">
              <github-buttons  />
            </b-navbar-nav>
          </b-collapse>
      </b-navbar>
    </transition>
    <b-container class="py-3">
      <Nuxt/>
    </b-container>
    <footer class="footer mt-auto py-3 bg-light">
      <b-container>
        <div class="clearfix">
          <div class="float-left">
            <span class="text-muted">A project of <a href="https://hcs64.com"><i class="vgs-hcs"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span></i> Halley's Comet Software</a> and <a href="https://losno.co"><i class="vgs-losnoco"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span><span class="path11"></span><span class="path12"></span><span class="path13"></span><span class="path14"></span></i></a>.</span>
          </div>
          <div class="float-right">This website is <a href="https://github.com/vgmstream/vgmstream-org">open source</a>.</div>
        </div>
      </b-container>
    </footer>

  </div>
</template>

<script>

export default {
  name: "vgmstreamDefaultLayout"
}
</script>

<style lang="scss">
$enable-shadows: true;
$enable-gradients: true;
$enable-responsive-font-sizes: true;

$primary: rgb(68, 150, 7);
$secondary: #d44d04;
$success: rgb(30, 105, 29);

//noinspection CssUnknownTarget
@import 'bootstrap/scss/bootstrap.scss';
//noinspection CssUnknownTarget
@import 'bootstrap-vue/src/index.scss';

html {
  scroll-behavior: smooth;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.25s
}
.page-enter,
.page-leave-active {
  opacity: 0;
}

.navbar {
  transform-origin: top center !important;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.fade2-enter-active, .fade2-leave-active {
  transition: all .5s;
}
.fade2-enter, .fade2-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: scaleY(0);
  margin-top: -56px;
}

.vgs-hcs {
  font-size: unset !important;
}

</style>
