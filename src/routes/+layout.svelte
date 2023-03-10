<script lang="ts">
	import '../app.css';
	import Nabvar from '../lib/nabvar/Nabvar.svelte';

	let y: number;
	$: scrolled = y >= 0 ? true : false;
</script>

<Nabvar {scrolled} />
<slot />

<svelte:window bind:scrollY={y} />
