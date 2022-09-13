import type { Components } from '@mui/material/styles/components';
import { buttonClasses } from '@mui/material/Button';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    standard: true;
    accent: true;
  }
}

const components: Components = {
  MuiButton: {
    defaultProps: {
      disableRipple: true,
    },
    variants: [
      {
        props: { variant: 'standard' },
        style: ({ theme }) => ({
          padding: '5px 12px',
          border: '1px solid transparent',
          // TODO: how to implement gradient rounded corners border?
          ...theme.winUI.typography.body,
          textTransform: 'none',
          [`&.${buttonClasses.focusVisible}`]: {
            // TODO: how to implement inner stroke?
            outline: `2px solid ${theme.winUI.colors.focusStroke.outer}`,
            outlineOffset: 1,
          },
          color: theme.winUI.colors.text.primary,
          backgroundColor: theme.winUI.colors.controlFill.default,
          '&:hover': {
            backgroundColor: theme.winUI.colors.controlFill.secondary,
          },
          '&:active': {
            color: theme.winUI.colors.text.secondary,
            backgroundColor: theme.winUI.colors.controlFill.tertiary,
            borderColor: theme.winUI.colors.controlStroke.default,
          },
          [`&.${buttonClasses.disabled}`]: {
            color: theme.winUI.colors.text.disabled,
            backgroundColor: theme.winUI.colors.controlFill.disabled,
            borderColor: theme.winUI.colors.controlStroke.default,
          },
        }),
      },
      {
        props: { variant: 'accent' },
        style: ({ theme }) => ({
          padding: '5px 12px',
          // TODO: how to implement gradient rounded corners border?
          border: '1px solid transparent',
          ...theme.winUI.typography.body,
          textTransform: 'none',
          [`&.${buttonClasses.focusVisible}`]: {
            // TODO: how to implement inner stroke?
            outline: `2px solid ${theme.winUI.colors.focusStroke.outer}`,
            outlineOffset: 1,
          },
          color: theme.winUI.colors.textOnAccent.primary,
          backgroundColor: theme.winUI.colors.accentFill.default,
          '&:hover': {
            backgroundColor: theme.winUI.colors.accentFill.secondary,
          },
          '&:active': {
            color: theme.winUI.colors.textOnAccent.secondary,
            backgroundColor: theme.winUI.colors.accentFill.tertiary,
            borderColor: theme.winUI.colors.controlStroke.onAccentDefault,
          },
          [`&.${buttonClasses.disabled}`]: {
            color: theme.winUI.colors.textOnAccent.disabled,
            backgroundColor: theme.winUI.colors.accentFill.disabled,
          },
        }),
      },
    ],
  },
};

export default components;
