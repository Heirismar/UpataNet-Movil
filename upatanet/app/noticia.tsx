import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Colors } from "@/constants/theme";

const C = Colors.light;

export default function NoticiaScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="close" size={28} color={C.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Catalina Flores</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.detailCard}>
          <Text style={styles.title}>Ola de paludismo en Hasupuwei</Text>
          <Text style={styles.bodyText}>
            Han aumentado considerablemente los contagios y afectados por el
            paludismo en la comuidad de Upata bro, qué más te puedo decir, ah
          </Text>

          <View style={styles.interactionRow}>
            <TouchableOpacity style={styles.reactionBtn}>
              <Ionicons name="thumbs-up-outline" size={24} color={C.primary} />
              <Text style={styles.reactionText}>15</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.reactionBtn}>
              <Ionicons name="thumbs-down-outline" size={24} color={C.primary} />
              <Text style={styles.reactionText}>01</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: C.background,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
    backgroundColor: C.surfaceTop,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: C.text,
  },
  headerSpacer: {
    width: 28,
  },
  content: {
    paddingHorizontal: 20,
  },
  detailCard: {
    backgroundColor: C.surfaceAlt,
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: C.chipBg,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: C.primary,
    marginBottom: 16,
  },
  bodyText: {
    fontSize: 15,
    color: C.text,
    lineHeight: 22,
    marginBottom: 30,
  },
  interactionRow: {
    flexDirection: "row",
    gap: 30,
  },
  reactionBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  reactionText: {
    fontSize: 16,
    fontWeight: "600",
    color: C.primary,
  },
});
