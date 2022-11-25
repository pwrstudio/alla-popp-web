<script lang="ts">
  import { urlFor } from "$lib/modules/sanity.js"
  import getVideoId from "get-video-id"
  import PlayArrow from "$lib/graphics/PlayArrow.svelte"
  import type { ImageSchemaType } from "@sanity/types"

  export let url: string
  export let poster: ImageSchemaType

  let videoActive = true

  const toggleVideo = () => {
    videoActive = !videoActive
  }
</script>

<!-- VIDEO -->
<div class="video-block" on:click={toggleVideo}>
  <div class="embed">
    {#if videoActive}
      <div class="inner">
        {#if url.includes("youtube")}
          <iframe
            width="720"
            height="480"
            src="https://www.youtube.com/embed/{getVideoId(url).id}"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        {/if}
        {#if url.includes("vimeo")}
          <iframe
            width="720"
            height="480"
            src="https://player.vimeo.com/video/{getVideoId(url).id}"
            frameborder="0"
            color="#ffffff"
            allow="autoplay; fullscreen"
            allowfullscreen
          />
        {/if}
      </div>
    {:else}
      <!-- POSTER IMAGE -->
      {#if poster}
        <img src={urlFor(poster).quality(90).width(800).url()} />
      {/if}
      <div class="icon">
        <PlayArrow />
      </div>
    {/if}
  </div>
</div>

<style lang="scss">
  @import "src/lib/style/variables.scss";

  .video-block {
    text-decoration: none;
    width: 100%;
    position: relative;
    display: block;
    margin-bottom: $MARGIN;
    cursor: pointer;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      z-index: 100;
      width: 70px;
      height: 70px;
      // border-radius: 50%;
      background: $grey;
      line-height: 1.2em;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-left: 7px;
    }
  }

  .embed {
    color: $white;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    .inner {
      width: 100%;
      position: relative;
      padding-bottom: 56.25%;
      height: 0;
      overflow: hidden;
      max-width: 100%;

      iframe {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
