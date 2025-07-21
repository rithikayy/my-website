<script>
    import BorderBar from "$lib/BorderBar.svelte";

  function aboutMe() {
    const el = document.getElementById('aboutme');
    if (el) {
      const yOffset = 90; 
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  function projects() {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  }

  function skills() {
    document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
  }
</script>

<div class="relative text-center p-1">
  <img 
    src="/imgs/branch.png" 
    alt="cherry blossom branch" 
    class="w-120 -mt-23 h-auto ml-111"
  />
  <img 
    src="/imgs/flower1.png" 
    alt="flower detail" 
    class="absolute cursor-pointer top-[25px] left-[590px] w-[180px] h-auto transition-transform duration-900 ease-in-out hover:scale-115 active:rotate-[360deg]"
    />

    <img 
    src="/imgs/flower2.png" 
    alt="flower detail" 
    class="absolute cursor-pointer top-[128px] left-[610px] w-[150px] h-auto transition-transform duration-900 ease-in-out hover:scale-115 active:rotate-[360deg]"
    />

    <img 
    src="/imgs/flower3.png" 
    alt="flower detail" 
    class="absolute cursor-pointer top-[110px] left-[762px] w-[150px] h-auto transition-transform duration-900 ease-in-out hover:scale-115 active:rotate-[360deg]"
    />
</div>

<button on:click={aboutMe} class="cursor-pointer inline-flex h-10 items-center justify-center rounded-md text-amber-900 bg-gradient-to-r from-amber-100 via-orange-100 to-orange-200 hover:bg-gradient-to-br focus:ring-0 focus:outline-none focus:ring-rose-200 dark:focus:ring-red-200/50 shadow-lg shadow-rose-300/50 dark:shadow-lg dark:shadow-red-200/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transition active:scale-110">About Me</button>
<button on:click={projects} class="cursor-pointer inline-flex h-10 items-center justify-center rounded-md text-amber-900 bg-gradient-to-r from-amber-100 via-orange-100 to-orange-200 hover:bg-gradient-to-br focus:ring-0 focus:outline-none focus:ring-rose-200 dark:focus:ring-red-200/50 shadow-lg shadow-rose-300/50 dark:shadow-lg dark:shadow-red-200/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transition active:scale-110">Projects</button>
<button on:click={skills} class="cursor-pointer inline-flex h-10 items-center justify-center rounded-md text-amber-900 bg-gradient-to-r from-amber-100 via-orange-100 to-orange-200 hover:bg-gradient-to-br focus:ring-0 focus:outline-none focus:ring-rose-200 dark:focus:ring-red-200/50 shadow-lg shadow-rose-300/50 dark:shadow-lg dark:shadow-red-200/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transition active:scale-110">Skills</button>

<div id="aboutme">
  <BorderBar/>
  <div class="h-[600px] flex flex-row items-center justify-center bg-[#f7efe4] px-10 gap-10">
    <div class="relative flex-shrink-0">
      <!-- svelte-ignore a11y_img_redundant_alt -->
      <img src="/imgs/mypic1.JPG" alt="a photo of me!" class="rounded-lg max-w-lg h-80 object-cover dark:focus:ring-rose-400/50 shadow-lg shadow-rose-400/50 dark:shadow-lg dark:shadow-rose-400/8" />
  
      <img 
      src="/imgs/flower2.png" 
      alt="flower detail" 
      class="absolute cursor-pointer top-[-80px] left-[-90px] w-[180px] h-auto transition-transform duration-900 ease-in-out hover:scale-115"
      />
    </div>
  
    <div class="text-left max-w-md">
      <h1 class="text-3xl font-bold">Nice to meet you! </h1>
      <p class="mt-4 text-justify max-w-prose ml-auto" style="font-size: 0.925rem;">
        I'm Rithika, a third-year computer science and statistics student at the University of Toronto.
        I love working on creative tech projects, helping others learn to code, and building things that are interesting! I'm super excited about data science and machine learning, and I'm working toward a career where I can apply these skills.
        <br /><br />
        Outside of tech, I enjoy watching shows and biking! 🌸
      </p>
      <button on:click={skills}  class="mt-6 cursor-pointer inline-flex h-10 rounded-md text-amber-900 bg-gradient-to-r from-amber-100 via-orange-100 to-orange-200 hover:bg-gradient-to-br hover:bg-neutral-800 hover:ring-2 hover:ring-orange-200 hover:ring-offset-2 focus:ring-0 focus:outline-none focus:ring-rose-200 dark:focus:ring-red-200/50 shadow-lg shadow-rose-300/50 dark:shadow-lg dark:shadow-red-200/80 font-medium text-sm px-5 py-2.5 text-center me-2 mb-2 transition active:scale-110"
      >View my skills!</button>
    </div>
  </div>
  <BorderBar/>
</div>

<div id="projects" class="h-100vh flex flex-col bg-[#f7efe4] px-10 py-10 gap-10">
  <h1 class="text-3xl font-bold text-center">Featured Projects</h1>

  <div class="flex flex-row justify-center gap-10 pt-3">
    <div class="text-left max-w-md">
      <h2 class="text-3xl font-bold">Mooody 🐮</h2>
      <p class="mt-4 text-justify max-w-prose ml-auto" style="font-size: 0.925rem;">
        Say hi to Dr. Moo! Mooody is a mental health journalling app that analyzes your mood based on your journal entries. 
        <br /><br />
        I worked on the Mood Dashboard using pandas and matplotlib for users to view their journal entries and their mood analysis.
        Users can also draw how their day went, and I worked on analyzing these drawings using Gemini API. 
        <br /><br />
        <a 
          href="https://github.com/rithikayy/Mooody" 
          target="_blank" 
          rel="noopener noreferrer"
          class="cursor-pointer inline-flex h-10 items-center justify-center rounded-md text-amber-900 bg-gradient-to-r from-amber-100 via-orange-100 to-orange-200 hover:bg-gradient-to-br hover:bg-neutral-800 hover:ring-2 hover:ring-orange-200 hover:ring-offset-2 focus:ring-0 focus:outline-none focus:ring-rose-200 dark:focus:ring-red-200/50 shadow-lg shadow-rose-300/50 dark:shadow-lg dark:shadow-red-200/80 font-medium text-sm px-5 py-2.5 text-center me-2 mb-2 transition active:scale-110"
        >
          <span class="relative">GitHub Link</span>
        </a>
      </p>
    </div>

    <div class="flex-shrink-0">
      <!-- svelte-ignore a11y_img_redundant_alt -->
      <img src="/imgs/moody1pic.png" alt="moodypic" class="rounded-lg max-w-lg h-auto object-cover transition-transform duration-700 hover:scale-105 focus:outline-none focus:ring-rose-200 dark:focus:ring-red-200/50 shadow-lg shadow-rose-300/50" />
    </div>
  </div>

  <div class="flex flex-row justify-center gap-10 pt-3">
    <div class="flex-shrink-0">
      <!-- svelte-ignore a11y_img_redundant_alt -->
      <img src="/imgs/mysh1.png" alt="moodypic" class="rounded-lg max-w-lg h-auto object-cover transition-transform duration-700 hover:scale-105 focus:outline-none focus:ring-rose-200 dark:focus:ring-red-200/50 shadow-lg shadow-rose-300/50" />
    </div>
    <div class="text-right max-w-md">
      <h2 class="text-3xl font-bold text-left">Mysh: Shell Project 💻</h2>
      <p class="mt-4 text-justify max-w-prose ml-auto" style="font-size: 0.925rem;">
        A functional shell with network support, pipes, and signals. Built-in commands implemented include ls, cd, kill, cat, and more.
        <br /><br />
        The project was built using C. 
      </p>
    </div>
  </div>
</div>

<BorderBar/>


<div id="skills" class="flex flex-col bg-[#f7efe4] px-10 py-10 gap-10">
  <h1 class="text-3xl font-bold text-center">Skills</h1>
  <div class="mt-4 text-justify border-2 border-none rounded-xl p-6 transition-transform duration-700 hover:scale-102 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-300/50 shadow-lg shadow-rose-300/50" style="font-size: 0.925rem;">
    <h2 class="font-semibold text-lg">Languages</h2>
    <p>
      Python, Java, RISC-V Assembly, C, R
    </p>
  </div>

  <div class="mt-4 text-justify border-2 border-none rounded-xl p-6 transition-transform duration-700 hover:scale-102 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-300/50 shadow-lg shadow-rose-300/50" style="font-size: 0.925rem;">
    <h2 class="font-semibold text-lg">Frameworks and Libraries</h2>
    <p>
      JavaFX, Numpy, Pandas, Tailwind CSS
    </p>
  </div>

  <div class="mt-4 text-justify border-2 border-none rounded-xl p-6 transition-transform duration-700 hover:scale-102 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-300/50 shadow-lg shadow-rose-300/50" style="font-size: 0.925rem;">
    <h2 class="font-semibold text-lg">Developer Tools</h2>
    <p>
      Git, IntelliJ, PyCharm, VS Code, Power BI
    </p>
  </div>
</div>
<BorderBar/>

<div class="flex justify-center items-center gap-6">
  <button
    type="button"
    data-twe-ripple-init
    data-twe-ripple-color="light"
    class="mb-2 inline-block rounded-full bg-[#debca4] p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition-transform duration-700 hover:scale-102 hover:bg-rose-300">
    <a href="https://www.linkedin.com/in/rithika-yerra-0831491b8/" target="_blank" rel="noopener noreferrer">
      <span class="[&>svg]:h-4 [&>svg]:w-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 512 512">
          <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
          <path
          d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
        </svg>
      </span>
    </a>
  </button>


  <button
    type="button"
    data-twe-ripple-init
    data-twe-ripple-color="light"
    class="mb-2 inline-block rounded-full bg-[#debca4] p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition-transform duration-700 hover:scale-102 hover:bg-rose-300">
    <a href="https://github.com/rithikayy" target="_blank" rel="noopener noreferrer">
      <span class="[&>svg]:h-4 [&>svg]:w-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 448 512">
          <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
          <path
          d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
        </svg>
      </span>
    </a>
  </button>


  <button
    type="button"
    data-twe-ripple-init
    data-twe-ripple-color="light"
    class="mb-2 inline-block rounded-full bg-[#debca4] p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition-transform duration-700 hover:scale-102 hover:bg-rose-300">
    <a href="mailto:rithika1226@gmail.com">
      <span class="[&>svg]:h-4 [&>svg]:w-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 448 512">
          <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
          <path
          d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
        </svg>
      </span>
    </a>
  </button>
</div>  
  

<footer class="text-center text-sm py-6 mt-10 text-[#4e2f1c]">
  © 2025 Rithika Yerra 🌸
</footer>
