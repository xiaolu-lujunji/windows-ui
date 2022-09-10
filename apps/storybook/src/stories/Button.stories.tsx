import { ComponentStory, ComponentMeta } from '@storybook/react';
import Layout from './layout';

import Button from 'win-ui/button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => (
  <Layout>
    <Button {...args} />
  </Layout>
);

export const Accent = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Accent.args = {
  variant: 'accent',
  disableRipple: true,
  disabled: false,
  children: 'Text',
};

export const Standard = Template.bind({});
Standard.args = {
  variant: 'standard',
  disabled: false,
  children: 'Text',
};
