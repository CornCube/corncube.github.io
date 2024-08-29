export const themes = {
  light: {
    background: "rgba(246,242,230,1)",
    foreground: "rgba(50,49,47,0.9)",
  },

  dark: {
    background: "rgba(32,32,32,1)",
    foreground: "rgba(43,45,51,0.9)",
  },
};

export type Theme = {
  background: string;
  foreground: string;
};

export type ThemeName = keyof typeof themes;
