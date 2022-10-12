import { buttonClasses } from '@mui/material/Button';
import type { Theme } from '@mui/material/styles/createTheme';
import type { Components } from '@mui/material/styles/components';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    standard: true;
    accent: true;
  }
}

export const MuiButton: Components<Theme>['MuiButton'] = {
  variants: [
    {
      props: { variant: 'standard' },
      style: ({ theme }) => ({
        minWidth: 118,
        padding: '5px 10px',
        margin: 1,
        backgroundColor: theme.winUI.palette.controlFill.default,
        ...theme.winUI.typography.body,
        color: theme.winUI.palette.text.primary,
        textTransform: 'none',
        '&:before': {
          content: '""',
          position: 'absolute',
          inset: -1,
          padding: 1,
          borderRadius: 4,
          ...theme.winUI.palette.controlElevation.controlBorder,
          mask: 'linear-gradient(#fff, #fff) content-box, linear-gradient(#fff, #fff)',
          maskComposite: 'xor',
        },
        '&:hover': {
          backgroundColor: theme.winUI.palette.controlFill.secondary,
        },
        '&:active': {
          color: theme.winUI.palette.text.secondary,
          backgroundColor: theme.winUI.palette.controlFill.tertiary,
          '&:before': {
            background: theme.winUI.palette.controlStroke.default,
          },
        },
        [`&.${buttonClasses.disabled}`]: {
          color: theme.winUI.palette.text.disabled,
          backgroundColor: theme.winUI.palette.controlFill.disabled,
          '&:before': {
            background: theme.winUI.palette.controlStroke.default,
          },
        },
      }),
    },
    {
      props: { variant: 'accent' },
      style: ({ theme }) => ({
        minWidth: 120,
        padding: '6px 10px',
        backgroundColor: theme.winUI.palette.accentFill.default,
        ...theme.winUI.typography.body,
        color: theme.winUI.palette.textOnAccent.primary,
        textTransform: 'none',
        '&:before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          padding: 1,
          borderRadius: 4,
          ...theme.winUI.palette.controlElevation.accentControlBorder,
          mask: 'linear-gradient(#fff, #fff) content-box, linear-gradient(#fff, #fff)',
          maskComposite: 'xor',
        },
        '&:hover': {
          backgroundColor: theme.winUI.palette.accentFill.secondary,
        },
        '&:active': {
          color: theme.winUI.palette.textOnAccent.secondary,
          backgroundColor: theme.winUI.palette.accentFill.tertiary,
          '&:before': {
            background: theme.winUI.palette.controlStroke.onAccentDefault,
          },
        },
        [`&.${buttonClasses.disabled}`]: {
          color: theme.winUI.palette.textOnAccent.disabled,
          backgroundColor: theme.winUI.palette.accentFill.disabled,
          '&:before': {
            background: 'transparent',
          },
        },
      }),
    },
  ],
};

export { default } from '@mui/material/Button';
