import type { Theme } from '@mui/material/styles/createTheme';
import type { Components } from '@mui/material/styles/components';

export const MuiCssBaseline: Components<Theme>['MuiCssBaseline'] = {
  styleOverrides: (theme) => ({
    body: {
      backgroundColor: theme.winUI.palette.mode === 'light' ? '#fafafa' : '#1c1c1c',
    },
  }),
};

export { default } from '@mui/material/CssBaseline';
export * from '@mui/material/CssBaseline';
