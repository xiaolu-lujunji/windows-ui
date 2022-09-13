export interface FontStyle {
  fontFamily: React.CSSProperties['fontFamily'];
  fontSize: React.CSSProperties['fontSize'];
  lineHeight: React.CSSProperties['lineHeight'];
}

export interface Typography {
  body: FontStyle;
}

const typography: Typography = {
  body: {
    fontFamily: 'Segoe UI Variable',
    fontSize: 14,
    lineHeight: '20px',
  },
};

export default typography;
