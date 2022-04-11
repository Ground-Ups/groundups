import { Story, Meta } from '@storybook/react';
import { GroundupsReact, GroundupsReactProps } from './groundups-react';

export default {
  component: GroundupsReact,
  title: 'GroundupsReact',
} as Meta;

const Template: Story<GroundupsReactProps> = (args) => (
  <GroundupsReact {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
