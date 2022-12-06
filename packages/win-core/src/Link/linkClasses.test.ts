import linkClasses, { getLinkUtilityClass } from './linkClasses';

describe('linkClasses', () => {
  test('linkClasses.disabled', () => {
    expect(linkClasses.disabled).toBe('Mui-disabled');
  });

  test('getLinkUtilityClass', () => {
    expect(getLinkUtilityClass('disabled')).toBe('Mui-disabled');
  });
});
