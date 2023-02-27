<script lang="ts">
  import "../app.css";
  import Nabvar from "../lib/nabvar/Nabvar.svelte";

  let y : number;
  $: scrolled = (y > 50) ? true : false;
  
</script>

<Nabvar scrolled = {scrolled}></Nabvar>
<slot />

<svelte:window bind:scrollY={y} />