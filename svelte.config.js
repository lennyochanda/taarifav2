import adapter from '@sveltejs/adapter-static'
import { mdsvex } from 'mdsvex';
import preprocess from 'svelte-preprocess';
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Ensures both .svelte and .md files are treated as components (can be imported and used anywhere, or  used as pages)
	extensions: ['.svelte', '.md'],

	preprocess: [
		preprocess({
			scss: {
				// Ensures Sass variables are always available inside component <style> blocks
				prependData: `@import 'src/lib/assets/scss/_vars.scss';`
			},
		}),
		mdsvex({
			// The default mdsvex extension is .svx; this overrides that.
			extensions: ['.md'],

			// Adds IDs to headings, and anchor links to those IDs. Note: must stay in this order to work.
			rehypePlugins: [
				rehypeSlug,
				rehypeAutolinkHeadings,
			],

			/**
			 * Automatically matches any markdown file inside the 'entertainment' folder, and
			 * uses the named file to lay out those markdown files.
			 * 
			 * You can add more layouts. If the key matches a folder, it will apply
			 * to any markdown file in that folder. Otherwise, layouts can be used
			 * in any markdown file's frontmatter, with `layout: name_here`.
			 * 
			 * You can also specify a fallback layout by naming it `_`. More here:
			 * https://mdsvex.pngwn.io/docs#named-layouts
			 */ 
			layout: {
				entertainment: 'src/routes/entertainment/posts/_post.svelte',
				business: 'src/routes/business/posts/_post.svelte',
				lifestyle: 'src/routes/lifestyle/posts/_post.svelte',
				politics: 'src/routes/politics/posts/_post.svelte',
				sports: 'src/routes/sports/posts/_post.svelte',
				technology: 'src/routes/technology/posts/_post.svelte',
			}
		}),
	],

	kit: {
		// Default SvelteKit options
		target: '#svelte',
		adapter: adapter(),
	}
};

export default config;
