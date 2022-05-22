<template lang="pug">
.input
  label.input-text(for='input') {{ this.label }}
  input.input-inner#input(
    :type='this.type'
    :required='this.required'
    :placeholder='this.placeholder'
  )
</template>

<script>
export default {
  name: 'default-input',
  props: {
    type: {
      type: String,
      default: 'text',
    },
    label: {
      type: String,
      default: 'Название',
    },
    required: {
      default: null,
    },
    placeholder: {
      type: String,
      default: 'Введите данные',
    },
  },
};
</script>

<style lang="scss">
$gray: #E2E8F0;
$indigo-gray: #475569;

.input {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 344px;
  &-text {
    font-size: 14px;
    font-weight: 500;
    color: $indigo-gray;
  }
  &-inner {
    margin-top: 4px;
    border: 1px solid $gray;
    padding: 8px 14px;
    width: 100%;
  }
}
</style>
