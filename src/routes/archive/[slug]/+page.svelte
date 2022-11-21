<script lang="ts">
  import Back from "$lib/graphics/back.svelte"
  import { renderBlockText, urlFor } from "$lib/modules/sanity.js"

  interface Work {
    title: string
    shortDescription: string
  }

  export let data: Work
</script>

<header>
  <div class="section-title">ARCHIVE</div>
  <a class="back" href="/archive"><Back /></a>
</header>

<div class="work">
  <h1>{data.title}</h1>
  <span class="short-description">{data.shortDescription}</span>
  <!-- IMAGE -->
  <div class="image">
    <img
      src={urlFor(data.posterImage?.asset).quality(90).width(800).url()}
      alt={data.title}
    />
  </div>
  {#if data.content?.content}
    <div>
      {@html renderBlockText(data.content.content)}
    </div>
  {/if}
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
  }

  img {
    width: 400px;
  }

  .work {
    width: 50%;
    margin-top: 20px;

    h1 {
      font-size: 30px;
      color: white;
      background: #8c8c8b;
      display: inline-block;
    }

    h2,
    p {
      color: white;
      background: #8c8c8b;
    }

    .short-description {
      color: white;
      background: #8c8c8b;
      font-size: 16px;
    }

    h2 {
      margin: 0;
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
</style>
