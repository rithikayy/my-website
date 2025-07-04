<header>
  <img src="/cherry-logo.png" alt="cherry logo" class="logo" />
</header>

<main>
  <h1>Hi, I'm Rithika!</h1>
  <p>Welcome to my site, still under construction!</p>
  <slot />
</main>

<style>
  :global(body) {
    font-family: monospace;
    margin: 0;
    padding: 0;
    background-color: rgb(250, 245, 238);
    color: rgb(78, 47, 28);
  }

  header {
    background: rgb(249, 237, 219);
    color: white;
    text-align: left;
    padding: 0.25rem;
  }

  .logo {
    height: 80px;
    margin: 0 auto;
    display: block;
  }

  main {
    text-align: center;
  }

  h1, p {
    margin: 1rem;
  }
</style>
