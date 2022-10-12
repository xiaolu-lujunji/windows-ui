export interface WinUITypography {
  body: React.CSSProperties;
}

export default function createWinUITypography(): WinUITypography {
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
