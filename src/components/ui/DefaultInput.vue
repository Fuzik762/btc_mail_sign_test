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
  name: 'DefaultInput',
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
      type: Boolean,
      default: null,
    },
    placeholder: {
      type: String,
      default: 'Введите данные',
    },
  },
};
</script>
