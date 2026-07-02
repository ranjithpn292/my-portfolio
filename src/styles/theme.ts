export const theme = {
  colors: {
    background: "#09090B",
    surface: "#18181B",
    card: "#20232A",

    primary: "#7C3AED",
    secondary: "#38BDF8",

    text: "#FFFFFF",
    textSecondary: "#94A3B8",

    border: "#2E2E38",

    success: "#22C55E"
  },

  fonts: {
    heading: "'Poppins', sans-serif",
    body: "'Inter', sans-serif"
  },

  shadows: {
    card: "0 15px 40px rgba(0,0,0,.35)"
  },

  radius: {
    lg: "24px",
    md: "16px",
    sm: "10px"
  },

  transition: "all .35s ease"
};

export type AppTheme = typeof theme;