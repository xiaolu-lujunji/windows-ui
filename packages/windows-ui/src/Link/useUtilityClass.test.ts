import useUtilityClasses from './useUtilityClasses';

describe('useUtilityClass', () => {
  test('disabled', () => {
    expect(useUtilityClasses({ disabled: true })).toEqual({ root: 'Mui-disabled' });
  });
});
