<template lang='pug'>
component(:is='layout')
  router-view
</template>

<script>
import AuthLayout from '@/layouts/AuthLayout.vue';
import DashboardLayout from '@/layouts/DashboardLayout.vue';

export default {
  components: {
    AuthLayout,
    DashboardLayout,
  },
  computed: {
    layout() {
      return this.$route.meta.layout || 'auth-layout';
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
