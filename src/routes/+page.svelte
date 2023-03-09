<script lang="ts">
  import TabBtnOffer from '$lib/tab/TabBtnOffer.svelte';
	import TabBtnPlace from '$lib/tab/TabBtnPlace.svelte';

	import startImg from '$lib/images/start-img.png';
	import sp_img_1 from '$lib/images/unsplash_1.png';
	import sp_img_2 from '$lib/images/unsplash_2.png';
	import sp_img_3 from '$lib/images/unsplash_3.png';

	import CardOffer from '$lib/card/CardOffer.svelte';
	import CardPlace from '$lib/card/CardPlace.svelte';
</script>

<section class="w-full">
	<div class="w-full relative h-[100vh]">
		<img class="w-full h-full object-cover" src={startImg} alt="" />
		<div class="absolute top-[30vh] w-full items-center">
			<div class="w-full items-center text-center lg:px-46 md:px-20 sm:px-5">
				<h1 class="lg:text-[64px] md:text-[32px] xm:text-[24px] text-white font-bold">
					Discover Your Life, Travel Where You Want
				</h1>
				<p class="lg:text-[24px] md:text-[20px] xm:text-[14px] text-white mt-10">
					Would you explore natur paradise in the world, let’s find the best destination in world
					with us.
				</p>
			</div>
		</div>
	</div>
</section>

<section class="w-full">
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

<section class="w-full">
	<div class="w-full flex flex-wrap flex-row">
		<div class="w-full px-4 py-12">
			<h1 class="lg:text-[48px] sm:text-[24px] text-[20px] font-semibold text-gray-800 text-center">
				Recommended Destination
			</h1>
		</div>
    <TabBtnPlace />
		<div class="w-full flex flex-row flex-wrap px-2 md:px-5">
			<div class="w-full sm:w-1/2 md:w-1/4">
				<CardPlace
					img_name="src/lib/images/destination_1.png"
					name="Kina Mountain"
					place="Cambodia"
					mark="4.5"
				/>
			</div>
			<div class="w-full sm:w-1/2 md:w-1/4">
				<CardPlace
					img_name="src/lib/images/destination_2.png"
					name="Kina Mountain"
					place="Cambodia"
					mark="3.4"
				/>
			</div>
			<div class="w-full sm:w-1/2 md:w-1/4">
				<CardPlace
					img_name="src/lib/images/destination_3.png"
					name="Kina Mountain"
					place="Cambodia"
					mark="5"
				/>
			</div>
			<div class="w-full sm:w-1/2 md:w-1/4">
				<CardPlace
					img_name="src/lib/images/destination_4.png"
					name="Kina Mountain"
					place="Cambodia"
					mark="4.6"
				/>
			</div>
		</div>
	</div>
</section>
