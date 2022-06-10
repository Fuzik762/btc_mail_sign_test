<template>
  <div v-html="html" />
</template>

<script>
export default {
  name: "TemplateItem",
  props: {
    html: {
      type: String,
      default: null,
    },
  },
};
</script>
