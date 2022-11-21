<script>
  import { renderBlockText, urlFor } from "$lib/modules/sanity.js"
  export let data
</script>

<h1>ARCHIVE</h1>

<div>
  <h2>{data.title}</h2>
  <p>{data.shortDescription}</p>
  <img src={urlFor(data.posterImage?.asset).url()} />
  {#if data.content?.content}
    <div>
      {@html renderBlockText(data.content.content)}
    </div>
  {/if}
</div>

<style lang="scss">
  img {
    width: 400px;
  }
</style>
