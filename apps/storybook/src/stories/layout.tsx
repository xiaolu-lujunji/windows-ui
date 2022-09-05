import React from 'react';
import styled from 'win-ui/styles/styled';
import ToggleButton from 'win-ui/toggle-button';

const LayoutRoot = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});

const ToolBarRoot = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
});

const ContentRoot = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
});

export default function Layout(props: { children?: React.ReactNode }) {
  const [zoom, setZoom] = React.useState(false);
  return (
    <LayoutRoot>
      <ToolBarRoot>
        <ToggleButton selected={!zoom} onClick={() => setZoom(!zoom)}>
          {zoom ? '重置' : '500%'}
        </ToggleButton>
      </ToolBarRoot>
      <ContentRoot style={{ zoom: zoom ? 5 : 1 }}>{props.children}</ContentRoot>
    </LayoutRoot>
  );
}
