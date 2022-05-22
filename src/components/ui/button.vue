<template lang="pug">
button.btn(type=this.type ) {{ this.label }}
</template>

<script>
export default {
  name: 'Default-button',
  props: {
    type: {
      type: String,
      default: 'button',
    },
    label: {
      type: String,
      default: 'Кнопка',
    },
  },
};
</script>

<style lang="scss">
$purple-deep: #6366F1;
$white: #ffffff;
.btn {
  padding: 12px 8px;
  background-color: $purple-deep;
  color: $white;
  border: none;
  border-radius: 4px;
}
</style>
