<template>
  <div class="page">
    <main>
      <ContentSection>
        <SearchFilter
            v-model="searchChampionByName"
            class="search-wrapper"
        />
        <ul class="champions-list">
          <ChampionsCard v-for="champion in filteredList" :key="champion.id" :champion="champion" />
        </ul>
      </ContentSection>
    </main>
    <aside class="left-filter-wrapper">
      <ChampionsFilter
          v-model="championsByClass"
          v-bind="CHAMPIONS_FILTER_BY_CLASS"
          @changeCheckbox="changeCheckbox"
      />
    </aside>
  </div>
</template>

<script setup>
    import { ref, computed } from 'vue';
    import { storeToRefs } from 'pinia';
    import { useChampionsStore } from "@/store/champions";
    import ContentSection from "@/components/ContentSection";
    import ChampionsCard from "@/components/Main/Champions/ChampionsCard";
    import SearchFilter from "@/components/Main/Filters/SearchFilter";
    import ChampionsFilter from "@/components/Main/Filters/ChampionsFilter";
    import { CHAMPIONS_FILTER_BY_CLASS } from "@/assets/const";

    const championsStore = useChampionsStore();
    const { champions } = storeToRefs(championsStore);
    const searchChampionByName = ref('');
    const championsByClass = ref([]);

    const filteredList = computed(() => {
      const result = champions.value.filter((champion) => {
        return champion.name.toLowerCase().includes(searchChampionByName.value.toLowerCase())
      })
      if (championsByClass.value.length) {
        if (result.length !== 0) {
          return filterByClass(result)
        }
        return champions.value
      }
      return result.length !== 0 ? result : champions.value
    });

    function changeCheckbox (checkboxList) {
      championsByClass.value = checkboxList
    }

    function filterByClass (championsList) {
      return championsList.filter((champion) => {
        if (championsByClass.value.length > champion.classes.length) {
          return false
        }
        return championsByClass.value.every(el => champion.classes.includes(el))
      })
    }
</script>

<style lang="scss" scoped>
.page {
  position: relative;
  margin-top: 150px;
}
.search-wrapper {
  position: relative;
  margin: 0 auto 70px;
  max-width: 420px;
}
.champions-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  padding-bottom: 80px;
}
.left-filter-wrapper {
  position: absolute;
  top: 60px;
  left: 30px;
  width: 100%;
  max-width: 360px;
  border: 1px solid #4d648d;
  border-radius: 4px;
}
</style>

