<script>
  import { urlFor } from "$lib/modules/sanity.js"
  export let data
</script>

<h1>ARCHIVE</h1>

{#each data.works as work}
  <div>
    <h2>{work.title}</h2>
    <p>{work.shortDescription}</p>
    <a href={"/archive/" + work.slug?.current}>
      <img src={urlFor(work.posterImage?.asset).url()} />
    </a>
  </div>
{/each}

<style lang="scss">
  img {
    width: 400px;
  }
</style>
