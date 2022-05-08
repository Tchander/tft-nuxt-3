<template>
  <div>
    <input
        type="text"
        class="search"
        placeholder="Поиск по чемпиону"
        v-model="model"
    >
    <label class="search-label">Поиск по чемпиону:</label>
    <transition name="fade">
      <div v-if="modelValue" class="search-close" @click="clearInput" />
    </transition>
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

  function clearInput() {
    emit('update:modelValue', '')
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
.search {
  width: 100%;
  background: #283655;
  border: 1px solid #4d648d;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  padding: 10px;
  transition: 0.5s all ease-in-out;

  &::placeholder {
    color: #4d648d;
    transition: 0.5s opacity ease-in-out;
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
.search-label {
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 20px;
  letter-spacing: 0.7px;
  opacity: 0;
  z-index: -1;
  color: #fff;
  transition: 0.5s all ease-in-out;
}
.search-close {
  position: absolute;
  cursor: pointer;
  width: 20px;
  height: 20px;
  top: 12px;
  right: -10px;

  &:after {
    content: '';
    position: absolute;
    top: -7px;
    right: 6px;
    width: 20px;
    height: 20px;
    transform: rotate(45deg);
    border-right: 2px solid #4d648d;
  }

  &:before {
    content: '';
    position: absolute;
    top: -7px;
    right: -8px;
    width: 20px;
    height: 20px;
    transform: rotate(-45deg);
    border-left: 2px solid #4d648d;
  }
}
</style>
