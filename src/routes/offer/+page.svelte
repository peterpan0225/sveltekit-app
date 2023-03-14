<script lang="ts">

  /** @type {import('./$types').PageData} */
  export let data: any;

  import TabBtnOffer from '$lib/tab/TabBtnOffer.svelte';
	import sp_img_1 from '$lib/images/unsplash_1.png';
	import sp_img_2 from '$lib/images/unsplash_2.png';
	import sp_img_3 from '$lib/images/unsplash_3.png';

	import CardOffer from '$lib/card/CardOffer.svelte';

	let offerData = [
		{
			img_name: sp_img_1,
			travel_reason: "Relax",
			travel_period: "3 Days, 3 Nights",
			travel_place: "Loga See",
			travel_price: "600"
		}, 
		{
			img_name: sp_img_2,
			travel_reason: "Relax",
			travel_period: "4 Days, 5 Nights",
			travel_place: "Loga See",
			travel_price: "700"
		}, 
		{
			img_name: sp_img_3,
			travel_reason: "Relax",
			travel_period: "5 Days, 6 Nights",
			travel_place: "Loga See",
			travel_price: "400"
		}, 
		{
			img_name: sp_img_1,
			travel_reason: "Relax",
			travel_period: "1 Days, 2 Nights",
			travel_place: "Loga See",
			travel_price: "100"
		}, 
	]
</script>

<section class="w-full mt-10">
 
	<div class="w-full flex flex-wrap flex-row">
		<div class="w-full px-4 py-12">
			<h1 class="lg:text-[48px] sm:text-[24px] text-[20px] font-semibold text-gray-800 text-center">
				Special Upcoming Offers {data.title} - {data.content}
			</h1>
		</div>
    <TabBtnOffer />
		<div class=" flex flex-row flex-wrap mx-auto">
			{#each offerData as item}
				<div class="w-full sm:w-1/2 md:w-1/3">
					<CardOffer offerItem={item} />
				</div>
			{/each}
		</div>
	</div>
</section>