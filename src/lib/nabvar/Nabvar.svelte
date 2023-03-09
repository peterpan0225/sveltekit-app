<script lang="ts">
	export let scrolled = false;

	let nabvarOpen = false;
	function setNabvarOpen() {
		nabvarOpen = !nabvarOpen;
	}
</script>

<nav
	class="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg {scrolled
		? 'bg-white shadow'
		: ''} "
>
	<div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
		<div class="w-full lg:w-auto relative flex justify-between items-center">
			<a
				class="text-gray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
				href="/"
			>
				SvelteKit
			</a>
			<button
				class="w-10 text-gray-600 cursor-pointer text-xl px-2 py-2 border border-solid rounded block lg:hidden"
				type="button"
				on:click={setNabvarOpen}
			>
				<svg version="1.1" viewBox="0 0 122.88 95.95" class="text-gray-400">
					<path
						d="M8.94,0h105c4.92,0,8.94,4.02,8.94,8.94l0,0c0,4.92-4.02,8.94-8.94,8.94h-105C4.02,17.88,0,13.86,0,8.94l0,0 C0,4.02,4.02,0,8.94,0L8.94,0z M8.94,78.07h105c4.92,0,8.94,4.02,8.94,8.94l0,0c0,4.92-4.02,8.94-8.94,8.94h-105 C4.02,95.95,0,91.93,0,87.01l0,0C0,82.09,4.02,78.07,8.94,78.07L8.94,78.07z M8.94,39.03h105c4.92,0,8.94,4.02,8.94,8.94l0,0 c0,4.92-4.02,8.94-8.94,8.94h-105C4.02,56.91,0,52.89,0,47.97l0,0C0,43.06,4.02,39.03,8.94,39.03L8.94,39.03z"
					/>
				</svg>
			</button>
		</div>
		<div class="lg:flex items-center {nabvarOpen ? 'block' : 'hidden'}">
			<ul class="flex flex-col lg:flex-row list-none ml-auto">
				<li class="flex items-center">
					<a class="text-xm px-3 py-2 text-gray-700 hover:text-gray-500" href="/review">Review</a>
				</li>
				<li class="flex items-center">
					<a class="text-xm px-3  py-2 text-gray-700 hover:text-gray-500" href="/offer">Offer</a>
				</li>
				<li class="flex items-center">
					<a class="text-xm px-3 py-2 text-gray-700 hover:text-gray-500" href="/about">About</a>
				</li>
			</ul>
		</div>
	</div>
</nav>
