<template>
  <ul class="filter-list">
    <li
        class="filter-item"
        :class="{ 'filter-item_active': !rankList.length }"
        @click="chooseAll"
    >
      {{ all }}
    </li>
    <li
        v-for="(item, index) in items"
        :key="index"
        class="filter-item"
        :class="{ 'filter-item_active': isActive(item) }"
        @click="chooseRank(item)"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  }
});
const emit = defineEmits(['changeRanks']);

const all = ref('Все');
const rankList = ref([]);

function isActive(item) {
  return rankList.value.includes(item);
}

function chooseAll() {
  rankList.value.splice(0, rankList.value.length)
  emit('changeRanks', rankList.value);
}

function chooseRank(item) {
  const index = rankList.value.indexOf(item);
  if (index !== -1) {
    rankList.value.splice(index, 1);
  } else {
    rankList.value.push(item);
  }
  emit('changeRanks', rankList.value);
}
</script>

<style lang="scss" scoped>
.filter-list {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  font-size: 20px;
  color: #4d648d;
}

.filter-item {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid #4d648d;
  border-radius: 4px;
  transition: all 0.5s ease-in-out;

  &:hover {
    box-shadow: 0 0 10px #4d648d;
    color: #d0e1f9;
  }

  &_active {
    color: #d0e1f9;
    box-shadow: 0 0 10px #4d648d;
  }
}
</style>
