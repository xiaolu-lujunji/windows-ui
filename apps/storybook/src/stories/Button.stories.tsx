import ThemeProvider from '@mui/material/styles/ThemeProvider';
import CssBaseline from '@Mui/material/CssBaseline';
import Icon from '@mui/material/Icon';
import Button, { MuiButton } from 'win-ui/Button';
import { MuiCssBaseline } from 'win-ui/CssBaseline';
import createTheme from 'win-ui/styles/createTheme';
import createWinUIPalette from 'win-ui/styles/createWinUIPalette';
import createWinUITypography from 'win-ui/styles/createTypography';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import 'win-ui/segoe-fluent-icons.css';

const theme = createTheme({
  components: {
    MuiButton,
    MuiCssBaseline,
  },
  winUI: {
    palette: createWinUIPalette('light'),
    typography: createWinUITypography(),
  },
});

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => (
  <ThemeProvider theme={theme}>
    <CssBaseline>
      <Button {...args} />
    </CssBaseline>
  </ThemeProvider>
);

export const Standard = Template.bind({});
Standard.args = {
  variant: 'standard',
  disableRipple: true,
  disabled: false,
  children: 'Text',
};

export const Accent = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Accent.args = {
  variant: 'accent',
  disableRipple: true,
  disabled: true,
  children: 'Text',
};

export const AccentIconBefore = Template.bind({});
AccentIconBefore.args = {
  variant: 'accent',
  disableRipple: true,
  disabled: false,
  children: (
    <>
      <Icon baseClassName="segoe-fluent-icons" className="circle-ring" />
      Text
    </>
  ),
};

export const Subtle = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Subtle.args = {
  variant: 'subtle',
  disableRipple: true,
  disabled: true,
  children: 'Text',
};
