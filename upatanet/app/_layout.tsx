import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

const UpatanetTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#F2ECE0',
    card: '#F6F0E3',
    text: '#1C1C1E',
    border: '#DFDAD0',
    primary: '#C43B26',
    notification: '#C43B26',
  },
};

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  return (
    <ThemeProvider value={UpatanetTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="noticia" options={{ headerShown: false }} />
        <Stack.Screen name="publicar" options={{ presentation: 'modal', headerShown: false }} />
      </Stack>
      <StatusBar style="dark" />
    </ThemeProvider>
  );
}
