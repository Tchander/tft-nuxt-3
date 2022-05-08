<template>
  <div class="page">
    <main>
      <ContentSection>
        <div class="champions-filters">
          <ChampionsFilter
              v-model="championsByClass"
              v-bind="CHAMPIONS_FILTER_BY_CLASS"
              @changeCheckbox="changeCheckbox"
              class="champions-class-filter"
          />
          <SearchFilter
              v-model="searchChampionByName"
              class="champions-search"
          />
        </div>
        <ul class="champions-list">
          <TransitionGroup name="list">
            <ChampionsCard v-for="champion in filteredList" :key="champion.id" :champion="champion" />
          </TransitionGroup>
        </ul>
      </ContentSection>
    </main>
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
.list-enter-active,
.list-leave-active {
  transition: opacity 0.5s ease-in-out;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
}

.page {
  position: relative;
  margin-top: 150px;
}
.champions-filters {
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(2, 1fr);
  margin: 0 auto 70px;
}
.champions-search {
  max-width: 420px;
}
.champions-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  padding-bottom: 80px;
}
</style>

