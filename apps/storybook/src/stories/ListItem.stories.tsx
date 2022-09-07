import { ComponentStory, ComponentMeta } from '@storybook/react';
import CircleRing from 'win-ui/icons/circle-ring';
import Layout from './layout';

import ListItem from 'win-ui/list-item';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/ListItem',
  component: ListItem,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof ListItem>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ListItem> = (args) => {
  const { iconBefore, ...props } = args;
  return (
    <Layout>
      <ListItem
        {...props}
        startIcon={
          iconBefore ? <CircleRing sx={{ fontSize: 16, lineHeight: '16px' }} /> : undefined
        }
      />
    </Layout>
  );
};

export const Standard = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Standard.args = {
  selected: false,
  selectType: 'standard',
  indented: false,
  cascading: false,
  iconBefore: false,
  hintText: '',
  disabled: false,
  children: 'Text',
};
