import { ComponentStory, ComponentMeta } from '@storybook/react';
import LinkButton from 'windows-ui/LinkButton';
import FontIcon from 'windows-ui/FontIcon';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Basic input/LinkButton',
  component: LinkButton,
} as ComponentMeta<typeof LinkButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LinkButton> = (args) => <LinkButton {...args} />;

export const TextOnly = Template.bind({});
TextOnly.args = {
  variant: 'standard',
  href: 'https://www.bilibili.com',
  target: '_blank',
  disabled: false,
  children: 'Text',
};

export const IconBefore = Template.bind({});
IconBefore.args = {
  variant: 'standard',
  href: 'https://www.bilibili.com',
  target: '_blank',
  startIcon: <FontIcon unicode="ea3a" />,
  disabled: false,
  children: 'Text',
};

export const IconAfter12px = Template.bind({});
IconAfter12px.args = {
  variant: 'standard',
  href: 'https://www.bilibili.com',
  target: '_blank',
  disabled: false,
  children: (
    <>
      Text
      <FontIcon unicode="e974" fontSize="small" sx={{ marginTop: '3px' }} />
    </>
  ),
};
