import Vue from 'vue';
import { storiesOf } from '@storybook/vue';

import Button from './index';

Vue.component('Button', Button);

storiesOf('Button', module)
.add('default', () => ({
  template: `
    <div style="width: 800px;height: 600px;">
      <Button>Test</Button>
      <Button type="primary">Test</Button>
      <Button type="info">Test</Button>
    </div>`
}));
