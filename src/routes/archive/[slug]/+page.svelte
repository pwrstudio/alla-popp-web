<script>
  import Back from "$lib/graphics/back.svelte"
  import { renderBlockText, urlFor } from "$lib/modules/sanity.js"
  export let data
</script>

<header>
  <div class="section-title">ARCHIVE</div>
  <a class="back" href="/archive"><Back /></a>
</header>

<div class="work">
  <h2>{data.title}</h2>
  <p>{data.shortDescription}</p>
  <!-- IMAGE -->
  <div class="image">
    <img src={urlFor(data.posterImage?.asset).url()} />
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

    h2,
    p {
      color: white;
      background: #8c8c8b;
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
