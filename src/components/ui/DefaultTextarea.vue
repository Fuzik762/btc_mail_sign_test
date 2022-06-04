<template>
  <div class="textarea">
    <label 
      class="textarea-text" 
      :for="id"
    >
      {{ label }}
    </label>
    <textarea
      :id="id"
      class="textarea-inner"
      :required="required"
      :placeholder="placeholder"
      :value="value"
      rows="8"
    />
  </div>
</template>

<script>
export default {
  name: "DefaultTextarea",
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
.textarea {
  display: flex;
  flex-direction: column;
  width: 100%;
  &-text {
    @include m.font(v.$font-inter, v.$font-reg-size, v.$font-medium);
    color: c.$indigo-gray;
  }
  &-inner {
    @include m.font(v.$font-inter, v.$font-small-size, v.$font-medium);
    line-height: 22px;
    resize: none;
    margin-top: 4px;
    border: 1px solid c.$gray;
    border-radius: 4px;
    padding: 5px 16px;
  }
}
</style>
