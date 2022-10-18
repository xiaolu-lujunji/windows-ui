import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export const getLinkUtilityClass = (slot: string) => generateUtilityClass('WuiLink', slot);

export const linkClasses = generateUtilityClasses('WuiLink', ['disabled']);
