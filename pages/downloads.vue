<template>
  <div>
    <h1>Downloads</h1>
    <p>Download the latest build.</p>
    <hr />
    <p>
      Built from commit
      <a :href="builds.latestCommitData.html_url"
        ><code>{{ builds.latestCommitData.sha }}</code></a
      >:<br />
    </p>
    <pre class="font-weight-bold">{{
      builds.latestCommitData.commit.message
    }}</pre>
    <br />
    by {{ builds.latestCommitData.commit.author.name }} on
    {{ $moment(builds.latestCommitData.commit.author.date).format("LLLL ZZ") }}.
    <hr />
    <h2><i class="vgs-windows pr-3" style="color: #0078d6"></i>Windows</h2>
    <b-button-group vertical>
      <b-btn
        :href="`https://vgmstream-builds.s3-us-west-1.amazonaws.com/${builds.latestCommitData.sha}/windows/vgmstream-win.zip`"
        size="lg"
        variant="success"
        ><div class="d-inline-flex">
          <i class="vgs-terminal"></i>
          <i class="vgs-winamp"
            ><span class="path1"></span><span class="path2"></span
            ><span class="path3"></span><span class="path4"></span
            ><span class="path5"></span><span class="path6"></span
            ><span class="path7"></span></i
          ><i class="vgs-xmplay"
            ><span class="path1"></span><span class="path2"></span
            ><span class="path3"></span><span class="path4"></span
            ><span class="path5"></span><span class="path6"></span
            ><span class="path7"></span><span class="path8"></span></i
          >Command-line tools, Winamp and XMPlay plug-ins
        </div>
      </b-btn>
      <b-btn
        :href="`https://vgmstream-builds.s3-us-west-1.amazonaws.com/${builds.latestCommitData.sha}/windows/foo_input_vgmstream.fb2k-component`"
        size="lg"
        variant="success"
        class="text-left"
        ><div class="d-inline-flex">
          <i class="vgs-foobar2000 mr-2"
            ><span class="path1"></span><span class="path2"></span
            ><span class="path3"></span><span class="path4"></span
            ><span class="path5"></span></i
          >foobar2000 component
        </div></b-btn
      >
    </b-button-group>
    <h2 class="pt-3">Linux</h2>

    <b-btn
      :href="`https://vgmstream-builds.s3-us-west-1.amazonaws.com/${builds.latestCommitData.sha}/linux/vgmstream-cli.tar.gz`"
      size="lg"
      variant="success"
      class="text-left"
      ><div class="d-inline-flex">
        <i class="vgs-terminal pr-2"></i> Command-line tools (static build)
      </div>
    </b-btn>
  </div>
</template>

<script>
export default {
  head: {
    title: "Downloads",
  },
  async asyncData(context) {
    let data = await context.$axios.get(
      "https://vgmstream-builds.losno.co/latestData"
    );
    return {
      builds: await data.data,
    };
  },
};
</script>

<style lang="scss" scoped>
i.vgs-hcs {
  font-size: revert;
}
i[class^="vgs-"] {
  font-size: 24pt;
}
</style>
