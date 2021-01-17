<template>
  <div>
    <b-jumbotron class="text-center"lead="Software for playing a wide variety of audio formats used in video games.">
      <template slot="header">
        <i class="vgs-vgmstream"><span class="path1"></span><span class="path2"></span></i> vgmstream
      </template>
      <p>Available for:</p>
      <div class="text-center iconcarrousel pb-3">
        <i class="vgs-terminal" title="Command line"></i>
        <a href="https://getwacup.com/" title="Winamp (link goes to WACUP)"><i class="vgs-winamp" ><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span></i></a>
        <a href="https://foobar2000.org" title="foobar2000"><i class="vgs-foobar2000" ><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span></i></a>
        <a href="https://www.un4seen.com/xmplay.html" title="XMPlay"><i class="vgs-xmplay"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span></i></a>
        <a href="https://audacious-media-player.org/" title="Audacious Media Player"><i class="vgs-audacious" ><span class="path1"></span><span class="path2"></span><span class="path3"></span></i></a>
      </div>
      <p>Built into:</p>
      <div class="text-center iconcarrousel pb-3">
        <a href="https://kode54.net/cog" title="Cog"><i class="vgs-cog"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span></i></a>
      </div>
      <b-button-group >
        <b-button to="/about">About</b-button>
        <b-button to="/downloads" variant="success">Downloads</b-button>
        <b-button to="/doc" variant="warning">Documentation</b-button>
      </b-button-group>
      <b-button-group >
        <github-buttons/>
      </b-button-group>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  head: {
    title: "Main page"
  }
}
</script>

<style lang="scss">
.iconcarrousel {
  font-size: 48pt;
}
</style>
