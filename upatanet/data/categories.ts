import { MaterialIcons } from '@expo/vector-icons';
import { UpatanetColors } from '@/constants/upatanet-theme';

export type CategoryId = 'salud' | 'insumos' | 'naturaleza' | 'alertas';

export interface Category {
  id: CategoryId;
  label: string;
  color: string;
  iconName: keyof typeof MaterialIcons.glyphMap;
}

export const CATEGORIES: Category[] = [
  { id: 'salud', label: 'Salud', color: UpatanetColors.categorySalud, iconName: 'water-drop' },
  { id: 'insumos', label: 'Insumos', color: UpatanetColors.categoryInsumos, iconName: 'inventory' },
  { id: 'naturaleza', label: 'Naturaleza', color: UpatanetColors.categoryNaturaleza, iconName: 'eco' },
  { id: 'alertas', label: 'Alertas', color: UpatanetColors.categoryAlertas, iconName: 'warning' },
] as const;
