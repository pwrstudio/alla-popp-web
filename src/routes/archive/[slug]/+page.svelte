<script lang="ts">
  import { fade } from "svelte/transition"
  import Header from "$lib/components/Header.svelte"
  import VideoPlayer from "$lib/components/VideoPlayer.svelte"
  import { renderBlockText } from "$lib/modules/sanity.js"

  interface Work {
    title: string
    shortDescription: string
    videoUrl: string
  }

  export let data: Work

  console.log(data)
</script>

<Header title="ARCHIVE" link="/archive" titleLink="/archive" />

<div class="work">
  <div class="text" in:fade={{ delay: 200 }}>
    <span class="title">{data.title},</span>
    <span class="short-description">{data.shortDescription}</span>
  </div>
  <!-- IMAGE -->
  <div class="video" in:fade={{ delay: 400 }}>
    <VideoPlayer url={data.videoUrl} poster={data.posterImage} />
  </div>
  {#if data.content?.content}
    <div class="work-content" in:fade={{ delay: 600 }}>
      {@html renderBlockText(data.content.content)}
    </div>
  {/if}
</div>

<style lang="scss" global>
  @import "src/lib/style/variables.scss";

  .work {
    width: 50%;
    margin-top: $MARGIN * 2;

    @include screen-size("small") {
      width: 100%;
    }

    .text {
      line-height: $FONT_SIZE_SMALL;

      .title {
        text-transform: uppercase;
        font-size: $FONT_SIZE_LARGE;
        line-height: $FONT_SIZE_LARGE;
        color: $white;
        background: $grey;
        display: inline;
      }

      .short-description {
        color: $white;
        background: $grey;
        font-size: $FONT_SIZE_SMALL;
        line-height: $FONT_SIZE_SMALL;
        display: inline;
      }
    }

    .video {
      margin-top: $MARGIN;
      width: 100%;
      line-height: 0;
      background: $grey;

      img {
        object-fit: fill;
        width: 100%;
        height: 100%;
      }
    }
  }

  .work-content {
    font-size: $FONT_SIZE_SMALL;
    line-height: 1em;
    margin-top: $MARGIN;
    margin-bottom: $MARGIN * 3;

    p {
      margin-top: 0;
      max-width: 90ch;
      color: $grey;
      letter-spacing: -0.02em;
    }
  }
</style>
