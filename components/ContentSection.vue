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
  }
}
</style>
