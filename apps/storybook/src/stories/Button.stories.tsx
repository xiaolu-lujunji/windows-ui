import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from 'windows-ui/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Standard = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Standard.args = {
  variant: 'standard',
  disabled: false,
  children: 'Text',
};

export const Accent = Template.bind({});
Accent.args = {
  variant: 'accent',
  disabled: false,
  children: 'Text',
};

export const Subtle = Template.bind({});
Subtle.args = {
  variant: 'subtle',
  disabled: false,
  children: 'Text',
};
