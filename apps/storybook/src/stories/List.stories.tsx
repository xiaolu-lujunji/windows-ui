import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Layout from './layout';

import List from 'win-ui/list';
import ListItem from 'win-ui/list-item';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/List',
  component: List,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof List>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof List> = (args) => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  return (
    <Layout>
      <List {...args}>
        <ListItem selected={selectedIndex === 0} onClick={() => setSelectedIndex(0)}>
          Text
        </ListItem>
        <ListItem selected={selectedIndex === 1} onClick={() => setSelectedIndex(1)}>
          Text
        </ListItem>
        <ListItem selected={selectedIndex === 2} onClick={() => setSelectedIndex(2)}>
          Text
        </ListItem>
        <ListItem selected={selectedIndex === 3} onClick={() => setSelectedIndex(3)}>
          Text
        </ListItem>
        <ListItem selected={selectedIndex === 4} onClick={() => setSelectedIndex(4)}>
          Text
        </ListItem>
        <ListItem selected={selectedIndex === 5} onClick={() => setSelectedIndex(5)}>
          Text
        </ListItem>
      </List>
    </Layout>
  );
};
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
