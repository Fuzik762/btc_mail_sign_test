<template lang="pug">
.auth__wrapper
  .auth__content
    router-view
  .auth__image
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

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
  background-image: url('@/assets/images/auth__image.png');
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  }
}
</style>
