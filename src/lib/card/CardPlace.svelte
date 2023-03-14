<script lang="ts">
	import type { PlaceItemType } from "../types";

	export let placeItem: PlaceItemType;
</script>

<div class="w-full h-full p-4">
	<div class="w-full rounded-3xl p-5 bg-white">
		<div class="w-full aspect-[1.3] relative">
			<a href="#pa">
				<img class="w-full h-full rounded-3xl" src={placeItem.img_name} alt="" />
			</a>
      <div class="absolute inline-flex top-3 right-3 rounded bg-white px-3 py-1 items-center text-[14px]">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18" height="18" xml:space="preserve" version="1.1" viewBox="0 0 18 18">
          <image width="18" height="18" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEhSURBVHgBtVGxSgNBEH1zBk+FCDYqWmkhEhHCJUVMEwuxFBs/xS6gEMTK7/AP9AeCoBw5EPITCjaJmPPcfc4ZPXKQDQb0we7O7MzbeTML/BfiCCckBNNiEOJw0BEmEfZdOZ4rIDNylp6Gcj4V+a2Dhsqtf7sN9Q/GFkg3lVa3nncMy3UllfRqU9diliTogeiq+WTBLi1uFqpoF4bSsKfbKRzQB4t61IbV5MgDe2q2v2TPBbgyli38AiQv/CouM9lZryFa4klzEnG+gmau5yz4iKX4Q15c5ARcLgZ4/vFz006ILUzAbAGro36ebLAyIskIeZ9jEztOso6+pN8Sa9at9rftV1DzhRsEr1MqDdbgQv8Ou68hgnGx9wjl/gPK+Ct8Ap6zZmJANM4zAAAAAElFTkSuQmCC"/>
        </svg>
        <span class="ml-1">{placeItem.mark}</span>
      </div>
		</div>
		<div class="px-3 mt-5">
			<h1 class="text-2xl font-semibold mt-2">{placeItem.name}</h1>
			<div class="flex flex-row flex-wrap justify-between mt-2">
				<span class="text-[20px] font-medium text-gray-500">
          <svg class="inline" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="17" height="17" xml:space="preserve" version="1.1" viewBox="0 0 17 17">
            <image width="17" height="17" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGHSURBVHgBvZE7S8NQFMfPuYl9gLoVdBN1qV+gKiIufgYfX0FchGILlRDoK8XFRXBxFgpOfgQHoUspWhCkiENri0NtB2se93gbUvpKtIj4hyTn/s/N7/5PAvAHQq9GJxZbnuJsDxgLiWXN4HAdyCUfJ4LQliLzVetYVMnhBlnifs4CU0eoquZgi41C+BpXxgD2cSiJ65B39NS3SUhRFvmnWRTljGNVCKCARBEBWHC8FuNyGHNq1TWJpesrPQAi1NgHrcvZ1K4YIQIETWfbrIV803scwrn+XFDCs3TdBqpqAxkU+vmNaW8I0mufB9t6/CRi14lEmAg2ej0J5BdPiOTz3Yo5erGZRPyOxxNVblJZrIOOXwdTKnpCROym+JVXgx4RzcOQATd4qjY8IbZBpiYeLXDXu45WeuydUQM17RmIa24EhpAMZrOVHyG2WXnqQu6H4Ailt7px4brfzcR83jKR74gP0nYs0+Dmfugy154Y0pU/kymL42PdmoAO/Jr2AL8VRaNL8B/6AhjSkQbGcokZAAAAAElFTkSuQmCC"/>
          </svg>
          <strong class="text-gray-800">{placeItem.place}</strong>
        </span>
			</div>
		</div>
	</div>
</div>