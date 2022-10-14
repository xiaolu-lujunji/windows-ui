import React from 'react';
import styled from '../styles/styled';

const ListRoot = styled('ul', {
  name: 'WinUIList',
  slot: 'Root',
})({
  display: 'flex',
  flexDirection: 'column',
  minWidth: 280,
  padding: '4px 0px',
  margin: 0,
});

export interface ListProps extends React.HTMLAttributes<HTMLUListElement> {}

const List = React.forwardRef<HTMLUListElement, ListProps>(function (props, ref) {
  const { children, ...other } = props;

  return (
    <ListRoot ref={ref} {...other}>
      {children}
    </ListRoot>
  );
});

export default List;
