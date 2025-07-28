import { webLightTheme } from '@fluentui/react-components';
import type { Theme } from '@fluentui/react-components';

export const customColors = {
  primaryRed: '#d4421a',
  primaryOrange: '#ff6b35',
  accentYellow: '#f7931e',
  warmCream: '#fdf6f0',
  darkBrown: '#8b4513',
  shadow: '0 8px 32px rgba(0, 0, 0, 0.25)'
};

export const gradientBackground = `linear-gradient(135deg, ${customColors.primaryRed} 0%, ${customColors.primaryOrange} 50%, ${customColors.accentYellow} 100%)`;

export const lightTheme: Theme = {
  ...webLightTheme,
  colorBrandBackground: customColors.primaryRed,
  colorNeutralBackground1: 'transparent',
  colorNeutralForeground1: customColors.darkBrown,
  shadow4: customColors.shadow,
  fontFamilyBase: 'Roboto, serif',
};
