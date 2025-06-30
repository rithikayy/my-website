<!-- src/routes/+layout.svelte -->
<script>
  // any JS logic
</script>

<header style="background: pink; color: white; text-align: center;">
  <h1>🌺 Testing!! 🌺</h1>
</header>
<h1>Hi, I'm Rithika! </h1>
<p>Welcome to my site, still under construction!</p>

<slot />

<style>
  :global(body) {
    /* font-family: 'Syne Mono', monospace; */
    margin: 0;
    padding: 0;
    background-color: rgb(250, 245, 238);
    color: rgb(78, 47, 28);
  }

  :global(header) {
    /* font-family: 'Martian Mono', monospace; */
    background: pink;
    color: white;
    text-align: center;
  }

  :global(h1), :global(p) {
    margin: 1rem;
  }
</style>



  
  