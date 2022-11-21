<script lang="ts">
  import Back from "$lib/graphics/back.svelte"
  import { urlFor } from "$lib/modules/sanity.js"
  export let data
</script>

<header>
  <div class="section-title">ARCHIVE</div>
  <a class="back" href="/"><Back /></a>
</header>

<div class="work-container">
  {#each data.works as work}
    <a class="work" href={"/archive/" + work.slug?.current}>
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
  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    user-select: none;

    .section-title {
      background: #8c8c8b;
      color: white;
      padding: 4px;
    }

    .back {
      svg {
        height: 80px;
        background: red;
      }
    }
  }

  img {
    width: 400px;
  }

  .work-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;

    .work {
      width: 50%;
      padding-right: 20px;
      margin-bottom: 40px;

      .text {
        color: white;
        line-height: 0.55em;
        margin-bottom: 20px;

        .title {
          text-transform: uppercase;
          background: #8c8c8b;
          padding: 2px;
          margin-right: -8px;
        }

        .short-description {
          font-size: 16px;
          background: #8c8c8b;
          padding: 2px;
        }
      }

      .image {
        width: 100%;
        aspect-ratio: 16 / 9;
        line-height: 0;

        img {
          object-fit: fill;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
</style>
