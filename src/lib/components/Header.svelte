<script lang="ts">
  import Back from "$lib/graphics/Back.svelte"
  export let title: string
  export let link = "/"
  export let titleLink = ""
</script>

<header>
  {#if titleLink}
    <a href={titleLink} class="section-title">{title}</a>
  {:else}
    <div class="section-title">{title}</div>
  {/if}
  <a class="back" href={link}><Back /></a>
</header>

<style lang="scss">
  @import "src/lib/style/variables.scss";

  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    user-select: none;

    .section-title {
      background: $grey;
      color: $white;
      padding: 4px;
    }
  }
</style>
