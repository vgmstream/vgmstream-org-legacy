<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="primary" class="shadow" sticky>
      <b-navbar-brand to="/">vgmstream</b-navbar-brand>
      <transition name="fade">
        <b-navbar-toggle target="nav-col"  v-if="$route.name !== 'index'"></b-navbar-toggle>
      </transition>
      <transition name="fade">
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
      </transition>
    </b-navbar>
    <b-container class="py-3">
      <Nuxt/>
    </b-container>
    <footer class="footer mt-auto py-3 bg-light">
      <b-container>
        <div class="clearfix">
          <div class="float-left">
            <span class="text-muted">A project of <a href="https://hcs64.com"><i class="vgs-hcs"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span></i> Halley's Comet Software</a> and <a href="https://losno.co" class="lsicon">
          <span class="lo">Lo</span><span class="sno">Sno</span><span class="co">Co</span>
        </a>.</span>
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

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.lsicon {
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: bold;
  &>.lo{
    color: #FF7F00 !important;
  }
  &>.sno{
    color: #99AAED !important;
  }
  &>.co{
    color: #000 !important;
  }
}

.vgs-hcs {
  font-size: unset !important;
}

</style>
