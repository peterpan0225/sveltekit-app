<script lang="ts">
  
  const enum tabOfferType {team, couple, family};
  let selectedTab = tabOfferType.team;

  function selectedTabClick(_tabOfferType: tabOfferType) {
    selectedTab = _tabOfferType;
  }
  
</script>

<div class="w-full">
  <div class="max-w-max flex flex-wrap px-3 py-3 justify-center bg-white rounded-lg mx-auto font-medium text-[18px]">
    <div class="px-6 py-2 { selectedTab == tabOfferType.team ? 'bg-[#3E86F5] rounded-[5px]': ''}"><button on:click={() =>selectedTabClick(tabOfferType.team)} class="{ selectedTab == tabOfferType.team ? 'text-white': 'text-[#000000]/50'}">Team</button></div>
    <div class="px-6 py-2 { selectedTab == tabOfferType.couple ? 'bg-[#3E86F5] rounded-[5px]': ''}"><button on:click={() =>selectedTabClick(tabOfferType.couple)} class="{ selectedTab == tabOfferType.couple ? 'text-white': 'text-[#000000]/50'}">Couple</button></div>
    <div class="px-6 py-2 { selectedTab == tabOfferType.family ? 'bg-[#3E86F5] rounded-[5px]': ''}"><button on:click={() =>selectedTabClick(tabOfferType.family)} class="{ selectedTab == tabOfferType.family ? 'text-white': 'text-[#000000]/50'}">Family</button></div>
  </div>  
</div>