import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { UpatanetColors } from '@/constants/upatanet-theme';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <View style={styles.isotipo}>
          <Text style={styles.isotipoText}>U</Text>
        </View>
        <Text style={styles.title}>Upatanet</Text>
        <Pressable accessibilityRole="button" accessibilityLabel="Subir" style={styles.uploadBtn}>
          <MaterialIcons name="upload" size={18} color="#fff" />
        </Pressable>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Publicar noticia"
          style={styles.editBtn}
          onPress={() => router.push('/publicar')}
        >
          <MaterialIcons name="edit" size={18} color="#fff" />
        </Pressable>
      </View>
      <View style={styles.body}>
        <Text style={styles.feedText}>Feed próximamente</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: UpatanetColors.background,
  },
  header: {
    height: 66,
    backgroundColor: UpatanetColors.surfaceTop,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 22,
  },
  isotipo: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: UpatanetColors.chipBgActive,
    alignItems: 'center',
    justifyContent: 'center',
  },
  isotipoText: {
    color: UpatanetColors.categoryInsumos,
    fontWeight: 'bold',
    fontSize: 16,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontFamily: 'serif',
    fontWeight: 'bold',
    fontSize: 18,
    color: UpatanetColors.textDark,
  },
  uploadBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: UpatanetColors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  editBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: UpatanetColors.chipBgActive,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  feedText: {
    fontSize: 16,
    color: UpatanetColors.placeholderText,
  },
});
