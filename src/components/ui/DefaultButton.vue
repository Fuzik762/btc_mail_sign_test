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
  @include m.font(v.$font-inter, v.$font-reg-size, v.$font-medium);
  display: flex;
  align-items: center;
  gap: 8px;
  color: c.$white;
  padding: 8px 12px;
  background-color: c.$purple-deep;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
