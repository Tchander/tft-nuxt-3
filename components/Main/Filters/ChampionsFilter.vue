<template>
  <div class="filter-wrapper">
    <div
        @click="openCheckboxList"
        class="filter-title"
        :class="{ 'filter-title_open': showList }"
    >
      {{ title }}
    </div>
    <transition name="fade">
      <div
          v-show="showList"
          class="filter-list-wrapper"
          :class="{ 'filter-list-wrapper_open': showList }"
      >
        <div v-for="item in items" :key="item" class="filter-list">
          <input
              type="checkbox"
              :value="item"
              class="filter-list__input"
              :checked="checked"
              @click="changeCheckbox(item)"
          >
          <label class="filter-list__label">{{ item }}</label>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'

  const props = defineProps({
    title: {
      type: String,
      default: '',
    },
    items: {
      type: Array,
      default: () => [],
    }
  });
  const emit = defineEmits(['changeCheckbox']);

  let showList = ref(false);
  const checkboxList = ref([]);
  const checked = ref(false);

  function openCheckboxList() {
    showList.value = !showList.value;
  }

  function closeCheckboxList() {
    showList.value = false;
  }

  function changeCheckbox (item) {
    const index = checkboxList.value.indexOf(item);
    if (index !== -1) {
      checkboxList.value.splice(index, 1);
    } else {
      checkboxList.value.push(item);
    }
    emit('changeCheckbox', checkboxList.value);
  }
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.filter-wrapper {
  position: relative;
}
.filter-title {
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.7px;
  text-align: center;
  background: #283655;
  border: 1px solid #4d648d;
  border-radius: 4px;
  color: #4d648d;
  padding: 10px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  &_open {
    box-shadow: 0 0 10px #4d648d;
  }

  &:after {
    content: '';
    position: absolute;
    top: 10px;
    right: 20px;
    width: 14px;
    height: 14px;
    border-right: 2px solid #4d648d;
    transform: rotate(42deg);
  }

  &:before {
    content: '';
    position: absolute;
    top: 10px;
    right: 18px;
    width: 14px;
    height: 14px;
    border-left: 2px solid #4d648d;
    transform: rotate(-42deg);
  }
}
.filter-list-wrapper {
  position: absolute;
  z-index: 10;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px 8px;
  padding: 20px;
  background: #283655;
  width: 100%;
  border: 1px solid #4d648d;
  border-radius: 4px;
  //opacity: 0;
  transition: all 0.5s ease-in-out;

  &_open {
    //opacity: 1;
    box-shadow: 0 0 10px #4d648d;
  }
}
.filter-list {
  display: flex;
  align-items: center;
  transition: all 0.5s ease-in-out;

  &__input {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }

  &__label {
    margin-left: 8px;
  }
}
</style>
