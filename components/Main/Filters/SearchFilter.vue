<template>
  <div>
    <input
        type="text"
        class="search"
        placeholder="Поиск по чемпиону"
        v-model="model"
    >
    <label class="search-label">Поиск по чемпиону:</label>
  </div>
</template>

<script setup>
  import { computed } from "vue";

  const props = defineProps({
    modelValue: {
      type: String,
      default: '',
    }
  })
  const emit = defineEmits(['update:modelValue'])
  const model = computed({
    get: () => props.modelValue,
    set: (value) => emit('update:modelValue', value)
  })
</script>

<style lang="scss" scoped>
.search-label {
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 20px;
  letter-spacing: 0.7px;
  opacity: 0;
  z-index: -1;
  color: #fff;
  transition: .5s all ease-in-out;
}
.search {
  width: 100%;
  background: #283655;
  border: 1px solid #4d648d;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  padding: 10px;
  transition: .5s all ease-in-out;

  &::placeholder {
    color: #4d648d;
    transition: .5s opacity ease-in-out;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 10px #4d648d;

    & + .search-label {
      z-index: 2;
      transform: translateY(-40px) translateX(-10px);
      opacity: 1;
    }

    &::placeholder {
      opacity: 0;
    }
  }
}
</style>
