
import { Stack, useNavigation } from 'expo-router';
import { useEffect } from 'react';
export default function RootLayout() {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.navigate('LoginApp');
  }, [])
  return (
    <Stack>
      <Stack.Screen name="LoginApp" options={{ title: 'Login', headerShown: false }} />
      <Stack.Screen name="RegisterApp" options={{ title: 'Sign up' }} />
      <Stack.Screen name="ConfirmApp" options={{ title: 'Enviar alerta' }} />
      <Stack.Screen name="(home)" options={{ title: 'Sarue' }} />
    </Stack>
  );

}
