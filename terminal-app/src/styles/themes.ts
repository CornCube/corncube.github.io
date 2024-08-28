export const themes = {
  light: {
    background: "rgba(246,242,230,255)",
    foreground: "rgba(50,49,47,255)",
  },

  dark: {
    background: "rgba(32,32,32,255)",
    foreground: "rgba(43,45,51,255)",
  },
};

export type ThemeName = keyof typeof themes;
