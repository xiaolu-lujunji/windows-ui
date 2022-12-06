import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export const getLinkUtilityClass = (slot: string) => generateUtilityClass('WuiLink', slot);

const linkClasses = generateUtilityClasses('WuiLink', ['disabled']);

export default linkClasses;
