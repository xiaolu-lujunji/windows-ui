export interface Shadows {
  flyout: string;
}

export const lightShadows: Shadows = {
  flyout: '0px 8px 16px rgba(0, 0, 0, 0.14)',
};

export const darkShadows: Shadows = {
  flyout: '0px 8px 16px rgba(0, 0, 0, 0.26)',
};

export default function createShadows(mode: 'light' | 'dark' = 'light'): Shadows {
  return mode === 'light' ? lightShadows : darkShadows;
}
