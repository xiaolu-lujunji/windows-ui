import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Link from 'windows-ui/Link';

export default {
  title: 'Basic input/Link',
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const TextOnly = Template.bind({});

TextOnly.args = {
  href: 'https://www.bilibili.com',
  target: '_blank',
  disabled: false,
  children: 'Text',
};
