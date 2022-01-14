<script context='module'>
	export async function load({ fetch }) {
		const [lifestyle, entertainment, politics, business, technology, sports] = await Promise
				.all(
					[
						fetch(`/api/lifestyle/posts.json`).then(res => res.json()),
						fetch(`/api/entertainment/posts.json`).then(res => res.json()),
						fetch(`/api/politics/posts.json`).then(res => res.json()),
						fetch(`/api/business/posts.json`).then(res => res.json()),
						fetch(`/api/technology/posts.json`).then(res => res.json()),
						fetch(`/api/sports/posts.json`).then(res => res.json()),
					]
				);

		return {
			props: {
				lifestyle,
				entertainment, 
				politics, 
				business,
				technology, 
				sports,
			}
		}
	}
</script>

<script>
	import Featured from '$lib/components/Featured.svelte'

	export let lifestyle
	export let entertainment
	export let politics
	export let business
	export let technology
	export let sports
	
	const segments = [
		{
			title: "Lifestyle",
			posts: lifestyle,
			href: "/lifestyle",
			color: "green",
		},
		{
			title: "Entertainment",
			posts: entertainment,
			href: "/entertainment",
			color: "orange",
		},
		{
			title: "Politics",
			posts: politics,
			href: "/politics",
			color: "red",
		},
		{
			title: "Business",
			posts: business,
			href: "/business",
			color: "brown",
		},
		{
			title: "Technology",
			posts: technology,
			href: "/technology",
			color: "black",
		},
		{
			title: "Sports",
			posts: sports,
			href: "/sports",
			color: "skyblue"
		},
	]

</script>

<ul>
	{#each segments as {title, posts, color, href}}
		<Featured 
			{ title }
			{ posts }
			{ color }
			{ href }
		/>
	{/each}
</ul>

<style>
	ul {
		padding: 0;
	}
</style>