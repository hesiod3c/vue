<template>
  <button :class="[type, size]"><slot></slot></button>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'medium'
    }
  },
  computed: {
  }
};
</script>
<style scoped lang="css">
  @import '../../../node_modules/@descco/ui-core/lib/css/06-components/button.css';
</style>
