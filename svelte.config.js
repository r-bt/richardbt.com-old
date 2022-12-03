// import adapter from '@sveltejs/adapter-static';
import adapter from '@sveltejs/adapter-netlify';
import {mdsvex} from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svx', '.md'],
	preprocess: [
		mdsvex({
			extensions: ['.md', '.svx'],
			layout: {
				week: './src/routes/week_layout.svelte',
				_: 'src/routes/week_layout.svelte',
			}
		})
	],
	kit: {
		// adapter: adapter({ 
		// 	pages: 'build',
		// 	assets: 'build',
		// 	fallback: null,
		// 	precompress: false
		// }),
		adapter: adapter({
			// if true, will create a Netlify Edge Function rather
			// than using standard Node-based functions
			edge: false,
	  
			// if true, will split your app into multiple functions
			// instead of creating a single one for the entire app.
			// if `edge` is true, this option cannot be used
			split: false
		}),
		paths: { base: "" },
		trailingSlash: 'always',
	}
};

export default config;
