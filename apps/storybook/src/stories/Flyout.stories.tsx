import { ComponentStory, ComponentMeta } from '@storybook/react';
import Layout from './layout';

import Flyout from 'win-ui/flyout';
import Typography from 'win-ui/typography';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Flyout',
  component: Flyout,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Flyout>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Flyout> = (args) => (
  <Layout>
    <Flyout {...args} />
  </Layout>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  sx: { width: 320 },
  children: (
    <Typography>
      This is Body text. Windows 11 marks a visual evolution of the operating system.
    </Typography>
  ),
};
