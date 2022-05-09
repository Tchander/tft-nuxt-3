<template>
  <div class="page">
    <main>
      <ContentSection>
        <div class="champions-filters">
          <ClassFilter
              v-model="championsByClass"
              v-bind="CHAMPIONS_FILTER_BY_CLASS"
              @changeCheckbox="changeCheckbox"
              class="champions-class-filter"
          />
          <SearchFilter
              v-model="searchChampionByName"
              class="champions-search-filter"
          />
          <RankFilter
              v-model="championsByRank"
              :items="CHAMPIONS_RANKS"
              @changeRanks="changeRanks"
              class="champions-rank-filter"
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
import ClassFilter from "@/components/Main/Filters/ClassFilter";
import RankFilter from "@/components/Main/Filters/RankFilter";
import { CHAMPIONS_FILTER_BY_CLASS, CHAMPIONS_RANKS } from "@/assets/const";

const championsStore = useChampionsStore();
const { champions } = storeToRefs(championsStore);
const searchChampionByName = ref('');
const championsByClass = ref([]);
const championsByRank = ref([]);

const filteredList = computed(() => {
  let result = champions.value.filter((champion) => {
    return champion.name.toLowerCase().includes(searchChampionByName.value.toLowerCase());
  })
  if (championsByClass.value.length) {
    if (result.length !== 0) {
      result = filterByClass(result);
    } else {
      result = champions.value;
    }
  }
  if (championsByRank.value.length) {
    if (result.length !== 0) {
      result = filterByRank(result);
    } else {
      result = champions.value;
    }
  }
  return result;
});

function changeCheckbox (checkboxList) {
  championsByClass.value = checkboxList;
}

function changeRanks (rankList) {
  championsByRank.value = rankList;
}

function filterByClass (championsList) {
  return championsList.filter((champion) => {
    if (championsByClass.value.length > champion.classes.length) {
      return false;
    }
    return championsByClass.value.every(el => champion.classes.includes(el));
  });
}

function filterByRank(championsList) {
  return championsList.filter((champion) => {
    return championsByRank.value.includes(champion.rank);
  });
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
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto 70px;
}
.champions-search-filter {
  position: relative;
}
.champions-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  padding-bottom: 80px;
}
</style>
