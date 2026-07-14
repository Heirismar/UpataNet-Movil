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

export default function NoticiaScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="close" size={28} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Catalina Flores</Text>
        <View style={{ width: 28 }} /> {/* Spacer to center title */}
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.detailCard}>
          <Text style={styles.title}>Ola de paludismo en Hasupuwei</Text>
          <Text style={styles.bodyText}>
            Han aumentado considerablemente los contagios y afectados por el
            paludismo en la comuidad de Upata bro, qué más te puedo decir, ah
          </Text>

          {/* LIKES / DISLIKES */}
          <View style={styles.interactionRow}>
            <TouchableOpacity style={styles.reactionBtn}>
              <Ionicons name="thumbs-up-outline" size={24} color="#CC4B37" />
              <Text style={styles.reactionText}>15</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.reactionBtn}>
              <Ionicons name="thumbs-down-outline" size={24} color="#CC4B37" />
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
    backgroundColor: "#F3EBE1",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  content: {
    paddingHorizontal: 20,
  },
  detailCard: {
    backgroundColor: "#FAF5EE",
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: "#E6DFD5",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#CC4B37",
    marginBottom: 16,
  },
  bodyText: {
    fontSize: 15,
    color: "#333",
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
    color: "#CC4B37",
  },
});
