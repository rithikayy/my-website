import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

export default {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null
    }),
    paths: {
      base: '' // ✅ for rithikayy.github.io (user site)
    },
  },
  preprocess: preprocess()
};

