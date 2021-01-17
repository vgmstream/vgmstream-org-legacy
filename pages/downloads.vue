<template>
  <div>
    <h1>Downloads</h1>
    <p>Download the latest build.</p>
    <hr/>
    <p>Built from commit <a :href="builds.latestCommitData.html_url"><code>{{ builds.latestCommitData.sha }}</code></a>:<br/>
    <pre class="font-weight-bold">{{builds.latestCommitData.commit.message}}</pre><br/> by {{builds.latestCommitData.commit.author.name}} on {{$moment(builds.latestCommitData.commit.author.date).format("LLLL ZZ")}}.
    <hr/>
    <h2><i class="vgs-windows pr-3" style="color: #0078d6"></i>Windows</h2>
    <b-button-group vertical>
      <b-btn :href="`https://vgmstream-builds.s3-us-west-1.amazonaws.com/${builds.latestCommitData.sha}/windows/test.zip`" size="lg" variant="success"><div class="d-inline-flex">
        <i class="vgs-terminal"></i> <i class="vgs-winamp"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span></i> <img title="XMPlay"  srcset="icons/xmplay.png 1x, icons/xmplay@2x.png 2x, icons/xmplay@3x.png 3x" style="width: 24pt; height: 24pt; vertical-align: baseline !important; margin-right: 10px"/> Command-line tools, Winamp and XMPlay plug-ins
      </div> </b-btn>
      <b-btn :href="`https://vgmstream-builds.s3-us-west-1.amazonaws.com/${builds.latestCommitData.sha}/windows/foo_input_vgmstream.fb2k-component`" size="lg" variant="success" class="text-left"><div class="d-inline-flex"><i class="vgs-foobar2000 mr-2"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span></i>foobar2000 component</div></b-btn>
    </b-button-group>
    <h2 class="pt-3"><i class="vgs-ubuntu pr-3"></i>Ubuntu 18.04</h2>
    <b-alert show>Install these packages first: <code>sudo apt-get install mpg123 libvorbis0a libvorbisenc2 libvorbisfile3 ffmpeg libao4 libjansson4</code></b-alert>
    <b-button-group vertical>
      <b-btn :href="`https://vgmstream-builds.s3-us-west-1.amazonaws.com/${builds.latestCommitData.sha}/linux/vgmstream-cli.tar.gz`" size="lg" variant="success" class="text-left"><div class="d-inline-flex">
        <i class="vgs-terminal pr-2"></i> Command-line tools</div> </b-btn>
      <b-btn :href="`https://vgmstream-builds.s3-us-west-1.amazonaws.com/${builds.latestCommitData.sha}/linux/vgmstream-audacious.tar.gz`" size="lg" variant="success" class="text-left"><div class="d-inline-flex"><i class="vgs-audacious pr-2"><span class="path1"></span><span class="path2"></span><span class="path3"></span></i> Audacious plug-in</div></b-btn>
    </b-button-group>

  </div>
</template>

<script>
export default {
  head: {
    title: "Downloads"
  },
  async asyncData(context) {
    let data = await context.$axios.get("https://vgmstream-builds.losno.co/latestData")
    return {
      builds: await data.data
    }
  }

}
</script>

<style lang="scss" scoped>

i.vgs-hcs {
  font-size: revert;
}
i[class^="vgs-"] {
  font-size: 24pt;
}
</style>
