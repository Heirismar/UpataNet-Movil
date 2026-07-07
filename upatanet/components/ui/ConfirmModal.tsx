import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { BlurView } from 'expo-blur';
import { UpatanetColors } from '@/constants/upatanet-theme';

interface ConfirmModalProps {
  visible: boolean;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  confirmColor?: string;
  cancelColor?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export function ConfirmModal({
  visible,
  message,
  confirmLabel = 'Sí',
  cancelLabel = 'No',
  confirmColor = UpatanetColors.primary,
  cancelColor = UpatanetColors.modalButtonGray,
  onConfirm,
  onCancel,
}: ConfirmModalProps) {
  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onCancel}>
      <BlurView intensity={30} style={styles.overlay}>
        <View style={styles.modalBox}>
          <Text style={styles.message}>{message}</Text>
          <View style={styles.buttonRow}>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel={confirmLabel}
              onPress={onConfirm}
              style={[styles.button, { backgroundColor: confirmColor }]}
            >
              <Text style={styles.buttonText}>{confirmLabel}</Text>
            </Pressable>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel={cancelLabel}
              onPress={onCancel}
              style={[styles.button, { backgroundColor: cancelColor }]}
            >
              <Text style={styles.buttonText}>{cancelLabel}</Text>
            </Pressable>
          </View>
        </View>
      </BlurView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalBox: {
    width: 291,
    height: 297,
    borderRadius: 20,
    backgroundColor: UpatanetColors.modalBg,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  message: {
    color: UpatanetColors.textInverse,
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'center',
    marginBottom: 30,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 32,
  },
  button: {
    width: 100,
    height: 35,
    borderRadius: 17.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
});
