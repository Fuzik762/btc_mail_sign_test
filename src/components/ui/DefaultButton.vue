<template>
  <button 
    class="btn" 
    :type="type"
  >
    <img
      v-if="icon !== ''"
      class="btn__icon"
      :src="require(`@/assets/icons/${icon}__icon.svg`)"
    >
    {{ label }}
  </button>
</template>

<script>
export default {
  name: "DefaultButton",
  props: {
    type: {
      type: String,
      default: "button",
    },
    label: {
      type: String,
      default: "Кнопка",
    },
    icon: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped lang="scss">
.btn {
  @include font($font-inter, $font-reg-size, $font-medium);
  display: flex;
  align-items: center;
  gap: 8px;
  color: $white;
  padding: 8px 10px;
  background-color: $purple-deep;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>