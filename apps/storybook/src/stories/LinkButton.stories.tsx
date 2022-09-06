import React, { Children } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Layout from './layout';

import LinkButton from 'win-ui/link-button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/LinkButton',
  component: LinkButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof LinkButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LinkButton> = (args) => (
  <Layout>
    <LinkButton {...args} />
  </Layout>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  href: 'https://www.bilibili.com',
  disabled: false,
  children: 'Text',
};
