<script lang="ts">
  import { fade } from "svelte/transition"
  import Header from "$lib/components/Header.svelte"
  import { renderBlockText } from "$lib/modules/sanity.js"
  export let data
</script>

<Header title="CV" link="/" />

<div class="cv">
  <h1 in:fade={{ delay: 200 }}>{data.title}</h1>
  <div in:fade={{ delay: 200 }}>
    <span class="bio">{data.bio}</span>
  </div>

  <div class="cv-content" in:fade={{ delay: 400 }}>
    {@html renderBlockText(data.content.content)}
  </div>
</div>

<style lang="scss" global>
  @import "src/lib/style/variables.scss";

  .cv {
    margin-top: $MARGIN * 2;

    .cv-content {
      font-size: $FONT_SIZE_SMALL;
      line-height: 1em;
      margin-top: $MARGIN;
      margin-bottom: $MARGIN * 3;

      h2 {
        font-size: $FONT_SIZE_SMALL;
        line-height: 1em;
        color: $white;
        text-transform: uppercase;
        background: $grey;
        display: inline-block;
        margin: 0;
      }

      p {
        margin-top: 0;
        max-width: 90ch;
        color: $grey;
        letter-spacing: -0.02em;
      }
    }

    h1 {
      font-size: $FONT_SIZE_LARGE;
      color: $white;
      background: $grey;
      display: inline-block;
      margin: 0;
      text-transform: uppercase;
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
