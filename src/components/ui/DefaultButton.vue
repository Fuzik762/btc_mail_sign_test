<template>
  <button 
    class="btn" 
    :type="type"
    :class="[iconColor === 'delete' ? 'delete-btn' : '']"
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
    iconColor: {
      type: String,
      default: ""
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
  width: max-content;
  color: c.$white;
  padding: 8px 12px;
  background-color: c.$purple;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    outline: 2px solid c.$purple;
    background: none;
    color: c.$purple;
  }
  &:active {
    outline: 1px solid c.$purple;
  }
}

.delete-btn {
  background-color: c.$dark-red;
  &:hover {
    outline: 2px solid c.$dark-red;
    background: none;
    color: c.$dark-red;
  }
  &:active {
    outline: 1px solid c.$dark-red;
  }
  
}
</style>
