<script>
	export let project
</script>

{#if project}
  <div class="project-card">
    <div>
      <h3>
        <a href={project.url}>{project.title}</a>
      </h3>
    </div>
    <div>
    	<img
        alt="{project.alt}"
        src="{project.coverImage}"
      />
            
      <p>
        {project.description}
      </p>
    </div>
    <div>
      {#each project.stack as stack}
        <span>{stack}</span>
      {/each}
    </div>
  </div>
{/if}

<style>
  .project-card {
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;
  }
  h3, a {
    margin: 1rem;
    padding: 0;
  }
  img {
    height: 1rem;
    width: 1rem;
  }
</style>