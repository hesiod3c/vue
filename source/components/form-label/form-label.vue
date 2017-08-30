<style lang='css'>
  @import '../../../node_modules/@descco/ui-core/lib/css/06-components/form-label.css';
</style>

<script>
import { styles } from '@descco/ui-core';
const classes = styles.formLabel;

export default {
  name: 'ui-form-label',
  data: () => {
    return {
      classes
    };
  },
  props: {
    addon: {
      type: Object
    }
  }
};
</script>

<template>
  <label :class="[
    classes.label
  ]"
  >
    <slot></slot>
    <span v-if="addon" :class="[classes['label-addon']]">{{addon}}</span>
  </label>
</template>
