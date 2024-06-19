
import { Stack } from 'expo-router';
export default function RootLayout() {
  return (
    <Stack initialRouteName='LoginApp'>
      <Stack.Screen name="LoginApp" options={{ title: 'Login' }} />
      <Stack.Screen name="RegisterApp" options={{ title: 'Sign up' }} />
      <Stack.Screen name="ConfirmApp" options={{ title: 'Enviar alerta' }} />
      <Stack.Screen name="(home)" options={{ title: 'Sarue' }} />
    </Stack>
  );

}
