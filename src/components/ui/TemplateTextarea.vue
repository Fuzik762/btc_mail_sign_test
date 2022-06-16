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
      :value="value"
      class="textarea-inner"
      :required="required"
      :placeholder="placeholder"
      rows="8"
      @input="getValue($event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "TemplateTextarea",
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
  emits: ['update:modelValue'],
  methods: {
    getValue(value) {
      this.$emit('update:modelValue', value)
    }
  }
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
