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
        I'm Rithika, a third-year computer science and statistics student at University of Toronto.
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


<div id="skills" class="h-100vh flex flex-col bg-[#f7efe4] px-10 py-10 gap-10">
  <h1 class="text-3xl font-bold text-center">Skills</h1>

</div>

<footer class="text-center text-sm py-6 mt-10 text-[#4e2f1c]">
  © 2025 Rithika · rithika1226@gmail.com 🌸
</footer>
