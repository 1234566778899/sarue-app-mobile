
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="login" options={{ title: 'Login' }} />
      <Stack.Screen name="(home)" options={{ title: 'Sarue' }} />
      <Stack.Screen name="register" options={{ title: 'Sign up' }} />
      <Stack.Screen name="confirm" options={{ title: 'Enviar alerta' }} />
    </Stack>
  );
}
