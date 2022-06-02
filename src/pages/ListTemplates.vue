<template>
  <div>
    {{ test }}
  </div>
</template>

<script>
export default {
  computed: {
    test() {
      return Date.now();
    },
  },
}
</script>