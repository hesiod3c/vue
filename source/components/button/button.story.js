import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import Button from './index';

import '../../../node_modules/@descco/ui-core/lib/css/06-components/button.css';

const stories = storiesOf('Button', module);

stories.addDecorator(withKnobs);

stories.addWithInfo(
  'Style',
  `
    This is the basic usage with the button.
  `,
  () => (
    <div>
      <Button onClick={action('clicked')}>Default</Button>&nbsp;
      <Button style="primary">Primary</Button>&nbsp;
      <Button style="success">Success</Button>&nbsp;
      <Button style="info">Info</Button>&nbsp;
      <Button style="warning">Warning</Button>&nbsp;
      <Button style="danger">Danger</Button>&nbsp;
      <Button style="transparent" size="none">
        <Icon />
      </Button>&nbsp;
    </div>
  )
);
