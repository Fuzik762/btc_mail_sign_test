<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import AuthLayout from "@/layouts/AuthLayout.vue";
import DashboardLayout from "@/layouts/DashboardLayout.vue";

export default {
  components: {
    AuthLayout,
    DashboardLayout,
  },
  computed: {
    layout() {
      return this.$route.meta.layout || "auth-layout";
    },
  },
};
</script>
