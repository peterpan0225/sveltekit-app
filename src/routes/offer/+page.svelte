<script lang="ts">
  import TabBtnOffer from '$lib/tab/TabBtnOffer.svelte';
	import sp_img_1 from '$lib/images/unsplash_1.png';
	import sp_img_2 from '$lib/images/unsplash_2.png';
	import sp_img_3 from '$lib/images/unsplash_3.png';

	import CardOffer from '$lib/card/CardOffer.svelte';
</script>

<section class="w-full mt-10">
	<div class="w-full flex flex-wrap flex-row">
		<div class="w-full px-4 py-12">
			<h1 class="lg:text-[48px] sm:text-[24px] text-[20px] font-semibold text-gray-800 text-center">
				Special Upcoming Offers
			</h1>
		</div>
    <TabBtnOffer />
		<div class=" flex flex-row flex-wrap mx-auto">
			<div class="w-full sm:w-1/2 md:w-1/3">
				<CardOffer
					img_name={sp_img_1}
					travel_reason="Relax"
					travel_period="3 Days, 3 Nights"
					travel_place="Loga See"
					travel_price="700"
				/>
			</div>
			<div class="w-full sm:w-1/2 md:w-1/3">
				<CardOffer
					img_name={sp_img_2}
					travel_reason="adventure"
					travel_period="4 Days, 3 Nights"
					travel_place="Ansgar Scheffold"
					travel_price="400"
				/>
			</div>
			<div class="w-full sm:w-1/2 md:w-1/3">
				<CardOffer
					img_name={sp_img_3}
					travel_reason="Relax"
					travel_period="4 Days, 3 Nights"
					travel_place="Lona X"
					travel_price="350"
				/>
			</div>
      <div class="w-full sm:w-1/2 md:w-1/3">
				<CardOffer
					img_name={sp_img_3}
					travel_reason="Relax"
					travel_period="4 Days, 3 Nights"
					travel_place="Lona X"
					travel_price="350"
				/>
			</div>
		</div>
	</div>
</section>