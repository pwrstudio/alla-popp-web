<script>
  import { renderBlockText, urlFor } from "$lib/modules/sanity.js"
  export let data
</script>

<h1>CV</h1>

<h1>{data.title}</h1>
<h2>{data.bio}</h2>

<div>
  {@html renderBlockText(data.content.content)}
</div>
