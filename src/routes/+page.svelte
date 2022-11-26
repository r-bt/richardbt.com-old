<script>
  import Avatar from '/src/components/Avatar.svelte';
  import { onMount } from 'svelte';

  let pupilLarge;
  let pupilSmall;

  let prefersReduceMotion = false;

  onMount(() => {

    const pupils = [pupilLarge, pupilSmall];

    pupils.forEach((pupil) => {
      let pupilRect = pupil.getBoundingClientRect(),
        pupilRadius = pupilRect.width / 2,
        centerX = pupilRect.left + pupilRadius, 
        centerY = pupilRect.top + pupilRadius;

        document.addEventListener("mousemove", (e) => {
          if (prefersReduceMotion) return;
          const x = e.clientX - centerX,
          y = e.clientY - centerY;

          const vec = [x, y];
          
          const magnitude = Math.sqrt(vec.reduce((a, b) => a + b**2, 0));
          const scaledVec = vec.map((coord) => coord * 20/magnitude);

          pupil.style.transform = `translateX(${scaledVec[0]}px) translateY(${scaledVec[1]}px)`;
        });
    })

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    prefersReduceMotion = mediaQuery.matches;
    mediaQuery.addEventListener('change', () => {
      prefersReduceMotion = mediaQuery.matches;
    });

  })

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
    <div class="bat">
      <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 1042.77 434.07">
        <defs>
            <style>
            .cls-2,.cls-3{fill:var(--black)}.cls-2,.cls-3,.cls-8{stroke:var(--black);stroke-miterlimit:10}.cls-8{stroke-width:1.26px}.cls-3{stroke-width:1.29px}.cls-8{fill:none}
            </style>
        </defs>
        <path d="M874.39 223.5h-29.16v56.78H651.66V223.5h-24.11a58.84 58.84 0 0 0-58.84 58.83v174.25c0 38.13 26 57.45 58.84 69.33 71.16 25.81 164.41 20.82 227.09 0 32.83-11.88 58.83-31.2 58.83-69.33V262.19a39.09 39.09 0 0 0-39.08-38.69Z" style="stroke-width:1.26px;stroke:var(--black);stroke-miterlimit:10;fill:var(--black)" transform="translate(-217.86 -148.78)"/>
        <path d="m415.79 369.08 16.55 63.81 34.81-50.23M642.85 370.65l-22.7 60.68-25.33-50.01" class="cls-2"/>
        <path d="M672.06 157.47 1040.14 1.82s-108.58 112.7-79 198.5c0 0-138.65-65.84-147.72 70.79 6.1 18.25-20-136.76-91.69-65.24-56.28 56.19-49.67 88.35-49.67 88.35ZM373.14 159.79 2.68 9.88s110.31 111 82 197.25c0 0 137.62-68 148.81 68.49-5.82 18.34 17.89-137 90.66-66.66 57.17 55.31 51.06 87.6 51.06 87.6Z" class="cls-3"/>
        <path d="M725.38 414.39c0 35.17-28 63.68-62.62 63.68s-69.48-41.8-69.48-77 34.89-63.86 69.48-63.86 62.62 42 62.62 77.18Z" style="stroke-width:1px;fill:#fff;stroke:var(--black);stroke-miterlimit:10" transform="translate(-217.86 -148.78)"/>
        <path d="M882.86 438.05c0 22.1-19.6 40-43.77 40s-48.58-26.27-48.58-48.38 24.4-40.13 48.58-40.13 43.77 26.4 43.77 48.51Z" style="stroke-width:.66px;fill:#fff;stroke:var(--black);stroke-miterlimit:10" transform="translate(-217.86 -148.78)"/>
        <circle bind:this={pupilLarge} cx="441.47" cy="258.55" r="30.05" style="stroke-width:1.36px;stroke:var(--black);stroke-miterlimit:10;fill:var(--black)"/>
        <circle bind:this={pupilSmall} cx="617.56" cy="282.34" r="22.05" class="cls-2"/>
      </svg>
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
    padding-top: 10%;
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
</style>