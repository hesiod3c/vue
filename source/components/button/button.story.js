import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';

import Button from './index';

Vue.component('Button', Button);

const stories = storiesOf('Button', module);

stories.addDecorator(withKnobs);

stories.add('Type', () => ({
  template: `
    <div>
      <Button>Test</Button>
      <Button type="primary">Test</Button>
      <Button type="info">Test</Button>
      <Button type="warning">Test</Button>
      <Button type="danger">Test</Button>
      <Button type="transparent" size="none">Test</Button>
    </div>`
}));

stories.add('Size', () => ({
  template: `
    <div>
      <Button size="mini">Mini</Button>
      <Button size="small">Small</Button>
      <Button>Medium</Button>
      <Button size="large">Large</Button>
      <Button type="primary" size="large">Large</Button>
      <Button type="primary">Medium</Button>
      <Button type="primary" size="small">Small</Button>
      <Button type="primary" size="mini">Mini</Button>
    </div>`
}));

stories.add('Outline', () => ({
  template: `
    <div>
      <Button outline>Default</Button>
      <Button type="primary" outline>Primary</Button>
      <Button type="success" outline>Success</Button>
      <Button type="info" outline>Info</Button>
      <Button type="warning" outline>Warning</Button>
      <Button type="danger" outline>Danger</Button>
    </div>`
}));

stories.add('Active', () => ({
  template: `
    <div>
      <Button active>Default</Button>
      <Button type="primary" active>Primary</Button>
      <Button type="success" active>Success</Button>
      <Button type="info" active>Info</Button>
      <Button type="warning" active>Warning</Button>
      <Button type="danger" active>Danger</Button>
    </div>`
}));

stories.add('Block', () => ({
  template: `
    <div>
      <Button block>Default</Button>
      <Button type="primary" block>Primary</Button>
      <Button type="success" block>Success</Button>
      <Button type="info" block>Info</Button>
      <Button type="warning" block>Warning</Button>
      <Button type="danger" block>Danger</Button>
    </div>`
}));

stories.add('With icon', () => ({
  template: `
    <div>
      <Button><Icon /> Default</Button>
      <Button type="primary"><Icon /> Primary</Button>
      <Button type="success">Success <Icon /></Button>
      <Button type="info"><Icon /> Info <Icon /></Button>
      <Button type="warning" outline><Icon /> Warning</Button>
      <br /><br />
      <Button type="danger" block><Icon /> Danger</Button>
    </div>`
}));

stories.add('Icon with circle style', () => ({
  template: `
    <div>
      <Button size="mini" circle><Icon size="14px" /></Button>
      <Button size="mini" circle><Icon /></Button>
      <Button size="mini" circle><Icon size="36px" /></Button>
      <Button size="mini" circle><Icon size="50px" /></Button>
      <br /><br />
      <Button type="primary" size="small" circle><Icon size="14px" /></Button>
      <Button type="primary" size="small" circle><Icon /></Button>
      <Button type="primary" size="small" circle><Icon size="36px" /></Button>
      <Button type="primary" size="small" circle><Icon size="50px" /></Button>
      <br /><br />
      <Button type="success" circle><Icon size="14px" /></Button>
      <Button type="success" circle><Icon /></Button>
      <Button type="success" circle><Icon size="36px" /></Button>
      <Button type="success" circle><Icon size="50px" /></Button>
      <br /><br />
      <Button type="info" size="large" circle><Icon size="14px" /></Button>
      <Button type="info" size="large" circle><Icon /></Button>
      <Button type="info" size="large" circle><Icon size="36px" /></Button>
      <Button type="info" size="large" circle><Icon size="50px" /></Button>
      <br /><br />
      <Button type="warning" size="large" circle><Icon /></Button>
      <Button type="danger" size="large" circle><Icon /></Button>
    </div>`
}));

stories.add('Rounded', () => ({
  template: `
    <div>
      <Button rounded>Default</Button>
      <Button type="primary" rounded><Icon /></Button>
      <Button type="success" rounded><Icon /> Success</Button>
      <Button type="info" disabled rounded>Info</Button>
      <Button type="warning" outline rounded>Warning</Button>
      <br /><br />
      <Button type="danger" block rounded>Danger</Button>
    </div>`
}));

stories.add('Disabled', () => ({
  template: `
    <div>
      <Button disabled>Default</Button>
      <Button type="primary" disabled>Primary</Button>
      <Button type="info" disabled rounded>Rounded</Button>
      <Button type="warning" disabled outline>Outline</Button>
      <br /><br />
      <Button type="danger" disabled block>Block</Button>
    </div>`
}));

stories.add('Loading', () => ({
  template: `
    <div>
      <Button>Default</Button>
      <Button loading>Default</Button>
    </div>`
}));
