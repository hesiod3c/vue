<style lang='css'>
  @import '../../../node_modules/@descco/ui-core/lib/css/06-components/form-control.css';
</style>

<script>
import { styles } from '@descco/ui-core';
const classes = styles.formControl;

export default {
  name: 'ui-form-control',
  data: () => {
    return {
      classes
    };
  },
  props: {
    format: {
      type: String,
      default: 'input',
    },
    prop: {
      type: String,
      default: 'text',
      validator: value => {
        const types = [
          'text',
          'password',
          'select',
          'textarea',
          'radio',
          'checkbox',
          'file',
          'hidden',
          'search',
          'email',
          'range',
          'number',
          'month',
          'tel',
          'time',
          'url',
          'week',
          'date',
          'datetime',
          'color'
        ];
        return types.indexOf(value) !== -1;
      }
    }
  }
};
</script>

<template>
  <div :class="[
    classes['form-addon']
  ]"
  >
  </div>
</template>
