import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function AlarmaScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push("/(tabs)")} accessibilityLabel="Volver" accessibilityRole="button" hitSlop={{ top: 8, right: 8, bottom: 8, left: 8 }}>
          <Ionicons name="arrow-back" size={24} color="#1C1C1E" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Alarma</Text>
        <View style={styles.spacer} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Alarma</Text>
        <Text style={styles.subtitle}>Próximamente</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F2ECE0" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 16,
    backgroundColor: "#F6F0E3",
  },
  headerTitle: { fontSize: 18, fontWeight: "bold", color: "#1C1C1E" },
  spacer: { width: 24 },
  content: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 20, fontWeight: "bold", color: "#1C1C1E", marginBottom: 8 },
  subtitle: { fontSize: 14, color: "#8A8378" },
});
