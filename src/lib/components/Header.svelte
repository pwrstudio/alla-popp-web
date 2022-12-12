<script lang="ts">
  import BackButton from "$lib/graphics/BackButton.svelte"
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
</header>

<a class="back" href={link}><BackButton /></a>

<style lang="scss">
  @import "src/lib/style/variables.scss";

  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    user-select: none;
    font-size: $FONT_SIZE_LARGE;
    line-height: 1em;
    z-index: 1000;
    position: relative;

    .section-title {
      background: $grey;
      color: $white;
      padding: 4px;
    }
  }

  .back {
    position: absolute;
    top: $MARGIN;
    right: $MARGIN;
    cursor: pointer;
    z-index: 1000;

    &:hover {
      opacity: 0.8;
    }
  }
</style>
