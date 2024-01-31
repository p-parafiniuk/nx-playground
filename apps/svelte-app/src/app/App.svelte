<script lang="ts">
  //   import { Counter } from '@svelte/shared';
  export let name: string;

  let count: number = 0;
  const increment = () => {
    count += 1;
  };
</script>

<main>
  <h1>Welcome {name}!</h1>

  <button on:click={increment}>
    count is {count}
  </button>

  <!-- <Counter /> -->
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
