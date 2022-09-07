import { ComponentStory, ComponentMeta } from '@storybook/react';
import Layout from './layout';

import Typography from 'win-ui/typography';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Typography',
  component: Typography,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Typography>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Typography> = (args) => (
  <Layout>
    <Typography {...args} />
  </Layout>
);

export const Body = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Body.args = {
  variant: 'body',
  sx: {
    backgroundColor: 'pink',
  },
  children: 'Text',
};
