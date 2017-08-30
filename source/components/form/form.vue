<style lang='css'>
  @import '../../../node_modules/@descco/ui-core/lib/css/06-components/form.css';
</style>

<script>
import { styles } from '@descco/ui-core';
const classes = styles.form;

export default {
  name: 'ui-form',
  data: () => {
    return {
      classes
    };
  },
  props: {
    type: {
      type: String,
      default: 'form',
      validator: value => {
        const types = ['form', 'horizontal', 'inline'];
        return types.indexOf(value) !== -1;
      }
    },
    onSubmit: {
      type: Function,
      default: () => {}
    }
  }
};
</script>

<template>
  <form :class="[
    classes[type]
  ]"
  v-on:submit.prevent="onSubmit"
  ><slot></slot></form>
</template>
