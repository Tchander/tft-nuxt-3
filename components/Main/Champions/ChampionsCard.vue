<template>
  <li class="champion-card">
    <img
        class="champion-card__avatar"
        :class="`champion-card__avatar_${champion.rank}`"
        :src="`/images/champions/${champion.avatar}.png`"
        :alt="champion.name"
    >
    <div class="champion-card__name">
      {{ champion.name }}
    </div>
    <div class="champion-card__info">
      <div class="champion-card__classes">
        <div
            v-for="championClass in champion.classes"
            :key="championClass + champion.id"
            class="champion-card__class"
        >
          <img
              :src="CLASS_EMBLEMS[championClass]"
              :alt="championClass"
              class="champion-card__emblems"
          >
          <p class="champion-card__text">
            {{ championClass }}
          </p>
        </div>
      </div>
      <div
          class="champion-card__rank"
          :class="`champion-card__rank_${champion.classes.length}`"
      >
        <span
            class="champion-card__number"
            :class="`champion-card__number_${champion.rank}`"
        >
          {{ champion.rank }}
        </span>
      </div>
    </div>
  </li>
</template>

<script setup>
import { CLASS_EMBLEMS } from "@/assets/const";

  const props = defineProps({
    champion: {
      type: Object,
      default: () => ({}),
    }
  });
</script>

<style lang="scss" scoped>
.champion-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 298px;
  padding: 20px;
  background: #4d648d;
  border-radius: 20px;
  box-shadow: 0 0 10px #4d648d, 0 0 40px #4d648d;

  &__avatar {
    width: 50%;
    border-radius: 20px;
    margin-bottom: 15px;

    &_1 {
      border: 2px solid #2f373f;
    }

    &_2 {
      border: 2px solid #155e40;
    }

    &_3 {
      border: 2px solid #0d529b;
    }

    &_4 {
      border: 2px solid #a51699;
    }

    &_5 {
      border: 2px solid #daaa29;
    }
  }

  &__name {
    flex-grow: 1;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 30px;
  }

  &__info {
    align-self: flex-start;
    display: flex;
    width: 100%;
    position: relative;
  }

  &__classes {
    display: flex;
    flex-direction: column;
    width: 75%;
  }

  &__class {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  &__text {
    margin-left: 10px;
  }

  &__emblems {
    width: 20px;
    height: 20px;
  }

  &__rank {
    display: flex;
    justify-content: center;
    width: 25%;
    position: absolute;
    left: 145px;

    &_1 {
      top: -15px;
    }

    &_2 {
      top: 0;
    }

    &_3 {
      top: 30px;
    }
  }

  &__number {
    position: relative;
    font-size: 36px;

    &:before {
      content: '';
      position: absolute;
      top: -4px;
      left: -19px;
      width: 46px;
      height: 46px;
      border-radius: 50%;
    }

    &_1 {
      &:before {
        border: 4px solid #2f373f;
        left: -18px;
      }
    }

    &_2 {
      &:before {
        border: 4px solid #155e40;
      }
    }

    &_3 {
      &:before {
        border: 4px solid #0d529b;
      }
    }

    &_4 {
      &:before {
        border: 4px solid #a51699;
        left: -18px;
      }
    }

    &_5 {
      &:before {
        border: 4px solid #daaa29;
      }
    }
  }
}

</style>
