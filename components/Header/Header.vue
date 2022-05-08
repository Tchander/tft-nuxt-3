<template>
  <nav class="navigation">
    <ul class="navigation-list">
      <li class="navigation-list__item">
        <NuxtLink to="/" class="navigation-list__link">
          <img src="@/public/images/logo.png" alt="logo" class="navigation-list__logo">
        </NuxtLink>
      </li>
      <li class="navigation-list__item">
        <NuxtLink to="/champions" class="navigation-list__link">
          Чемпионы
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: #4d648d;
  box-shadow: 0 0 10px #4d648d;
}
.navigation-list {
  display: flex;
  align-items: center;
  padding: 20px 60px;
  font-size: 24px;
  font-weight: 500;

  &__item {
    margin-right: 30px;
  }

  &__link {
    text-decoration: none;
    color: #fff;

    &:hover {
      color: #d0e1f9;
    }
  }

  &__logo {
    width: 40px;
    height: 40px;
  }
}
</style>
