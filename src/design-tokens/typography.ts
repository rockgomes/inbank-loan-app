export const fontFamilies = {
  heading: '"Sebenta", serif',
  body: '"Inter", sans-serif',
} as const;

export const fontWeights = {
  regular: 400,
  medium: 500,
} as const;

export const fontSizes = {
  xs: '14px',
  sm: '16px',
  md: '18px',
  lg: '28px',
  xl: '48px',
} as const;

export const lineHeights = {
  xs: '20px',
  sm: '24px',
  md: '28px',
  lg: '30px',
  xl: '56px',
} as const;

export const typography = {
  h2: {
    fontFamily: fontFamilies.heading,
    fontSize: fontSizes.xl,
    lineHeight: lineHeights.xl,
    fontWeight: fontWeights.regular,
  },
  body18Regular: {
    fontFamily: fontFamilies.body,
    fontSize: fontSizes.md,
    lineHeight: lineHeights.md,
    fontWeight: fontWeights.regular,
  },
  body16Regular: {
    fontFamily: fontFamilies.body,
    fontSize: fontSizes.sm,
    lineHeight: lineHeights.sm,
    fontWeight: fontWeights.regular,
  },
  body16Medium: {
    fontFamily: fontFamilies.body,
    fontSize: fontSizes.sm,
    lineHeight: lineHeights.sm,
    fontWeight: fontWeights.medium,
  },
  body14Regular: {
    fontFamily: fontFamilies.body,
    fontSize: fontSizes.xs,
    lineHeight: lineHeights.xs,
    fontWeight: fontWeights.regular,
  },
  body14Medium: {
    fontFamily: fontFamilies.body,
    fontSize: fontSizes.xs,
    lineHeight: lineHeights.xs,
    fontWeight: fontWeights.medium,
  },
} as const;

export type Typography = typeof typography;
