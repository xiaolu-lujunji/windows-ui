import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Layout from './layout';

import ToggleButton from 'win-ui/toggle-button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/ToggleButton',
  component: ToggleButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof ToggleButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ToggleButton> = (args) => {
  const [selected, setSelected] = React.useState(false);

  return (
    <Layout>
      <ToggleButton selected={selected} {...args} onClick={() => setSelected(!selected)} />
    </Layout>
  );
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  value: 'text',
  disableRipple: true,
  disabled: false,
  children: 'Text',
};
