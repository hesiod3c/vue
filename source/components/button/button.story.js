import Vue from 'vue';
import { play } from 'vue-play';
import Button from './button-component.vue';

Vue.component('Button', Button);

play('Button')
  .add('Normal', {
    template: `
      <div>
        <Button>Default</Button>
        <Button type="primary">Primary</Button>
        <Button type="success">Success</Button>
        <Button type="info">Info</Button>
        <Button type="warning">Warning</Button>
        <Button type="danger">Danger</Button>
      </div>
    `
  });
