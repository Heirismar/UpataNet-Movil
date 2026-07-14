import React, { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

// Make sure you have created the NewsCard component in your components folder
// as structured in the previous step!
import NewsCard from "@/components/NewsCard";

const BOTTOM_BAR_HEIGHT = 80;

export default function HomeScreen() {
  const router = useRouter();

  // Scroll Animation Logic
  const scrollY = useRef(new Animated.Value(0)).current;
  const diffClamp = Animated.diffClamp(scrollY, 0, BOTTOM_BAR_HEIGHT);
  const translateY = diffClamp.interpolate({
    inputRange: [0, BOTTOM_BAR_HEIGHT],
    outputRange: [0, BOTTOM_BAR_HEIGHT],
  });

  // Mock data for the news feed
  const newsData = [
    {
      id: "1",
      title: "Ola de paludismo en Hasupuwei",
      snippet:
        "Han aumentado considerablemente los contagios y afectados por el pal...",
      date: "17/03/26",
      category: "Salud",
      icon: "water",
      color: "#CC4B37",
    },
    {
      id: "2",
      title: "Llegaron insumos a Mahekoto-teri",
      snippet: "Entre los insumos que se recibieron están: mantas, cob...",
      date: "21/05/26",
      category: "Insum.",
      icon: "cube",
      color: "#2C5E8A",
    },
    {
      id: "3",
      title: "Tala de árboles cerca de Comun...",
      snippet:
        "Han aumentado considerablemente los contagios y afectados por el pal...",
      date: "17/03/26",
      category: "Natur.",
      icon: "leaf",
      color: "#4A7C59",
    },
    {
      id: "4",
      title: "Se esperan fuertes lluvias estos días",
      snippet:
        "Han aumentado considerablemente los contagios y afectados por el pal...",
      date: "17/03/26",
      category: "Clima",
      icon: "rainy",
      color: "#D98236",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Ionicons name="finger-print" size={32} color="#CC4B37" />
          <Text style={styles.headerTitle}>Upatanet</Text>
        </View>
        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="arrow-up" size={20} color="#FFF" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="pencil" size={20} color="#FFF" />
          </TouchableOpacity>
        </View>
      </View>

      {/* SCROLL VIEW (Animated) */}
      <Animated.ScrollView
        contentContainerStyle={styles.scrollContent}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true },
        )}
        scrollEventThrottle={16}
      >
        {newsData.map((item) => (
          <NewsCard
            key={item.id}
            title={item.title}
            snippet={item.snippet}
            date={item.date}
            category={item.category}
            categoryIcon={item.icon as any}
            titleColor={item.color}
            onPress={() => router.push(`/noticia`)}
          />
        ))}
      </Animated.ScrollView>

      {/* BOTTOM NAV BAR (Animated to hide on scroll) */}
      <Animated.View
        style={[styles.bottomBar, { transform: [{ translateY }] }]}
      >
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="home" size={24} color="#CC4B37" />
          <Text style={[styles.tabText, { color: "#CC4B37" }]}>Noticias</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="map-outline" size={24} color="#888" />
          <Text style={styles.tabText}>Mapa</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="settings-outline" size={24} color="#888" />
          <Text style={styles.tabText}>Configuración</Text>
        </TouchableOpacity>
      </Animated.View>
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
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  headerActions: {
    flexDirection: "row",
    gap: 10,
  },
  iconButton: {
    backgroundColor: "#CC4B37",
    padding: 8,
    borderRadius: 20,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: BOTTOM_BAR_HEIGHT + 20,
  },
  bottomBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: BOTTOM_BAR_HEIGHT,
    backgroundColor: "#F3EBE1",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#E6DFD5",
    paddingBottom: 20, // adjust for iOS safe area if needed
  },
  tabItem: {
    alignItems: "center",
  },
  tabText: {
    fontSize: 12,
    marginTop: 4,
    color: "#888",
  },
});
