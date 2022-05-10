<template>
  <section class="section">
    <div class="section__content">
      <slot />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.section {
  margin-bottom: 80px;

  &__content {
    position: relative;
    height: 100%;
    max-width: 1048px;
    margin: 0 auto;

    @media (max-width: 1279px) {
      max-width: 964px;
    }

    @media (max-width: 1023px) {
      max-width: 708px;
    }

    @media (max-width: 767px) {
      max-width: 540px;
      padding: 0 20px;
    }
  }
}
</style>
