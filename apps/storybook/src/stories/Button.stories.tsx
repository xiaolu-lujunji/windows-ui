import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from 'windows-ui/Button';
import FontIcon from 'windows-ui/FontIcon';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Basic input/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const TextOnly = Template.bind({});
TextOnly.args = {
  variant: 'accent',
  disabled: false,
  children: 'Text',
};

export const IconBefore = Template.bind({});
IconBefore.args = {
  variant: 'accent',
  startIcon: <FontIcon unicode="ea3a" />,
  disabled: false,
  children: 'Text',
};

export const IconAfter = Template.bind({});
IconAfter.args = {
  variant: 'accent',
  endIcon: <FontIcon unicode="ea3a" />,
  disabled: false,
  children: 'Text',
};

export const CompactTouch = Template.bind({});
CompactTouch.args = {
  variant: 'accent',
  size: 'compactTouch',
  disabled: false,
  children: 'Text',
};
