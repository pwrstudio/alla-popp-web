<script>
  import Logo from "$lib/graphics/logo.svelte"
</script>

<div class="landing-page">
  <div class="logo">
    <Logo />
  </div>

  <div class="portrait">
    <img src="/alla-popp-portrait.png" allt="Alla Popp" />
  </div>

  <div class="menu left">
    <a class="menu-item" href="/archive">ARCHIVE</a>
    <a class="menu-item" href="/cv">CV</a>
  </div>

  <div class="menu right">
    <a class="menu-item" href="/">LINKTR.EE</a>
    <a class="menu-item" href="/">@ALLAPOPP</a>
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
      src="https://sketchfab.com/models/5fed679b8e6047449325609223ee64b2/embed?autostart=1&camera=0"
    />
  </div>

  <div class="image-credits">IMAGE BY Sarah Ama Duah</div>
</div>

<style lang="scss" global>
  body,
  html {
    font-family: "Alte Haas Grotesk";
  }

  .logo {
    position: fixed;
    width: 90vw;
    left: 50%;
    top: 10px;
    transform: translateX(-50%);
    z-index: 10;
  }

  .image-credits {
    position: fixed;
    right: 0px;
    top: 10px;
    z-index: 10;
    transform: rotateZ(90deg);
    transform-origin: top left;
    text-transform: uppercase;
    color: white;
    font-size: 14px;
    display: none;
  }

  .background-animation {
    position: fixed;
    top: -100px;
    left: -100px;
    width: calc(100vw + 200px);
    height: calc(100vh + 200px);
    z-index: 1;
    background: black;
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
    bottom: 20px;
    z-index: 1000;
    display: flex;
    flex-direction: column;

    &.left {
      left: 20px;
      align-items: flex-start;
    }

    &.right {
      right: 20px;
      align-items: flex-end;
    }

    .menu-item {
      display: inline-block;
      color: white;
      background: #505050;
      font-size: 30px;
      text-decoration: none;
      letter-spacing: -0.05em;
      padding: 0 4px;
    }
  }
</style>
