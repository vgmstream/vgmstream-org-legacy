<template>
  <div>
    <b-jumbotron class="text-center" header="vgmstream" lead="Software for playing a wide variety of audio formats used in video games.">
      <p>Available for:</p>
      <div class="text-center iconcarrousel pb-3">
        <i class="vgs-terminal" title="Command line"></i>
        <i class="vgs-winamp" title="Winamp"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span></i>
        <i class="vgs-foobar2000" title="foobar2000"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span></i>
        <img title="XMPlay"  srcset="icons/xmplay.png 1x, icons/xmplay@2x.png 2x, icons/xmplay@3x.png 3x" style="width: 32pt; margin-bottom: 0.25em;" />
        <i class="vgs-audacious" title="XMPLay"><span class="path1"></span><span class="path2"></span><span class="path3"></span></i>
      </div>
      <b-button-group class="pb-3">
        <b-button to="/about">More information</b-button>
        <b-button to="/downloads" variant="success">Downloads</b-button>
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
  font-size: 32pt;
}
</style>
