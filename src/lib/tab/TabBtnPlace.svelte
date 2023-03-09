<script lang="ts">
  
  const enum tabPlaceType {popular, adventure, beach};
  let selectedTab = tabPlaceType.popular;

  function selectedTabClick(_tabPlaceType: tabPlaceType) {
    selectedTab = _tabPlaceType;
  }
  
</script>

<div class="w-full">
  <div class="max-w-max flex flex-wrap px-3 py-3 justify-center rounded-lg mx-auto font-medium text-[18px]">
    <div class="px-6 py-2 { selectedTab == tabPlaceType.popular ? 'bg-white rounded-[5px] text-[#3E86F5]': 'text-[#000000]/50'}"><button on:click={() =>selectedTabClick(tabPlaceType.popular)}>Popular</button></div>
    <div class="px-6 py-2 { selectedTab == tabPlaceType.adventure ? 'bg-white rounded-[5px] text-[#3E86F5]': 'text-[#000000]/50'}"><button on:click={() =>selectedTabClick(tabPlaceType.adventure)}>Adventure</button></div>
    <div class="px-6 py-2 { selectedTab == tabPlaceType.beach ? 'bg-white rounded-[5px] text-[#3E86F5]': 'text-[#000000]/50'}"><button on:click={() =>selectedTabClick(tabPlaceType.beach)}>Beach</button></div>
  </div>  
</div>