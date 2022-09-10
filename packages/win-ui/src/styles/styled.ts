import createStyled, { shouldForwardProp } from '@mui/system/createStyled';
import defaultTheme from './defaultTheme';

export const rootShouldForwardProp = (prop: PropertyKey) =>
  shouldForwardProp(prop) && prop !== 'classes';

const styled = createStyled({
  defaultTheme,
  rootShouldForwardProp,
});

export default styled;
