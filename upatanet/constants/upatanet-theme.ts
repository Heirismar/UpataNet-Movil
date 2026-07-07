import { Platform } from 'react-native';

export const UpatanetColors = {
  background: '#F2ECE0',
  surfaceTop: '#F6F0E3',
  surfaceAlt: '#FCFCFF',
  primary: '#C43B26',
  primaryDark: '#E3361C',
  chipBg: '#DFDAD0',
  chipBgActive: 'rgba(197,171,146,0.6)',
  textDark: '#1C1C1E',
  textInverse: '#F2ECE0',
  modalBg: '#1C1C1E',
  modalButtonGray: '#3A3A3C',
  success: '#3E9558',
  categorySalud: '#C43B26',
  categoryInsumos: '#1D4E89',
  categoryNaturaleza: '#3B6E4A',
  categoryAlertas: '#E8A13C',
  borderSubtle: 'rgba(165,139,112,0.25)',
  placeholderText: '#8A8378',
} as const;

export const Fonts = Platform.select({
  ios: {
    sans: 'system-ui',
    serif: 'ui-serif',
    rounded: 'ui-rounded',
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
