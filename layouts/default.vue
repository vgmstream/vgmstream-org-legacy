<template>
  <div>
    <transition name="fade2">
      <b-navbar
        toggleable="md"
        type="dark"
        variant="primary"
        class="shadow"
        sticky
        v-if="$route.name !== 'index'"
      >
        <b-navbar-brand to="/">vgmstream</b-navbar-brand>
        <b-navbar-toggle
          target="nav-col"
          v-if="$route.name !== 'index'"
        ></b-navbar-toggle>
        <b-collapse id="nav-col" is-nav v-if="$route.name !== 'index'">
          <b-navbar-nav>
            <b-nav-item to="/about" active-class="active">About</b-nav-item>
            <b-nav-item to="/downloads" active-class="active"
            >Downloads
            </b-nav-item
            >
            <b-nav-item to="/doc" active-class="active"
            >Documentation
            </b-nav-item
            >
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <github-buttons/>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </transition>
    <b-container class="pt-3 pb-5 vg-push">
      <Nuxt/>
    </b-container>
    <footer class="footer mt-auto py-3 bg-light fixed-bottom">
      <b-container>
        <div class="clearfix">
          <div class="float-left">
            <span class="text-muted"
            >A project of
              <a href="https://hcs64.com"
              >
                Halley's Comet Software</a
              >
              and
              <a href="https://losno.co" class="losnocoLogo" ><span style="color:#F7931E;">LO</span><span style="color:#B479E0;">SNO</span>CO</a>.</span
            >
          </div>
          <div class="float-right">
            This website is
            <a href="https://github.com/vgmstream/vgmstream-org">open source</a
            >.
          </div>
        </div>
      </b-container>
    </footer>
  </div>
</template>

<script>
export default {
  name: "vgmstreamDefaultLayout",
};
</script>

<style lang="scss">
$enable-shadows: true;
$enable-gradients: true;
$enable-responsive-font-sizes: true;

$primary: rgb(68, 150, 7);
$secondary: #d44d04;
$success: rgb(30, 105, 29);

//noinspection CssUnknownTarget
@import "bootstrap/scss/bootstrap.scss";
//noinspection CssUnknownTarget
@import "bootstrap-vue/src/index.scss";

html {
  scroll-behavior: smooth;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.25s;
}

.page-enter,
.page-leave-active {
  opacity: 0;
}

.navbar {
  transform-origin: top center !important;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
{
  opacity: 0;
}

.fade2-enter-active,
.fade2-leave-active {
  transition: all 0.5s;
}

.fade2-enter, .fade2-leave-to /* .fade-leave-active below version 2.1.8 */
{
  transform: scaleY(0);
  margin-top: -56px;
}

.vgs-hcs {
  font-size: unset !important;
}

.losnocoLogo {
  font-weight: 900;
  color: black;
}
</style>
