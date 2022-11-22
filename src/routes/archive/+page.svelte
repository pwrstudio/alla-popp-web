<script lang="ts">
  import { fade } from "svelte/transition"
  import Header from "$lib/components/Header.svelte"
  import { urlFor } from "$lib/modules/sanity.js"
  export let data
</script>

<Header title="ARCHIVE" link="/" />

<div class="archive-container">
  {#each data.works as work}
    <a class="archive-item" href={"/archive/" + work.slug?.current} in:fade>
      <div class="text">
        <span class="title">{work.title},</span>
        <span class="short-description">{work.shortDescription}</span>
      </div>
      <div class="image">
        <img
          src={urlFor(work.posterImage?.asset).quality(90).width(800).url()}
          alt={work.title}
        />
      </div>
    </a>
  {/each}
</div>

<style lang="scss">
  @import "src/lib/style/variables.scss";

  .archive-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: $MARGIN * 2;

    .archive-item {
      width: 50%;
      padding-right: $MARGIN;
      margin-bottom: 40px;
      user-select: none;

      @include screen-size("small") {
        width: 100%;
      }

      .text {
        color: $white;
        margin-bottom: $MARGIN;
        line-height: $FONT_SIZE_SMALL;

        .title {
          text-transform: uppercase;
          background: $grey;
          font-size: $FONT_SIZE_LARGE;
          line-height: $FONT_SIZE_LARGE;
          display: inline;
        }

        .short-description {
          font-size: $FONT_SIZE_SMALL;
          line-height: $FONT_SIZE_SMALL;
          background: $grey;
          display: inline;
        }
      }

      .image {
        width: 100%;
        aspect-ratio: 16 / 9;
        line-height: 0;
        background: $grey;

        img {
          object-fit: fill;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
</style>
