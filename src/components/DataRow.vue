<template>
  <div class="data">
    <h4 class="data-head">
      <slot name="head" />
    </h4>
    <div class="data-content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "DataRow",
}
</script>

<style lang="scss">
.data {
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding-top: 24px;
  padding-bottom: 24px;
  &-head {
    @include m.font(v.$font-inter, v.$font-small-size, v.$font-semibold);
    color: c.$deep-dark-gray;
  }
  &-content {
    display: flex;
    gap: 24px;
    @media  (max-width: v.$medium-screen) {
      flex-wrap: wrap;
    }
  }
}
</style>
