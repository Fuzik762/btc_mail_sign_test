<template>
  <button 
    class="btn" 
    type="this.type"
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
  },
};
</script>
