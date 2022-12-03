<script>
  import MediaQuery from '/src/components/MediaQuery.svelte';
  import Avatar from '/src/components/Avatar.svelte';
  import Bat from '/src/components/Bat.svelte';

  export let data;
  console.log({data});
</script>

<header>
  <Avatar />
</header>

<div class="content">
  <div class="side-by-side">
    <div class="personal-cta">
      <h2>Hey 😋, I'm</h2>
      <h1>Richard</h1>
      <h3>I'm a computer science and electrical engineering student at MIT</h3>
      <h3>I'm addicted to chocolate, think bats are pretty cool, and can't say the "th" sound</h3>
      <h3>I'm currently trying to learn to make almost anything, the results you can see below</h3>
    </div>
    <MediaQuery query="(min-width: 600px)" let:matches>
      {#if matches}
        <div class="bat">
          <Bat />
        </div>
      {/if}
    </MediaQuery>
  </div>
  <div class="projects">
    <h2>Projects</h2>
    <div class="projects-container">
      {#each data.projects as project}
        <div class="project">
          <h3>{project.metadata.title}</h3>
          {#if project.imgUrl}
            <a href={project.path}>
              <img src={project.imgUrl} />
            </a>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  :root {
    --color-one: rgb(250, 62, 0);
    --color-two: rgb(255, 207, 112);
    --color-three: rgb(255, 193, 68);
    --black: rgb(20, 20, 20);

    background: var(--black);
  }

  div.content {
    width: 100%;
    height: 100%;
  }

  div.side-by-side {
    display: flex;
    padding: 0 5rem;
    padding-top: 6%;
  }

  div.side-by-side > .personal-cta {
    flex: 4;
  }

  div.side-by-side > .bat {
    flex: 5;
  }

  div.personal-cta {
    margin: 0 auto;
  }

  div.personal-cta > h2 {
    font-size: 2rem;
    margin: 1rem 0;
    color: var(--color-three);
  }

  div.personal-cta > h1 {
    --bg-size: 400%;
    --color-one: hsl(15 90% 55%);
    --color-two: hsl(40 95% 55%);
    background: linear-gradient(
      90deg,
      var(--color-one),
      var(--color-two),
      var(--color-one)
    ) 0 0 / var(--bg-size) 100%;
    margin: 0.5rem 0;
    font-size: 4.25em;
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
   
  }

  @media (prefers-reduced-motion: no-preference) {
    div.personal-cta > h1 {
      animation: move-bg 7s infinite linear;
    }

    @keyframes move-bg {
      to {
        background-position: var(--bg-size) 0;
      }
    }
  }

  div.personal-cta > h3 {
    font-size: 1.4rem;
    margin: 1.5rem 0 1rem 0;
    font-weight: 500;
    color: white;
  }

  div.personal-cta > h3:not(:first-of-type) {
    margin: 1rem 0;
  }

  .projects {
    padding: 2rem 5rem;
    color: white;
  }
  .projects > h2 {
    text-align: center;
    font-size: 1.8rem;
  }

  .projects-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  }

  .project {
    flex-basis: 30%;
    text-align: center;
    padding: 1rem;
    box-sizing: border-box;
  }

  .project img {
    width: 100%;
  }

  @media (max-width: 800px) {
    .project {
      flex-basis: 48%;
    }
  }
</style>