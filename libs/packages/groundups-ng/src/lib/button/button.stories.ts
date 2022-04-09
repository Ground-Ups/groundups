import { ButtonDirective } from '@groundups/groundups-ng';
import { Meta, Story } from '@storybook/angular';

export default {
  title: 'Button',
} as Meta<ButtonDirective>;

const Template: Story<ButtonDirective> = (args: ButtonDirective) => ({
  props: args,
  template: `<button groundupsGButton color="{{color}}">Hola mondo</button>`,
  // moduleMetadata: {
  //   declarations: [ButtonDirective],
  //   imports: [CommonModule],
  // },
});

export const Primary = Template.bind({});
Primary.args = {
  color: '',
};
