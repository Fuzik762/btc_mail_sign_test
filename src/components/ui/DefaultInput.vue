<template>
  <div class="input">
    <label 
      class="input-text" 
      :for="id"
    >
      {{ label }}
    </label>
    <input
      :id="id"
      class="input-inner"
      :type="type"
      :required="required"
      :placeholder="placeholder"
      :readonly="readonly"
      :value="value"
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
    readonly: {
      type: Boolean,
      default: null,
    },
    placeholder: {
      type: String,
      default: "Введите данные",
    },
    id: {
      type: String,
      default: "input",
    },
    value: {
      type: String,
      default: null,
    }
  },
};
</script>

<style scoped lang="scss">
.input {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 344px;
  &-text {
    @include m.font(v.$font-inter, v.$font-reg-size, v.$font-medium);
    color: c.$indigo-gray;
  }
  &-inner {
    margin-top: 4px;
    border: 1px solid c.$gray;
    border-radius: 4px;
    padding: 8px 14px;
  }
}
</style>