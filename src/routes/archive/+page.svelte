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
        <span class="title">
          {work.title}{#if work.shortDescription},{/if}
        </span>
        <!-- <span class="short-description">{work.shortDescription}</span> -->
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
    margin-top: $MARGIN;

    .archive-item {
      width: calc(50% - 8px);
      margin-bottom: $MARGIN;
      user-select: none;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      &:nth-child(odd) {
        margin-right: $MARGIN;
      }

      @include screen-size("small") {
        width: 100%;
      }

      .text {
        color: $white;
        margin-bottom: 5px;
        line-height: $FONT_SIZE_SMALL;

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

      .image {
        width: 100%;
        min-height: 200px;
        aspect-ratio: 16 / 9;
        line-height: 0;
        background: $grey;

        img {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
      }

      &:hover {
        .image {
          opacity: 0.8;
        }
      }
    }
  }
</style>
