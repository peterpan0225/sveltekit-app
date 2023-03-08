<script lang="ts">
	export let img_name: string;
	export let name: string;
	export let place: string;
	export let mark: string;
</script>

<div class="w-full h-full p-4">
	<div class="w-full rounded-3xl p-5 bg-white">
		<div class="w-full aspect-[1.2] ">
			<a href="#pa">
				<img class="w-full h-full rounded-3xl ease-in duration-200 hover:scale-105" src={img_name} alt="" />
			</a>
		</div>
		<div class="px-3 mt-20">
			<h1 class="text-2xl font-semibold mt-5">{name}</h1>
			<div class="flex flex-row flex-wrap justify-between mt-5">
				<span class="text-[20px] font-medium text-gray-500"
					><strong class="text-gray-800">{place}</strong>
        </span>
			</div>
		</div>
	</div>
</div>