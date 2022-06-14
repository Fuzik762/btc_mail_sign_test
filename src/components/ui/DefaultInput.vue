<template>
  <div class="input">
    <label 
      class="input-text" 
      :for="id"
    >
      {{ label }}
    </label>
    <FieldValidate
      :id="id"
      class="input-inner"
      :type="type"
      :name="name"
      :required="required"
      :placeholder="placeholder"
      :readonly="readonly"
      :value="value"
    />
    <ErrorMessage 
      class="input-error"
      :name="name" 
    />
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
    },
    name: {
      type: String,
      default: "defaultInput"
    },
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
    &:focus-visible {
      outline: 2px solid c.$purple;
    }
  }
  &-error {
    @include m.font(v.$font-inter, v.$font-reg-size, v.$font-medium);
    margin-top: 10px;
  }
}
</style>
