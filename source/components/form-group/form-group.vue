<style lang='css'>
  @import '../../../node_modules/@descco/ui-core/lib/css/06-components/form-group.css';
</style>

<script>
import { styles, utils } from '@descco/ui-core';
const classes = styles.formGroup;
const randomId = utils.property.randomId;

export default {
  name: 'ui-form-group',
  data: () => {
    return {
      classes
    };
  },
  props: {
    controlId: {
      type: String,
      default: randomId()
    },
    type: {
      type: undefined,
      default: false,
      validator: value => {
        const types = ['checkbox', 'radio'];
        return types.indexOf(value) !== -1;
      }
    },
    validationState: {
      type: undefined,
      default: false,
      validator: value => {
        const types = ['success', 'warning', 'error'];
        return types.indexOf(value) !== -1;
      }
    },
    withoutTopLabel: {
      type: String,
      default: false
    }
  }
};
</script>

<template>
  <div :class="[
    classes['form-group'],
    { [classes[`has-${validationState}`]]: validationState },
    { [classes[`form-group--${type}`]]: type },
    { [classes['form-group--withoutTopLabel']]: withoutTopLabel }
  ]"
  ><slot></slot></div>
</template>
