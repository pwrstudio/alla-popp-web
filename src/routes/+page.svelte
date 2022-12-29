<script lang="ts">
  import AllaPopp from "$lib/graphics/AllaPopp.svelte"
  export let data
</script>

<div class="landing-page">
  <div class="logo">
    <AllaPopp />
  </div>

  <div class="portrait">
    <img src="/alla-popp-portrait.png" alt="Alla Popp" />
  </div>

  <div class="menu left">
    <a class="menu-item" href="/archive">ARCHIVE</a>
    <a class="menu-item" href="/cv">CV</a>
  </div>

  <div class="menu right">
    <a class="menu-item" href="https://linktr.ee/allapopp/" target="_blank">
      LINKTR.EE
    </a>
    <a
      class="menu-item"
      href="https://www.instagram.com/allapopp/"
      target="_blank"
    >
      @ALLAPOPP
    </a>
  </div>

  <div class="phone-menu">
    <a class="menu-item" href="/archive">ARCHIVE</a>
    <a class="menu-item" href="/cv">CV</a>
    <a class="menu-item" href="https://linktr.ee/allapopp/" target="_blank">
      LINKTR.EE
    </a>
    <a
      class="menu-item"
      href="https://www.instagram.com/allapopp/"
      target="_blank"
    >
      @ALLAPOPP
    </a>
  </div>

  <div class="background-animation">
    <iframe
      title="(c)bigbirdtommy"
      frameborder="0"
      allowfullscreen
      mozallowfullscreen="true"
      webkitallowfullscreen="true"
      allow="autoplay; fullscreen; xr-spatial-tracking"
      xr-spatial-tracking
      execution-while-out-of-viewport
      execution-while-not-rendered
      web-share
      src={data?.url || ""}
    />
  </div>

  <div class="image-credits">IMAGE BY Sarah Ama Duah</div>
</div>

<style lang="scss" global>
  @import "src/lib/style/variables.scss";

  .logo {
    position: fixed;
    width: 85vw;
    left: 50%;
    top: $MARGIN;
    transform: translateX(-50%);
    z-index: 10;

    @include screen-size("small") {
      width: 90vw;
    }
  }

  .image-credits {
    z-index: 10;
    position: fixed;
    right: $MARGIN;
    top: $MARGIN;
    transform: translateX(100%) rotateZ(90deg);
    transform-origin: top left;
    text-transform: uppercase;
    color: $white;
    font-size: $FONT_SIZE_TINY;

    @include screen-size("small") {
      top: 40%;
      right: 5px;
      transform: translateX(100%) rotateZ(90deg);
      font-size: $FONT_SIZE_XTINY;
    }
  }

  .background-animation {
    position: fixed;
    top: -100px;
    left: -100px;
    width: calc(100vw + 200px);
    height: calc(100vh + 200px);
    z-index: 1;
    background: $black;
    iframe {
      width: calc(100vw + 200px);
      height: calc(100vh + 200px);
      filter: grayscale(1);
      opacity: 0.7;
    }
  }

  .portrait {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    z-index: 100;
    user-select: none;
    pointer-events: none;

    img {
      max-height: 85vh;
    }
  }

  .menu {
    position: fixed;
    bottom: $MARGIN;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    user-select: none;
    font-size: $FONT_SIZE_LARGE;
    line-height: 1em;

    @include screen-size("small") {
      display: none;
    }

    &.left {
      left: $MARGIN;
      align-items: flex-start;
    }

    &.right {
      right: $MARGIN;
      align-items: flex-end;
    }

    .menu-item {
      display: inline-block;
      color: $white;
      background: $grey;
      text-decoration: none;
      letter-spacing: -0.05em;
      padding: 0 4px;

      &:hover {
        color: $off-white;
      }
    }
  }

  .phone-menu {
    position: fixed;
    bottom: $MARGIN;
    z-index: 1000;
    flex-direction: column;
    user-select: none;
    font-size: $FONT_SIZE_LARGE;
    line-height: 1em;
    display: none;
    width: 100%;
    align-items: center;
    left: 0;

    @include screen-size("small") {
      display: flex;
    }
    .menu-item {
      display: inline-block;
      color: $white;
      background: $grey;
      text-decoration: none;
      letter-spacing: -0.05em;
      padding: 0 4px;

      &:hover {
        color: $off-white;
      }
    }
  }
</style>
