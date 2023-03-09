<script lang="ts">
  
  const enum tabType {team, couple, family};
  let selectedTab = tabType.team;

  function selectedTabClick(_tabType: tabType) {
    selectedTab = _tabType;
  }
  
</script>

<div class="w-full">
  <div class="max-w-max flex flex-wrap px-3 py-3 justify-center bg-white rounded-lg mx-auto font-medium text-[18px]">
    <div class="px-6 py-2 { selectedTab == tabType.team ? 'bg-[#3E86F5] rounded-[5px]': ''}"><button on:click={() =>selectedTabClick(tabType.team)} class="{ selectedTab == tabType.team ? 'text-white': 'text-[#000000]/50'}">Team</button></div>
    <div class="px-6 py-2 { selectedTab == tabType.couple ? 'bg-[#3E86F5] rounded-[5px]': ''}"><button on:click={() =>selectedTabClick(tabType.couple)} class="{ selectedTab == tabType.couple ? 'text-white': 'text-[#000000]/50'}">Couple</button></div>
    <div class="px-6 py-2 { selectedTab == tabType.family ? 'bg-[#3E86F5] rounded-[5px]': ''}"><button on:click={() =>selectedTabClick(tabType.family)} class="{ selectedTab == tabType.family ? 'text-white': 'text-[#000000]/50'}">Family</button></div>
  </div>  
</div>