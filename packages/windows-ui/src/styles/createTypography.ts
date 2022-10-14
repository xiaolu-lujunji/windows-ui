export interface Typography {
  body: React.CSSProperties;
}

export default function createTypography(): Typography {
  return {
    body: {
      fontFamily: 'Segoe UI Variable',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '20px',
    },
  };
}
