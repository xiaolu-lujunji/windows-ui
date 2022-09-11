import ToggleButtonBase, { toggleButtonClasses } from '@mui/material/ToggleButton';
import styled from '../styles/styled';
export type { ToggleButtonProps } from '@mui/material/ToggleButton';

const ToggleButton = styled(ToggleButtonBase, {
  name: 'WinUIToggleButton',
  slot: 'Root',
  overridesResolver: (props, styles) => [styles.root],
})(({ theme }) => ({
  minWidth: 120,
  padding: '5px 12px',
  ...theme.winUI.typography.body,
  textAlign: 'center',
  textTransform: 'none',
  // TODO: how to implement gradient rounded corners border?
  border: '1px solid transparent',
  borderRadius: 4,
  '&:focus-visible': {
    // TODO: how to implement inner stroke?
    outline: `2px solid ${theme.winUI.palette.focusStroke.outer}`,
    outlineOffset: 1,
  },
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
  [`&.${toggleButtonClasses.selected}`]: {
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
  },
}));

export default ToggleButton;
