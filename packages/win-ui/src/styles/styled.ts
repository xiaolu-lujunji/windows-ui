import { createStyled, shouldForwardProp } from '@mui/system';
import defaultTheme from './default-theme';

export const rootShouldForwardProp = (prop: PropertyKey) =>
  shouldForwardProp(prop) && prop !== 'classes';

const styled = createStyled({
  defaultTheme,
  rootShouldForwardProp,
});

export default styled;
