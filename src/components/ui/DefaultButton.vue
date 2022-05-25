<template>
  <button 
    class="btn" 
    :type="type"
  > 
    <img
      v-if="hasIcon === true"
      class="btn__icon"
      :src="require(`@/assets/icons/${icon}__icon.svg`)"
    >
    {{ label }}
  </button>
</template>

<script>
export default {
  name: 'DefaultButton',
  props: {
    type: {
      type: String,
      default: 'button',
    },
    label: {
      type: String,
      default: 'Кнопка',
    },
    icon: {
      type: String,
      default: "plus",
    },
    hasIcon: {
      type: Boolean,
      default: false,
    }
  },
};
</script>
