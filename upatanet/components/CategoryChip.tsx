import { Pressable, StyleSheet, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import type { Category, CategoryId } from '@/data/categories';
import { UpatanetColors } from '@/constants/upatanet-theme';

interface CategoryChipProps {
  category: Category;
  selected: boolean;
  onPress: (id: CategoryId) => void;
}

export function CategoryChip({ category, selected, onPress }: CategoryChipProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={category.label}
      onPress={() => onPress(category.id)}
      style={({ pressed }) => [
        styles.chip,
        { backgroundColor: selected ? UpatanetColors.chipBgActive : UpatanetColors.chipBg },
        pressed && { opacity: 0.8 },
      ]}
    >
      <MaterialIcons name={category.iconName} size={18} color={category.color} />
      <Text style={[styles.label, { color: category.color }]}>{category.label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chip: {
    height: 41,
    borderRadius: 20.5,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
  },
});
