<template lang='pug'>
<Login />
</template>

<script>
import Login from '@/components/login.vue';

export default {
  name: 'HomeView',
  components: { Login },
};
</script>

<style lang="scss">
.main__auth {
  width: 200px;
  height: 200px;
  color: red;
}
</style>
