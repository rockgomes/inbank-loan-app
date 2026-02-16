export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '30px',
  '2xl': '40px',
  '3xl': '60px',
} as const;

export const borderRadius = {
  sm: '8px',
  md: '18px',
  lg: '30px',
  full: '100px',
} as const;

export const breakpoints = {
  mobile: '767px',
  desktop: '768px',
} as const;

export type Spacing = typeof spacing;
export type BorderRadius = typeof borderRadius;
export type Breakpoints = typeof breakpoints;
