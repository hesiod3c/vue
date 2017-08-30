<style lang='css'>
  @import '../../../node_modules/@descco/ui-core/lib/css/06-components/form-actions.css';
</style>

<script>
import { styles } from '@descco/ui-core';
const classes = styles.formActions;

export default {
  name: 'ui-form-actions',
  data: () => {
    return {
      classes
    };
  },
  props: {
    className: {
      type: String
    }
  }
};
</script>

<template>
  <div :class="[
    className,
    classes['form-group-actions']
  ]"
  ><slot></slot></div>
</template>
