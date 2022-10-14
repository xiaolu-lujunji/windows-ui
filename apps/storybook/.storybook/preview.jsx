import React from 'react';
import ThemeProvider from 'windows-ui/styles/ThemeProvider';
import GlobalStyles from 'windows-ui/GlobalStyles';
import createTheme from 'windows-ui/styles/createTheme';
import { addons } from '@storybook/addons';
import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode';

const LIGHT_BACKGROUND = '#fafafa';
const DARK_BACKGROUND = '#1c1c1c';

// get channel to listen to event emitter
const channel = addons.getChannel();

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export const decorators = [
  (Story) => {
    // this example uses hook but you can also use class component as well
    const [isDark, setDark] = React.useState(false);

    React.useEffect(() => {
      // listen to DARK_MODE event
      channel.on(DARK_MODE_EVENT_NAME, setDark);
      return () => channel.off(DARK_MODE_EVENT_NAME, setDark);
    }, [channel, setDark]);

    return (
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyles
          styles={(theme) => ({
            body: {
              backgroundColor: theme.palette.mode === 'light' ? LIGHT_BACKGROUND : DARK_BACKGROUND,
            },
          })}
        />
        <Story />
      </ThemeProvider>
    );
  },
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
