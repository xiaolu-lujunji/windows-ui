import React from 'react';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import FontIcon from '../FontIcon';
import clsx from 'clsx';
import styled from '../styles/styled';
import type { ButtonUnstyledProps } from '@mui/base/ButtonUnstyled';
import type { SxProps } from '@mui/system';
import type { Theme } from '../styles/createTheme';

const ListItemRoot = styled(ButtonUnstyled, {
  name: 'WuiListItem',
  slot: 'Root',
})<{ ownerState: { variant: 'standard' | 'cascading' | 'radio' | 'check'; hintText: boolean } }>(
  ({ ownerState, theme }) => ({
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 152,
    height: 36,
    padding: '8px 12px',
    ...theme.typography.body,
    color: theme.palette.text.primary,
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: 4,
    '&:hover': {
      backgroundColor: theme.palette.subtleFill.secondary,
    },
    '&:active': {
      color: theme.palette.text.secondary,
      backgroundColor: theme.palette.subtleFill.tertiary,

      ...(ownerState.variant === 'cascading' && {
        '& .WuiListItem-chevronRight': {
          color: theme.palette.text.tertiary,
        },
      }),
    },
    [`&.${buttonUnstyledClasses.disabled}`]: {
      color: theme.palette.text.disabled,
      backgroundColor: 'transparent',

      ...(ownerState.variant === 'cascading' && {
        '& .WuiListItem-chevronRight': {
          color: theme.palette.text.disabled,
        },
      }),

      ...(ownerState.hintText && {
        '& .WuiListItem-hintText': {
          color: theme.palette.text.disabled,
        },
      }),
    },
    '&.Wui-selected': {
      ...(ownerState.variant === 'standard' && {
        backgroundColor: theme.palette.subtleFill.secondary,
        '&::before': {
          content: '""',
          position: 'absolute',
          left: 0,
          top: 'calc(50% - 16px/2)',
          display: 'block',
          width: 3,
          height: 16,
          backgroundColor: theme.palette.accentFill.default,
          borderRadius: 1.5,
        },
      }),

      ...(ownerState.variant === 'cascading' && {
        backgroundColor: theme.palette.subtleFill.secondary,
      }),

      '&:hover': {
        ...(ownerState.variant === 'standard' && {
          backgroundColor: theme.palette.subtleFill.tertiary,
        }),
      },

      '&:active': {
        ...(ownerState.variant === 'standard' && {
          backgroundColor: theme.palette.subtleFill.secondary,
          '&::before': {
            height: 10,
            top: 'calc(50% - 10px/2)',
          },
        }),

        ...(ownerState.variant === 'cascading' && {
          color: theme.palette.text.primary,
          '& .WuiListItem-chevronRight': {
            color: theme.palette.text.secondary,
          },
        }),

        ...((ownerState.variant === 'radio' || ownerState.variant === 'check') && {
          '& .WuiListItem-icon': {
            color: theme.palette.text.secondary,
          },
        }),
      },

      [`&.${buttonUnstyledClasses.disabled}`]: {
        ...(ownerState.variant === 'standard' && {
          backgroundColor: theme.palette.subtleFill.secondary,
          '&::before': {
            height: 16,
            top: 'calc(50% - 16px/2)',
            backgroundColor: theme.palette.accentFill.disabled,
          },
        }),

        ...((ownerState.variant === 'radio' || ownerState.variant === 'check') && {
          backgroundColor: 'transparent',
          '& .WuiListItem-icon': {
            color: theme.palette.text.disabled,
          },
        }),

        ...(ownerState.hintText && {
          '& > .WuiListItem-hintText': {
            color: theme.palette.text.disabled,
          },
        }),
      },

      ...((ownerState.variant === 'radio' || ownerState.variant === 'check') && {
        '& .WuiListItem-IndentBox': {
          contentVisibility: 'visible',
        },
      }),
    },

    ...(ownerState.variant === 'cascading' && {
      '& .WuiListItem-chevronRight': {
        color: theme.palette.text.secondary,
      },
    }),

    ...((ownerState.variant === 'radio' || ownerState.variant === 'check') && {
      '& .WuiListItem-IndentBox': {
        contentVisibility: 'hidden',
      },
    }),
  }),
);

const Content = styled('div', {
  name: 'WuiListItem',
  slot: 'Content',
})({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
});

const HintText = styled('span', {
  name: 'WuiListItem',
  slot: 'HintText',
})(({ theme }) => ({
  ...theme.typography.caption,
  color: theme.palette.text.secondary,
}));

const IndentBox = styled('div', {
  name: 'WuiListItem',
  slot: 'IndentBox',
})({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 16,
  height: 16,
  marginRight: 12,
});

const ListItemStartIcon = styled('span', {
  name: 'WuiListItem',
  slot: 'StartIcon',
})({
  display: 'inherit',
  marginRight: 12,
});

export interface ListItemProps extends ButtonUnstyledProps {
  /**
   * The variant to use.
   * @default 'standard'
   */
  variant: 'standard' | 'cascading' | 'radio' | 'check';
  /**
   * Use to apply selected styling.
   * @default false
   */
  selected?: boolean;
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * The hint text to use.
   * @default undefined
   */
  hintText?: string;
  /**
   * If `true`, the component is indented.
   * @default false
   */
  indented?: boolean;
  /**
   * Element placed before the children.
   */
  startIcon?: React.ReactNode;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>;
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
}

const ListItem = React.forwardRef<HTMLButtonElement, ListItemProps>(function ListItem(props, ref) {
  const {
    variant = 'standard',
    startIcon: startIconProp,
    hintText: hintTextProp,
    selected = false,
    indented = false,
    disabled = false,
    className,
    children,
    ...other
  } = props;

  const ownerState = { variant, hintText: hintTextProp !== undefined };

  const hintText = variant !== 'cascading' && hintTextProp && (
    <HintText className="WuiListItem-hintText">{hintTextProp}</HintText>
  );

  const chevronRightMed = variant === 'cascading' && (
    <FontIcon className="WuiListItem-chevronRight" unicode="e974" fontSize="small" />
  );

  let iconUnicode = undefined;
  if (variant === 'radio') {
    iconUnicode = 'e915';
  } else if (variant === 'check') {
    iconUnicode = 'f78c';
  }
  const icon = iconUnicode && (
    <FontIcon className="WuiListItem-icon" unicode={iconUnicode} fontSize="small" />
  );

  const startIcon = startIconProp && <ListItemStartIcon>{startIconProp}</ListItemStartIcon>;

  return (
    <ListItemRoot
      ownerState={ownerState}
      disabled={disabled}
      className={clsx(className, {
        'Wui-selected': selected,
      })}
      ref={ref}
      {...other}
    >
      <Content>
        {(indented || iconUnicode) && (
          <IndentBox className="WuiListItem-IndentBox">{icon}</IndentBox>
        )}
        {startIcon}
        {children}
      </Content>
      {hintText}
      {chevronRightMed}
    </ListItemRoot>
  );
});

export default ListItem;
