import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from 'windows-ui/Button';
import FontIcon from 'windows-ui/FontIcon';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const TextOnlyTemplate: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const TextOnly = TextOnlyTemplate.bind({});
TextOnly.args = {
  variant: 'accent',
  disabled: false,
  children: 'Text',
};

const IconBeforeTemplate: ComponentStory<typeof Button> = (args) => (
  <Button {...args} startIcon={<FontIcon unicode="ea3a" />} />
);

export const IconBefore = IconBeforeTemplate.bind({});
IconBefore.args = {
  variant: 'accent',
  disabled: false,
  children: 'Text',
};

const IconAfterTemplate: ComponentStory<typeof Button> = (args) => (
  <Button {...args} endIcon={<FontIcon unicode="ea3a" />} />
);

export const IconAfter = IconAfterTemplate.bind({});
IconAfter.args = {
  variant: 'accent',
  disabled: false,
  children: 'Text',
};
