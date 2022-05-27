<template>
  <div class="input">
    <label 
      class="input-text" 
      for="input"
    >
      {{ label }}
    </label>
    <input
      id="input"
      class="input-inner"
      :type="type"
      :required="required"
      :placeholder="placeholder"
    >
  </div>
</template>

<script>
export default {
  name: "DefaultInput",
  props: {
    type: {
      type: String,
      default: "text",
    },
    label: {
      type: String,
      default: "Название",
    },
    required: {
      type: Boolean,
      default: null,
    },
    placeholder: {
      type: String,
      default: "Введите данные",
    },
  },
};
</script>

<style scoped lang="scss">
.input {
  display: flex;
  flex-direction: column;
  min-width: 344px;
  &-text {
    @include font($font-inter, $font-reg-size, $font-medium);
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