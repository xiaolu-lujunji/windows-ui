import { ComponentStory, ComponentMeta } from '@storybook/react';
import ToggleButton from 'windows-ui/ToggleButton';
import FontIcon from 'windows-ui/FontIcon';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Basic input/ToggleButton',
  component: ToggleButton,
} as ComponentMeta<typeof ToggleButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ToggleButton> = (args) => <ToggleButton {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  variant: 'standard',
  buttonComponent: 'Button',
  selected: false,
  disabled: false,
  children: 'Text',
};

export const IconOnly = Template.bind({});
IconOnly.args = {
  variant: 'standard',
  buttonComponent: 'IconButton',
  selected: false,
  disabled: false,
  children: <FontIcon unicode="ea3a" />,
};

export const CompactTouch = Template.bind({});
CompactTouch.args = {
  variant: 'standard',
  buttonComponent: 'IconButton',
  size: 'compactTouch',
  selected: false,
  disabled: false,
  children: <FontIcon unicode="ea3a" fontSize="small" />,
};
