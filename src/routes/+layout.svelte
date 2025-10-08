<script>
  import "../app.css"; 
  import 'flowbite';
</script>

<header class="bg-[#faf8f5] text-left p-1">
  <img src="/imgs/cherry-logo.png" alt="cherry logo" class="h-20" />
</header>


<main class="text-center font-mono bg-[#faf8f5] text-[#4e2f1c] min-h-screen pt-3">
  <div class="flex justify-center items-center">
    <h1 class="text-2xl font-bold my-4">Hi, I'm&nbsp;</h1>
    <h1 class="text-2xl font-bold my-4 animate-bounce bg-[#fadce8]">Rithika!</h1>
  </div>  
  <p class="my-4" style="font-size: 0.9rem;">Psst! Click on the flowers!! 🌷</p>
  <slot />
</main>