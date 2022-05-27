<template>
  <div class="auth__wrapper">
    <div class="auth__content">
      <router-view />
    </div>
    <div class="auth__image" />
  </div>
</template>

<style lang="scss">
.auth {
  &__wrapper {
    display: flex;
  }

  &__content {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__image {
    width: 50%;
    height: 100vh;
    background-image: url("@/assets/images/auth__image.png");
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
  }
}
</style>