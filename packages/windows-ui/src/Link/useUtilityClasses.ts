import { unstable_composeClasses as composeClasses } from '@mui/base';
import { getLinkUtilityClass } from './linkClasses';

const useUtilityClasses = (ownerState: { disabled: boolean }) => {
  const { disabled } = ownerState;

  const slots = {
    root: [disabled && 'disabled'],
  };

  return composeClasses(slots, getLinkUtilityClass, {});
};

export default useUtilityClasses;
