import { ComponentStory, ComponentMeta } from '@storybook/react';
import IconButton from 'windows-ui/IconButton';
import FontIcon from 'windows-ui/FontIcon';

export default {
  title: 'Basic input/IconButton',
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  size: 'standard',
  disabled: false,
  children: <FontIcon unicode="ea3a" />,
};

export const CompactTouch = Template.bind({});
CompactTouch.args = {
  size: 'compactTouch',
  disabled: false,
  children: <FontIcon unicode="ea3a" fontSize="small" />,
};
