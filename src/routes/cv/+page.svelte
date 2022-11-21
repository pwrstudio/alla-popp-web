<script>
  import Back from "$lib/graphics/back.svelte"
  import { renderBlockText } from "$lib/modules/sanity.js"
  export let data
</script>

<header>
  <div class="section-title">CV</div>
  <a class="back" href="/"><Back /></a>
</header>

<h1>{data.title}</h1>
<h2>{data.bio}</h2>

<div>
  {@html renderBlockText(data.content.content)}
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
    h1,
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
