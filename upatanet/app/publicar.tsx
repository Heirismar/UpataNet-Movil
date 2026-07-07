import { useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { UpatanetColors } from '@/constants/upatanet-theme';
import { CATEGORIES, type CategoryId } from '@/data/categories';
import { CategoryChip } from '@/components/CategoryChip';
import { ConfirmModal } from '@/components/ui/ConfirmModal';

export default function PublicarScreen() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [selected, setSelected] = useState<CategoryId | null>(null);
  const [errors, setErrors] = useState<{ title?: boolean; body?: boolean; category?: boolean }>({});
  const [modalPublicar, setModalPublicar] = useState(false);
  const [modalSalir, setModalSalir] = useState(false);

  function handleSubmit() {
    const newErrors: { title?: boolean; body?: boolean; category?: boolean } = {};
    if (title.trim().length === 0) newErrors.title = true;
    if (body.trim().length === 0) newErrors.body = true;
    if (selected === null) newErrors.category = true;
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      Keyboard.dismiss();
      setModalPublicar(true);
    }
  }

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.flex}
      >
        <View style={styles.header}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Cerrar"
            hitSlop={{ top: 8, right: 8, bottom: 8, left: 8 }}
            onPress={() => setModalSalir(true)}
          >
            <MaterialIcons name="close" size={24} color={UpatanetColors.textDark} />
          </Pressable>
          <Text style={styles.headerTitle}>Nueva publicación</Text>
          <View style={styles.headerSpacer} />
        </View>

        <ScrollView style={styles.flex} contentContainerStyle={styles.scrollContent}>
          <View>
            <Text style={styles.label}>Título</Text>
            <TextInput
              style={styles.input}
              placeholder="Escriba el título..."
              placeholderTextColor={UpatanetColors.placeholderText}
              value={title}
              onChangeText={t => { setTitle(t); if (errors.title) setErrors(prev => ({ ...prev, title: false })); }}
              returnKeyType="next"
              blurOnSubmit={false}
            />
            {errors.title && <Text style={styles.error}>Campo obligatorio</Text>}
          </View>

          <View>
            <Text style={styles.label}>Cuerpo del reporte</Text>
            <TextInput
              style={[styles.input, styles.bodyInput]}
              placeholder="Escriba el cuerpo del reporte..."
              placeholderTextColor={UpatanetColors.placeholderText}
              value={body}
              onChangeText={b => { setBody(b); if (errors.body) setErrors(prev => ({ ...prev, body: false })); }}
              multiline
              textAlignVertical="top"
            />
            {errors.body && <Text style={styles.error}>Campo obligatorio</Text>}
          </View>

          <Text style={styles.label}>Categoría</Text>
          <View style={styles.chipRow}>
            {CATEGORIES.map(c => (
              <CategoryChip
                key={c.id}
                category={c}
                selected={selected === c.id}
                onPress={id => { setSelected(id); if (errors.category) setErrors(prev => ({ ...prev, category: false })); }}
              />
            ))}
          </View>
          {errors.category && <Text style={styles.error}>Seleccione una categoría</Text>}
        </ScrollView>

        <View style={styles.footer}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Publicar"
            style={styles.submitBtn}
            onPress={handleSubmit}
          >
            <Text style={styles.submitText}>Publicar</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>

      <ConfirmModal
        visible={modalPublicar}
        message="¿Está seguro de que quiere hacer la publicación de esta noticia?"
        confirmColor={UpatanetColors.primary}
        cancelColor={UpatanetColors.modalButtonGray}
        onConfirm={() => router.back()}
        onCancel={() => setModalPublicar(false)}
      />

      <ConfirmModal
        visible={modalSalir}
        message="¿Está seguro de que quiere cancelar la publicación de esta noticia?"
        confirmColor={UpatanetColors.primaryDark}
        cancelColor={UpatanetColors.success}
        onConfirm={() => router.back()}
        onCancel={() => setModalSalir(false)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: UpatanetColors.background,
  },
  flex: {
    flex: 1,
  },
  header: {
    height: 66,
    backgroundColor: UpatanetColors.surfaceTop,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 22,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontFamily: 'serif',
    fontWeight: 'bold',
    fontSize: 18,
    color: UpatanetColors.textDark,
  },
  headerSpacer: {
    width: 24,
  },
  scrollContent: {
    padding: 22,
    gap: 16,
  },
  label: {
    fontSize: 10,
    color: UpatanetColors.placeholderText,
    marginBottom: 4,
  },
  input: {
    borderRadius: 12,
    backgroundColor: UpatanetColors.chipBg,
    padding: 12,
    fontSize: 14,
    color: UpatanetColors.textDark,
  },
  bodyInput: {
    minHeight: 120,
  },
  error: {
    color: UpatanetColors.primary,
    fontSize: 11,
    marginTop: 4,
  },
  chipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  footer: {
    padding: 22,
    alignItems: 'center',
  },
  submitBtn: {
    width: 255,
    height: 47,
    borderRadius: 23.5,
    backgroundColor: UpatanetColors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
