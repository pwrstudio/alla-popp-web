<script lang="ts">
  import { fade } from "svelte/transition"
  import Header from "$lib/components/Header.svelte"
  import VideoPlayer from "$lib/components/VideoPlayer.svelte"
  import { renderBlockText } from "$lib/modules/sanity.js"
  import type { ImageSchemaType } from "@sanity/types"

  interface Work {
    title: string
    posterImage: ImageSchemaType
  }

  export let data: Work
</script>

<Header title="ARCHIVE" link="/archive" titleLink="/archive" />

<div class="work">
  <div class="text" in:fade={{ delay: 200 }}>
    <span class="title">{data.title},</span>
    <!-- <span class="short-description">{data.shortDescription}</span> -->
  </div>
  <!-- IMAGE -->
  {#each data.videos || [] as video}
    <div class="video-container">
      <div class="video" in:fade={{ delay: 400 }}>
        <VideoPlayer url={video.videoUrl} />
      </div>
      {#if video.caption?.content}
        <div class="work-content" in:fade={{ delay: 600 }}>
          {@html renderBlockText(video.caption.content)}
        </div>
      {/if}
    </div>
  {/each}
</div>

<style lang="scss" global>
  @import "src/lib/style/variables.scss";

  .work {
    width: 50%;
    margin-top: $MARGIN;

    @include screen-size("small") {
      width: 100%;
    }

    .text {
      color: $white;
      line-height: $FONT_SIZE_SMALL;
      margin-bottom: $MARGIN;

      .title {
        text-transform: uppercase;
        background: $grey;
        font-size: $FONT_SIZE_LARGE;
        line-height: $FONT_SIZE_LARGE + 7px;
        display: inline;
        padding-right: 6px;
        margin-right: -6px;
      }

      // .short-description {
      //   font-size: $FONT_SIZE_SMALL;
      //   line-height: $FONT_SIZE_SMALL;
      //   background: $grey;
      //   display: inline-block;
      // }
    }

    .video {
      width: 100%;
      line-height: 0;
      background: $grey;

      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
  }

  .work-content {
    font-size: $FONT_SIZE_SMALL;
    line-height: 1em;
    margin-top: $MARGIN;
    margin-bottom: $MARGIN;

    p {
      margin-top: 0;
      max-width: 90ch;
      color: $grey;
      letter-spacing: -0.02em;
    }
  }
</style>
