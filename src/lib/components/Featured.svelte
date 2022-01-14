<script>
	export let title
	export let posts
	export let color
	export let href
</script>

<section>
	<div class={`title flex ${color}`}>
		<h2 id='title' class={color}>{ title }</h2>
	</div>
	<div class='posts flex'>
		<div class='main'>
			<img src={posts.posts[0].coverImage} alt="" />
			<a href={`${posts.posts[0].slug}`}>
				<h3>{ posts.posts[0].title }</h3>
			</a>
			<b>By <a>{ posts.posts[0].author }</a></b>
		</div>
		<div class='rest'>
			<ul>
				{#each posts.posts as { title, author, slug}}
					<a href={`${slug}`}>
						<h6>{ title }</h6>
					</a>
					<b>By <a>{ author }</a></b>
				{/each}
			</ul>
		</div>
		<div class='link'>
				<a href={href}>Show More</a>
		</div>
	</div>
</section>

<style>
	* {
		margin: 0;
		padding: 0;
	}
	section {
		margin-bottom: 2rem;
		display: flex;
		flex-direction: column;
	}
	a {
		text-decoration: none;
	}
	b {
		opacity: 0.5;
		font-weight: 500;
	}
	p {
		opacity: 0.5;
	}
	h2, h3, h6, img {
		margin-top: 0.8rem;
	}
	.title {
		justify-content: space-between;
	}
	.posts {		
		flex-direction: column;
	}
	.flex {
		display: flex;
	}
	.link {
		text-align: right;
		color: red;
	}
	.green {
		color: green !important;
		border-top: 5px solid green;
	}
	.orange {
		color: orange !important;
		border-top: 5px solid orange;
	}
	.red {
		color: red !important;
		border-top: 5px solid red;
	}
	.brown {
		color: brown !important;
		border-top: 5px solid brown;
	}
	.black {
		color: black !important;
		border-top: 5px solid black;
	}
	.skyblue {
		color: skyblue !important;
		border-top: 5px solid skyblue;
	}
	#title {
		border: none;
	}
</style>