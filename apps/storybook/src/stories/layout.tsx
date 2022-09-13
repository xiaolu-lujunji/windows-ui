import React from 'react';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import createTheme from '@mui/material/styles/createTheme';
import components from 'win-ui/styles/components';
import { lightThemeColors } from 'win-ui/styles/colors';
import typography from 'win-ui/styles/typography';
import styled from 'win-ui/styles/styled';
import ToggleButton from '@mui/material/ToggleButton';
import type { Colors } from 'win-ui/styles/colors';
import type { Typography } from 'win-ui/styles/typography';

declare module '@mui/material/styles/createTheme' {
  interface ThemeOptions {
    winUI: {
      colors: Colors;
      typography: Typography;
    };
  }

  interface Theme {
    winUI: {
      colors: Colors;
      typography: Typography;
    };
  }
}

const defaultTheme = createTheme({
  components,
  winUI: {
    colors: lightThemeColors,
    typography,
  },
});

const LayoutRoot = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});

const ToolBarRoot = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  padding: 10,
});

const ContentRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 240,
  ...(theme.palette.mode === 'light' && {
    backgroundColor: '#fafafa',
  }),
}));

export default function Layout(props: { children?: React.ReactNode }) {
  const [zoom, setZoom] = React.useState(false);
  return (
    <ThemeProvider theme={defaultTheme}>
      <LayoutRoot>
        <ToolBarRoot>
          <ToggleButton value="zoom" selected={!zoom} onClick={() => setZoom(!zoom)}>
            {zoom ? '重置' : '500%'}
          </ToggleButton>
        </ToolBarRoot>
        <ContentRoot style={{ zoom: zoom ? 5 : 1 }}>{props.children}</ContentRoot>
      </LayoutRoot>
    </ThemeProvider>
  );
}
