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
    employee: {
      type: Object,
      default: () => ({}), 
      name: {
        type: String,
        default: 'Name'
      },
      position: {
        type: String,
        default: 'Разработчик'
      },
      phone: {
        type: Number,
        default: 79602020201
      },
      email: {
        type: String,
        default: 'example@mail.com'
      }
    }
  },
};
</script>
