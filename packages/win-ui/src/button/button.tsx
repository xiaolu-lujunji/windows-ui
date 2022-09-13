import ButtonBase, { buttonClasses } from '@mui/material/Button';
import styled, { rootShouldForwardProp } from '../styles/styled';
export type { ButtonProps } from '@mui/material/Button';

// declare module '@mui/material/Button' {
//   interface ButtonPropsVariantOverrides {
//     standard: true;
//     accent: true;
//   }
// }

const Button = styled(ButtonBase, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === 'classes',
  name: 'WinUIButton',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const { ownerState } = props;
    return [styles.root, styles[ownerState.variant]];
  },
})(({ theme, variant, href }) => {
  const isLinkButton = href !== undefined;
  if (isLinkButton) {
    return {
      padding: '4px 11px 6px',
      ...theme.winUI.typography.body,
      textAlign: 'center',
      textDecorationLine: 'none',
      color: theme.winUI.palette.accentText.primary,
      borderRadius: 3,
      '&:hover': {
        color: theme.winUI.palette.accentText.secondary,
        backgroundColor: theme.winUI.palette.subtleFill.secondary,
      },
      '&:active': {
        color: theme.winUI.palette.accentText.tertiary,
        backgroundColor: theme.winUI.palette.subtleFill.tertiary,
      },
      [`&.${buttonClasses.disabled}`]: {
        color: theme.winUI.palette.accentText.disabled,
        backgroundColor: 'transparent',
      },
      '&:focus-visible': {
        // TODO: how to implement inner stroke?
        outline: `2px solid ${theme.winUI.palette.focusStroke.outer}`,
        outlineOffset: 1,
      },
    };
  }
  return {
    minWidth: 120,
    // padding: '5px 12px',
    // ...theme.winUI.typography.body,
    // textAlign: 'center',
    // TODO: how to implement gradient rounded corners border?
    // border: '1px solid transparent',
    // borderRadius: 4,
    // '&:focus-visible': {
    //   // TODO: how to implement inner stroke?
    //   outline: `2px solid ${theme.winUI.palette.focusStroke.outer}`,
    //   outlineOffset: 1,
    // },
    ...(variant === 'accent' && {
      color: theme.winUI.palette.textOnAccent.primary,
      backgroundColor: theme.winUI.palette.accentFill.default,
      '&:hover': {
        backgroundColor: theme.winUI.palette.accentFill.secondary,
      },
      '&:active': {
        color: theme.winUI.palette.textOnAccent.secondary,
        backgroundColor: theme.winUI.palette.accentFill.tertiary,
        borderColor: theme.winUI.palette.controlStroke.onAccentDefault,
      },
      '&:disabled': {
        color: theme.winUI.palette.textOnAccent.disabled,
        backgroundColor: theme.winUI.palette.accentFill.disabled,
        borderColor: 'transparent',
      },
    }),
    ...(variant === 'standard' && {
      color: theme.winUI.palette.text.primary,
      backgroundColor: theme.winUI.palette.controlFill.default,
      '&:hover': {
        backgroundColor: theme.winUI.palette.controlFill.secondary,
      },
      '&:active': {
        color: theme.winUI.palette.text.secondary,
        backgroundColor: theme.winUI.palette.controlFill.tertiary,
        borderColor: theme.winUI.palette.controlStroke.default,
      },
      '&:disabled': {
        color: theme.winUI.palette.text.disabled,
        backgroundColor: theme.winUI.palette.controlFill.disabled,
        borderColor: theme.winUI.palette.controlStroke.default,
      },
    }),
  };
});

export default Button;
