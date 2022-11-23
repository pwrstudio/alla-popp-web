<script lang="ts">
  import { fade } from "svelte/transition"
  import Header from "$lib/components/Header.svelte"
  import { renderBlockText } from "$lib/modules/sanity.js"

  interface CvData {
    title: string
    bio: string
  }

  export let data: CvData
</script>

<Header title="CV" link="/" />

<div class="cv">
  <div in:fade={{ delay: 200 }}>
    <h1>{data.title}</h1>
    <div>
      <span class="bio">{data.bio}</span>
    </div>
  </div>

  <div class="cv-content" in:fade={{ delay: 400 }}>
    {@html renderBlockText(data.content.content)}
  </div>
</div>

<style lang="scss" global>
  @import "src/lib/style/variables.scss";

  .cv {
    margin-top: $MARGIN;

    .cv-content {
      font-size: $FONT_SIZE_SMALL;
      line-height: 1em;
      margin-top: $MARGIN * 1.5;
      margin-bottom: $MARGIN * 6;

      h2 {
        font-size: $FONT_SIZE_SMALL;
        line-height: 1em;
        color: $white;
        text-transform: uppercase;
        background: $grey;
        display: inline-block;
        margin: 0;
        padding: 1px;
      }

      p {
        margin-top: 0;
        max-width: 90ch;
        color: $grey;
        letter-spacing: -0.025em;
      }
    }

    h1 {
      font-size: $FONT_SIZE_LARGE;
      color: $white;
      background: $grey;
      display: inline;
      margin: 0;
      text-transform: uppercase;
      line-height: 1em;
    }

    .bio {
      font-size: $FONT_SIZE_SMALL;
      color: $white;
      background: $grey;
      display: inline;
      margin: 0;
      padding: 0;
    }
  }
</style>
