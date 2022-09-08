import React from 'react';
import Typography from '../typography';
import Accept from '../icons/accept';
import ChevronRightMed from '../icons/chevron-right-med';
import clsx from 'clsx';
import styled from '../styles/styled';
import { unstable_useForkRef as useForkRef } from '@mui/utils';

const ListItemRoot = styled('button', {
  name: 'WinUIListItem',
  slot: 'Root',
})<{
  ownerState: {
    selectType?: 'standard' | 'radio' | 'check';
    indented: boolean;
    cascading: boolean;
  };
}>(({ theme, ownerState }) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  minWidth: 150,
  height: 34,
  padding: '6px 11px 8px',
  margin: '3px 5px',
  color: theme.palette.text.primary,
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: 4,
  '&:hover': {
    backgroundColor: theme.palette.subtleFill.secondary,
    ...(ownerState.selectType === 'standard' && {
      '&.WinUI-selected': {
        backgroundColor: theme.palette.subtleFill.tertiary,
      },
    }),
  },
  '&:active': {
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.subtleFill.tertiary,
    ...(ownerState.selectType === 'standard' && {
      '&.WinUI-selected': {
        backgroundColor: theme.palette.subtleFill.secondary,
        '&::before': {
          position: 'absolute',
          top: 'calc(50% - 10px / 2)',
          left: 0,
          width: 3,
          height: 10,
          content: '""',
          backgroundColor: theme.palette.accentFill.default,
          borderRadius: 999,
        },
      },
    }),
    ...(ownerState.selectType === 'radio' && {
      '.WinUI-list-item-bullet::before': {
        backgroundColor: theme.palette.text.secondary,
      },
    }),
  },
  '&:disabled': {
    color: theme.palette.text.disabled,
    backgroundColor: 'transparent',
    '.WinUI-list-item-hint-text': {
      color: theme.palette.text.disabled,
    },
    ...(ownerState.selectType === 'standard' && {
      '&.WinUI-selected': {
        backgroundColor: theme.palette.subtleFill.secondary,
        '&::before': {
          position: 'absolute',
          top: 'calc(50% - 16px / 2)',
          left: 0,
          width: 3,
          height: 16,
          content: '""',
          backgroundColor: theme.palette.accentFill.disabled,
          borderRadius: 999,
        },
      },
    }),
    ...(ownerState.selectType === 'radio' && {
      '.WinUI-list-item-bullet::before': {
        backgroundColor: theme.palette.text.disabled,
      },
    }),
  },
  '&:focus-visible': {
    // TODO: how to implement inner stroke?
    outline: `2px solid ${theme.palette.focusStroke.outer}`,
    outlineOffset: 1,
  },
  ...(ownerState.indented && {
    paddingLeft: 39,
  }),
  ...(ownerState.cascading && {
    '&.WinUI-selected': {
      backgroundColor: theme.palette.subtleFill.secondary,
    },
  }),
  ...(ownerState.selectType === 'standard' && {
    '&.WinUI-selected': {
      backgroundColor: theme.palette.subtleFill.secondary,
      '&::before': {
        position: 'absolute',
        top: 'calc(50% - 16px / 2)',
        left: 0,
        width: 3,
        height: 16,
        content: '""',
        backgroundColor: theme.palette.accentFill.default,
        borderRadius: 999,
      },
    },
  }),
  ...(ownerState.selectType === 'radio' && {
    '.WinUI-list-item-bullet': {
      contentVisibility: 'hidden',
    },
    '&.WinUI-selected': {
      '.WinUI-list-item-bullet': {
        contentVisibility: 'visible',
      },
    },
  }),
  ...(ownerState.selectType === 'check' && {
    '.WinUI-list-item-accept': {
      width: 12,
      height: 12,
      marginRight: 14,
      contentVisibility: 'hidden',
    },
    '&.WinUI-selected': {
      '.WinUI-list-item-accept': {
        contentVisibility: 'visible',
      },
    },
  }),
}));

const ContentRoot = styled(Typography, {
  name: 'WinUIListItem',
  slot: 'Content',
})({
  flex: 1,
  textAlign: 'left',
});

const HintTextRoot = styled(Typography, {
  name: 'WinUIListItem',
  slot: 'HintText',
})(({ theme }) => ({
  fontSize: 12,
  lineHeight: 16,
  textAlign: 'right',
  color: theme.palette.text.secondary,
}));

const StartIconRoot = styled('span')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: 12,
});

const Bullet = styled('div')(({ theme }) => ({
  position: 'relative',
  width: 16,
  height: 16,
  marginRight: 12,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 6,
    left: 6,
    width: 4,
    height: 4,
    backgroundColor: theme.palette.text.primary,
    borderRadius: 999,
  },
}));

export interface ListItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Use to apply selected styling.
   * @default false
   */
  selected?: boolean;
  /**
   * The select type to use.
   * @default 'standard'
   */
  selectType?: 'standard' | 'radio' | 'check';
  /**
   * Used to align non selectable items in lists with selectable peer items.
   * @default false
   */
  indented?: boolean;
  /**
   * Use to apply cascading styling.
   * @default false
   */
  cascading?: boolean;
  /**
   * The hint text to use.
   */
  hintText?: string;
  /**
   * If `true`, the list item is focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   * @default false
   */
  autoFocus?: boolean;
  /**
   * Element placed before the children.
   */
  startIcon?: React.ReactNode;
}

const ListItem = React.forwardRef<HTMLButtonElement, ListItemProps>(function (props, ref) {
  const {
    selected = false,
    selectType = 'standard',
    indented = false,
    cascading = false,
    autoFocus = false,
    startIcon,
    hintText,
    className,
    children,
    ...other
  } = props;

  const listItemRef = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    if (autoFocus) {
      if (listItemRef.current) {
        listItemRef.current.focus();
      }
    }
  }, [autoFocus]);

  const handleRef = useForkRef(listItemRef, ref);

  const ownerState = {
    selectType,
    indented,
    cascading,
  };

  return (
    <ListItemRoot
      className={clsx(className, {
        'WinUI-selected': selected,
      })}
      ownerState={ownerState}
      ref={handleRef}
      {...other}
    >
      {selectType === 'radio' && <Bullet className="WinUI-list-item-bullet" />}
      {selectType === 'check' && <Accept className="WinUI-list-item-accept" />}
      {startIcon !== undefined && <StartIconRoot>{startIcon}</StartIconRoot>}
      <ContentRoot>{children}</ContentRoot>
      {cascading && <ChevronRightMed />}
      {!cascading && hintText !== undefined && (
        <HintTextRoot className="WinUI-list-item-hint-text">{hintText}</HintTextRoot>
      )}
    </ListItemRoot>
  );
});

export default ListItem;
