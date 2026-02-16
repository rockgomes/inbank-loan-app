export const colors = {
  primary: {
    nightViolet: "#21093A",
    white: "#FFFFFF",
  },
  secondary: {
    lightLavender: "#E3D2FF",
    lightLavenderLight: "#F5F0FF",
    almostWhite: "#F0F0EA",
  },
  grey: {
    grey2: "#606060",
    grey3: "#757575",
    grey4: "#DEDEDE",
  },
  background: {
    pampas: "#FBFAF9",
  },
  text: {
    tundora: "#413C3C",
  },
  status: {
    error: "#D64545",
    errorBackground: "#FDF2F2",
    success: "#10B981",
    successBackground: "#E8F8F3",
  },
} as const;

export type Colors = typeof colors;
