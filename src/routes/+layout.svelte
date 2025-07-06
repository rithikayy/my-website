<script>
  import "../app.css"; 
</script>

<header class="bg-[#f9eddb] text-center p-1">
  <img src="/cherry-logo.png" alt="cherry logo" class="h-20 mx-auto" />
  <main class="text-center font-mono bg-[#faf5ee] text-[#4e2f1c] min-h-screen">
    <h1 class="text-xl font-bold my-4">Hi, I'm Rithika!</h1>
    <p class="my-4">Welcome to my site, still under construction! 🏗️</p>
    <slot />
  </main>
</header>


<!-- <style>
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
</style> -->
