<template>
  <div>
    <h1>About vgmstream</h1>
    <p>This is vgmstream, a library for playing streamed (pre-recorded) audio
      from video games.</p>
    <p>There are multiple end-user bits:</p>
    <ul>
      <li>a command line decoder called &quot;test.exe/vgmstream-cli&quot;</li>
      <li>a Winamp plugin called &quot;in_vgmstream&quot;</li>
      <li>a foobar2000 component called &quot;foo_input_vgmstream&quot;</li>
      <li>an XMPlay plugin called &quot;xmp-vgmstream&quot;</li>
      <li>an Audacious plugin called &quot;libvgmstream&quot;</li>
      <li>a command line player called &quot;vgmstream123&quot;</li>
    </ul>
    <h2 id="supported-codec-types">Supported codec types</h2>
    <p>Quick list of codecs vgmstream supports, including many obscure ones that
      are used in few games.</p>
    <ul>
      <li>PCM 16-bit</li>
      <li>PCM 8-bit (signed, unsigned)</li>
      <li>PCM 4-bit (signed, unsigned)</li>
      <li>PCM 32-bit float</li>
      <li>u-Law/a-LAW</li>
      <li>CRI ADX (standard, fixed, exponential, encrypted)</li>
      <li>Nintendo DSP ADPCM a.k.a GC ADPCM</li>
      <li>Nintendo DTK ADPCM</li>
      <li>Nintendo AFC ADPCM</li>
      <li>ITU-T G.721</li>
      <li>CD-ROM XA ADPCM</li>
      <li>Sony PSX ADPCM a.k.a VAG (standard, badflags, configurable, extended)</li>
      <li>Sony HEVAG</li>
      <li>Electronic Arts EA-XA (stereo, mono, Maxis)</li>
      <li>Electronic Arts EA-XAS (v0, v1)</li>
      <li>DVI/IMA ADPCM (stereo/mono + high/low nibble, 3DS, Omikron, SNDS, etc)</li>
      <li>Microsoft MS IMA ADPCM (standard, Xbox, NDS, Radical, Wwise, FSB, WV6, etc)</li>
      <li>Microsoft MS ADPCM (standard, Cricket Audio)</li>
      <li>Westwood VBR ADPCM</li>
      <li>Yamaha ADPCM (AICA, Aska)</li>
      <li>Procyon Studio ADPCM</li>
      <li>Level-5 0x555 ADPCM</li>
      <li>lsf ADPCM</li>
      <li>Konami MTAF ADPCM</li>
      <li>Konami MTA2 ADPCM</li>
      <li>Paradigm MC3 ADPCM</li>
      <li>FMOD FADPCM 4-bit ADPCM</li>
      <li>Konami XMD 4-bit ADPCM</li>
      <li>Platinum 4-bit ADPCM</li>
      <li>Argonaut ASF 4-bit ADPCM</li>
      <li>Ocean DSA 4-bit ADPCM</li>
      <li>Circus XPCM ADPCM</li>
      <li>Circus XPCM VQ</li>
      <li>OKI 4-bit ADPCM (16-bit output, 4-shift, PC-FX)</li>
      <li>Ubisoft 4/6-bit ADPCM</li>
      <li>Tiger Game.com ADPCM</li>
      <li>SDX2 2:1 Squareroot-Delta-Exact compression DPCM</li>
      <li>CBD2 2:1 Cuberoot-Delta-Exact compression DPCM</li>
      <li>Activision EXAKT SASSC DPCM</li>
      <li>Xilam DERF DPCM</li>
      <li>InterPlay ACM</li>
      <li>VisualArt&#39;s NWA</li>
      <li>Electronic Arts MicroTalk a.k.a. UTK or UMT</li>
      <li>Relic Codec</li>
      <li>CRI HCA</li>
      <li>Xiph Vorbis (Ogg, FSB5, Wwise, OGL, Silicon Knights)</li>
      <li>MPEG MP1/2/3 (standard, AHX, XVAG, FSB, AWC, P3D, etc)</li>
      <li>ITU-T G.722.1 annex C (Polycom Siren 14)</li>
      <li>ITU-T G.719 annex B (Polycom Siren 22)</li>
      <li>Electronic Arts EALayer3</li>
      <li>Electronic Arts EA-XMA</li>
      <li>Sony ATRAC3, ATRAC3plus</li>
      <li>Sony ATRAC9</li>
      <li>Microsoft XMA1/2</li>
      <li>Microsoft WMA v1, WMA v2, WMAPro</li>
      <li>AAC</li>
      <li>Bink</li>
      <li>AC3/SPDIF</li>
      <li>Xiph Opus (Ogg, Switch, EA, UE4, Exient)</li>
      <li>Xiph CELT (FSB)</li>
      <li>Musepack</li>
      <li>FLAC</li>
      <li>Others</li>
    </ul>
    <p>Sometimes standard codecs come in non-standard layouts that aren&#39;t normally
      supported by other players (like multiple <code>.ogg</code> or <code>.mp3</code> files chunked and
      interleaved together in custom ways).</p>
    <p>Some codecs are not fully correct compared to the games due to minor bugs, but
      in most cases it isn&#39;t audible, and general accuracy is high, with emphasis in
      proper support of encoder delay, accurate sample counts and seeking that other
      plugins may lack.</p>
    <p>Note that vgmstream doesn&#39;t (can&#39;t) reproduce in-game music 1:1, as internal
      resampling, filters, volume, etc, are not replicated.</p>
    <h2 id="supported-file-types">Supported file types</h2>
    <p>As manakoAT likes to say, the extension doesn&#39;t really mean anything, but it&#39;s
      the most obvious way to identify files.</p>
    <p>This list is not complete and many other files are supported.</p>
    <ul>
      <li>PS2/PSX ADPCM:<ul>
        <li>.ads/.ss2</li>
        <li>.ass</li>
        <li>.ast</li>
        <li>.bg00</li>
        <li>.bmdx</li>
        <li>.ccc</li>
        <li>.cnk</li>
        <li>.dxh</li>
        <li>.enth</li>
        <li>.fag</li>
        <li>.filp</li>
        <li>.gcm</li>
        <li>.gms</li>
        <li>.hgc1</li>
        <li>.ikm</li>
        <li>.ild</li>
        <li>.ivb</li>
        <li>.joe</li>
        <li>.kces</li>
        <li>.khv</li>
        <li>.leg</li>
        <li>.mcg</li>
        <li>.mib, .mi4 (w/ or w/o .mih)</li>
        <li>.mic</li>
        <li>.mihb (merged mih+mib)</li>
        <li>.msa</li>
        <li>.msvp</li>
        <li>.musc</li>
        <li>.npsf</li>
        <li>.pnb</li>
        <li>.psh</li>
        <li>.rkv</li>
        <li>.rnd</li>
        <li>.rstm</li>
        <li>.rws</li>
        <li>.rxw</li>
        <li>.snd</li>
        <li>.sfs</li>
        <li>.sl3</li>
        <li>.smpl (w/ bad flags)</li>
        <li>.ster</li>
        <li>.str+.sth</li>
        <li>.str (MGAV blocked)</li>
        <li>.sts</li>
        <li>.svag</li>
        <li>.svs</li>
        <li>.tec (w/ bad flags)</li>
        <li>.tk5 (w/ bad flags)</li>
        <li>.vas</li>
        <li>.vag</li>
        <li>.vgs (w/ bad flags)</li>
        <li>.vig</li>
        <li>.vpk</li>
        <li>.vs</li>
        <li>.vsf</li>
        <li>.wp2</li>
        <li>.xa2</li>
        <li>.xa30</li>
        <li>.xwb+xwh</li>
      </ul>
      </li>
      <li>GC/Wii/3DS DSP ADPCM:<ul>
        <li>.aaap</li>
        <li>.agsc</li>
        <li>.asr</li>
        <li>.bns</li>
        <li>.bo2</li>
        <li>.capdsp</li>
        <li>.cfn</li>
        <li>.ddsp</li>
        <li>.dsp<ul>
          <li>standard, optional dual file stereo</li>
          <li>RS03</li>
          <li>Cstr</li>
          <li>_lr.dsp</li>
          <li>MPDS</li>
        </ul>
        </li>
        <li>.gca</li>
        <li>.gcm</li>
        <li>.gsp+.gsp</li>
        <li>.hps</li>
        <li>.idsp</li>
        <li>.ish+.isd</li>
        <li>.lps</li>
        <li>.mca</li>
        <li>.mpdsp</li>
        <li>.mss</li>
        <li>.mus (not quite right)</li>
        <li>.ndp</li>
        <li>.pdt</li>
        <li>.sdt</li>
        <li>.smp</li>
        <li>.sns</li>
        <li>.spt+.spd</li>
        <li>.ssm</li>
        <li>.stm/.dsp</li>
        <li>.str</li>
        <li>.str+.sth</li>
        <li>.sts</li>
        <li>.swd</li>
        <li>.thp, .dsp</li>
        <li>.tydsp</li>
        <li>.vjdsp</li>
        <li>.waa, .wac, .wad, .wam</li>
        <li>.was</li>
        <li>.wsd</li>
        <li>.wsi</li>
        <li>.ydsp</li>
        <li>.ymf</li>
        <li>.zwdsp</li>
      </ul>
      </li>
      <li>PCM:<ul>
        <li>.aiff (8 bit, 16 bit)</li>
        <li>.asd (16 bit)</li>
        <li>.baka (16 bit)</li>
        <li>.bh2pcm (16 bit)</li>
        <li>.dmsg (16 bit)</li>
        <li>.gcsw (16 bit)</li>
        <li>.gcw (16 bit)</li>
        <li>.his (8 bit)</li>
        <li>.int (16 bit)</li>
        <li>.pcm (8 bit, 16 bit)</li>
        <li>.kraw (16 bit)</li>
        <li>.raw (16 bit)</li>
        <li>.rwx (16 bit)</li>
        <li>.sap (16 bit)</li>
        <li>.snd (16 bit)</li>
        <li>.sps (16 bit)</li>
        <li>.str (16 bit)</li>
        <li>.xss (16 bit)</li>
        <li>.voi (16 bit)</li>
        <li>.wb (16 bit)</li>
        <li>.zsd (8 bit)</li>
      </ul>
      </li>
      <li>Xbox IMA ADPCM:<ul>
        <li>.matx</li>
        <li>.wavm</li>
        <li>.wvs</li>
        <li>.xmu</li>
        <li>.xvas</li>
        <li>.xwav</li>
      </ul>
      </li>
      <li>Yamaha AICA ADPCM:<ul>
        <li>.adpcm</li>
        <li>.dcs+.dcsw</li>
        <li>.str</li>
        <li>.spsd</li>
      </ul>
      </li>
      <li>IMA ADPCM:<ul>
        <li>.bar (IMA ADPCM)</li>
        <li>.pcm/dvi (DVI IMA ADPCM)</li>
        <li>.hwas (IMA ADPCM)</li>
        <li>.dvi/idvi (DVI IMA ADPCM)</li>
        <li>.ivaud (IMA ADPCM)</li>
        <li>.myspd (IMA ADPCM)</li>
        <li>.strm (IMA ADPCM)</li>
      </ul>
      </li>
      <li>multi:<ul>
        <li>.aifc (SDX2 DPCM, DVI IMA ADPCM)</li>
        <li>.asf/as4 (8/16 bit PCM, DVI IMA ADPCM)</li>
        <li>.ast (GC AFC ADPCM, 16 bit PCM)</li>
        <li>.aud (IMA ADPCM, WS DPCM)</li>
        <li>.aus (PSX ADPCM, Xbox IMA ADPCM)</li>
        <li>.brstm (GC DSP ADPCM, 8/16 bit PCM)</li>
        <li>.emff (PSX APDCM, GC DSP ADPCM)</li>
        <li>.fsb/wii (PSX ADPCM, GC DSP ADPCM, Xbox IMA ADPCM, MPEG audio, FSB Vorbis, MS XMA)</li>
        <li>.msf (PCM, PSX ADPCM, ATRAC3, MP3)</li>
        <li>.musx (PSX ADPCM, Xbox IMA ADPCM, DAT4 IMA ADPCM)</li>
        <li>.nwa (16 bit PCM, NWA DPCM)</li>
        <li>.p3d (Radical ADPCM, Radical MP3, XMA2)</li>
        <li>.psw (PSX ADPCM, GC DSP ADPCM)</li>
        <li>.rwar, .rwav (GC DSP ADPCM, 8/16 bit PCM)</li>
        <li>.rws (PSX ADPCM, XBOX IMA ADPCM, GC DSP ADPCM, 16 bit PCM)</li>
        <li>.rwsd (GC DSP ADPCM, 8/16 bit PCM)</li>
        <li>.rsd (PSX ADPCM, 16 bit PCM, GC DSP ADPCM, Xbox IMA ADPCM, Radical ADPCM)</li>
        <li>.rrds (NDS IMA ADPCM)</li>
        <li>.sad (GC DSP ADPCM, NDS IMA ADPCM, Procyon Studios NDS ADPCM)</li>
        <li>.sgd/sgb+sgh/sgx (PSX ADPCM, ATRAC3plus, AC3)</li>
        <li>.seg (Xbox IMA ADPCM, PS2 ADPCM)</li>
        <li>.sng/asf/str/eam/aud (8/16 bit PCM, EA-XA ADPCM, PSX ADPCM, GC DSP ADPCM, XBOX IMA ADPCM, MPEG audio, EALayer3)</li>
        <li>.strm (NDS IMA ADPCM, 8/16 bit PCM)</li>
        <li>.sb0..7 (Ubi IMA ADPCM, GC DSP ADPCM, PSX ADPCM, Xbox IMA ADPCM, ATRAC3)</li>
        <li>.swav (NDS IMA ADPCM, 8/16 bit PCM)</li>
        <li>.xwb (PCM, Xbox IMA ADPCM, MS ADPCM, XMA, XWMA, ATRAC3)</li>
        <li>.xwb+xwh (PCM, PSX ADPCM, ATRAC3)</li>
        <li>.wav/lwav (unsigned 8 bit PCM, 16 bit PCM, GC DSP ADPCM, MS IMA ADPCM, XBOX IMA ADPCM)</li>
        <li>.wem [lwav/logg/xma] (PCM, Wwise Vorbis, Wwise IMA ADPCM, XMA, XWMA, GC DSP ADPCM, Wwise Opus)</li>
      </ul>
      </li>
      <li>etc:<ul>
        <li>.2dx9 (MS ADPCM)</li>
        <li>.aax (CRI ADX ADPCM)</li>
        <li>.acm (InterPlay ACM)</li>
        <li>.adp (GC DTK ADPCM)</li>
        <li>.adx (CRI ADX ADPCM)</li>
        <li>.afc (GC AFC ADPCM)</li>
        <li>.ahx (MPEG-2 Layer II)</li>
        <li>.aix (CRI ADX ADPCM)</li>
        <li>.at3 (Sony ATRAC3 / ATRAC3plus)</li>
        <li>.aud (Silicon Knights Vorbis)</li>
        <li>.baf (PSX configurable ADPCM)</li>
        <li>.bgw (PSX configurable ADPCM)</li>
        <li>.bnsf (G.722.1)</li>
        <li>.caf (Apple IMA4 ADPCM, others)</li>
        <li>.dec/de2 (MS ADPCM)</li>
        <li>.hca (CRI High Compression Audio)</li>
        <li>.pcm/kcey (DVI IMA ADPCM)</li>
        <li>.lsf (LSF ADPCM)</li>
        <li>.mc3 (Paradigm MC3 ADPCM)</li>
        <li>.mp4/lmp4 (AAC)</li>
        <li>.msf (PCM, PSX ADPCM, ATRAC3, MP3)</li>
        <li>.mtaf (Konami ADPCM)</li>
        <li>.mta2 (Konami XAS-like ADPCM)</li>
        <li>.mwv (Level-5 0x555 ADPCM)</li>
        <li>.ogg/logg (Ogg Vorbis)</li>
        <li>.ogl (Shin&#39;en Vorbis)</li>
        <li>.rsf (CCITT G.721 ADPCM)</li>
        <li>.sab (Worms 4 soundpacks)</li>
        <li>.s14/sss (G.722.1)</li>
        <li>.sc (Activision EXAKT SASSC DPCM)</li>
        <li>.scd (MS ADPCM, MPEG Audio, 16 bit PCM)</li>
        <li>.sd9 (MS ADPCM)</li>
        <li>.smp (MS ADPCM)</li>
        <li>.spw (PSX configurable ADPCM)</li>
        <li>.stm/lstm [amts/ps2stm/stma] (16 bit PCM, DVI IMA ADPCM, GC DSP ADPCM)</li>
        <li>.str (SDX2 DPCM)</li>
        <li>.stx (GC AFC ADPCM)</li>
        <li>.ulw (u-Law PCM)</li>
        <li>.um3 (Ogg Vorbis)</li>
        <li>.xa (CD-ROM XA audio)</li>
        <li>.xma (MS XMA/XMA2)</li>
        <li>.sb0/sb1/sb2/sb3/sb4/sb5/sb6/sb7 (many)</li>
        <li>.sm0/sm1/sm2/sm3/sm4/sm5/sm6/sm7 (many)</li>
        <li>.bao/pk (many)</li>
      </ul>
      </li>
      <li>artificial/generic headers:<ul>
        <li>.genh (lots)</li>
        <li>.txth (lots)</li>
      </ul>
      </li>
      <li>loop assists:<ul>
        <li>.mus (playlist for .acm)</li>
        <li>.pos (loop info for .wav: 32 bit LE loop start sample + loop end sample)</li>
        <li>.sli (loop info for .ogg)</li>
        <li>.sfl (loop info for .ogg)</li>
        <li>.vgmstream + .vgmstream.pos (FFmpeg formats + loop assist)</li>
      </ul>
      </li>
      <li>other:<ul>
        <li>.adxkey (decryption key for .adx)</li>
        <li>.ahxkey (decryption key for .ahx)</li>
        <li>.hcakey (decryption key for .hca)</li>
        <li>.fsbkey (decryption key for .fsb)</li>
        <li>.bnsfkey (decryption key for .bnsf)</li>
        <li>.txtp (per song segment/layer handler and player configurator)</li>
      </ul>
      </li>
    </ul>


  </div>
</template>

<script>
export default {
  head: {
    title: "About"
  }
}
</script>
