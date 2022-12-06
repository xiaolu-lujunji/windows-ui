import { createStyled, shouldForwardProp } from '@mui/system';
import defaultTheme from './defaultTheme';
import type { Theme } from './createTheme';

export const rootShouldForwardProp = (prop: PropertyKey) =>
  shouldForwardProp(prop) && prop !== 'classes';

const styled = createStyled<Theme>({
  defaultTheme,
  rootShouldForwardProp,
});

export default styled;
