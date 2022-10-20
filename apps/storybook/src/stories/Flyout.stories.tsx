import { ComponentStory, ComponentMeta } from '@storybook/react';
import Flyout from 'windows-ui/Flyout';
import FontIcon from 'windows-ui/FontIcon';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Surfaces/Flyout',
  component: Flyout,
} as ComponentMeta<typeof Flyout>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Flyout> = (args) => <Flyout {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  sx: { width: '160px', height: '80px' },
};
