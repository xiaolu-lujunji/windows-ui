import type { ComponentStory, ComponentMeta } from '@storybook/react';
import ListItem from 'windows-ui/ListItem';
import FontIcon from 'windows-ui/FontIcon';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Primitives/ListItem',
  component: ListItem,
} as ComponentMeta<typeof ListItem>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ListItem> = (args) => <ListItem {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  variant: 'standard',
  selected: false,
  disabled: false,
  children: 'Text',
};

export const HintText = Template.bind({});
HintText.args = {
  variant: 'standard',
  selected: false,
  disabled: false,
  hintText: 'Hint',
  children: 'Text',
};

export const Cascading = Template.bind({});
Cascading.args = {
  variant: 'cascading',
  selected: false,
  disabled: false,
  children: 'Text',
};

export const Radio = Template.bind({});
Radio.args = {
  variant: 'radio',
  selected: false,
  disabled: false,
  children: 'Text',
};

export const Check = Template.bind({});
Check.args = {
  variant: 'check',
  selected: false,
  disabled: false,
  children: 'Text',
};

export const IconBefore = Template.bind({});
IconBefore.args = {
  variant: 'standard',
  startIcon: <FontIcon unicode="ea3a" />,
  selected: false,
  disabled: false,
  children: 'Text',
};

export const Intended = Template.bind({});
Intended.args = {
  variant: 'standard',
  selected: false,
  disabled: false,
  indented: true,
  children: 'Text',
};
