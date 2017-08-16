<template>
  <button :class="[classes[type], classes[size]]"><slot></slot></button>
</template>
<script>
import { styles } from '@descco/ui-core';
const classes = styles.button;

export default {
  data: () => {
    return {
      classes
    };
  },
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
<style lang='css'>
  @import '../../../node_modules/@descco/ui-core/lib/css/06-components/button.css';
</style>
