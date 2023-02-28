<script lang="ts">
	export let img_name: string;
	export let travel_reason: string;
	export let travel_period: string;
	export let travel_place: string;
	export let travel_price: string;
</script>

<div class="w-full h-full p-4">
	<div class="w-full rounded-3xl px-10 py-10 bg-white">
		<div class="w-full aspect-[1.2] ">
			<a href="#pa">
				<img class="w-full h-full rounded-3xl" src={img_name} alt="" />
			</a>
		</div>
		<div class="px-3 mt-5">
			<div>
				<span
					class="px-5 py-1 bg-[#FCDDEC] text-[#F178B6] rounded-full text-[16px] font-medium mr-5"
					>{travel_reason}</span
				>
				<span class="text-[#000000]/50 text-[16px] font-medium">{travel_period}</span>
			</div>
			<h1 class="text-2xl font-semibold mt-5">{travel_place}</h1>
			<div class="flex flex-row flex-wrap justify-between mt-5">
				<span class="text-[20px] font-medium text-gray-500"
					><strong class="text-gray-800">{travel_price}$</strong>/person</span
				>
				<button class="px-4 py-2 bg-[#F2F6FF] text-[#3E86F5] rounded-sm font-medium"
					>Book Now</button
				>
			</div>
		</div>
	</div>
</div>
