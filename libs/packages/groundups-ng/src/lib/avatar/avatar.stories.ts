import { Meta, Story } from "@storybook/angular";
import { AvatarComponent } from "./avatar.component";

export default {
    title: 'Avatar',
    component: AvatarComponent
} as Meta<AvatarComponent>;

const Template: Story<AvatarComponent> = (args) => ({
    props: args
});

export const Default = Template.bind({});
Default.args = {};