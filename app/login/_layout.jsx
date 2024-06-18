import { AntDesign, Entypo } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from 'expo-router';
import { CONFIG } from '../../config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'
export default function LoginLayout() {
  const navigation = useNavigation();
  const [cellphone, setCellphone] = useState('')
  const [password, setpassword] = useState('')
  const login = () => {
    axios.post(`${CONFIG.uri}/users/login`, { cellphone, password })
      .then(res => {
        AsyncStorage.setItem('token', res.data.token)
        navigation.navigate('home');
      })
      .catch(error => {
        console.log(error)

        alert('Credenciales inválidas');
      })
  }
  // useEffect(() => {

  //   navigation.navigate('confirm');
  // }, [])

  return (
    <View style={{ flex: 1, backgroundColor: 'white', paddingHorizontal: 20 }}>
      <Text style={{ fontSize: 40, fontWeight: 'bold', textAlign: 'center', marginTop: 40 }}>Iniciar sesión</Text>
      <View style={{ marginTop: 50 }}>
        <Text>Número de telefono</Text>
        <TextInput
          onChangeText={text => setCellphone(text)}
          style={{ borderBottomWidth: 0.5, borderColor: 'gray', padding: 5, borderRadius: 5 }} />
      </View>
      <View style={{ marginTop: 20 }}>
        <Text>Contraseña</Text>
        <TextInput
          onChangeText={text => setpassword(text)}
          secureTextEntry style={{ borderBottomWidth: 0.5, borderColor: 'gray', padding: 5, borderRadius: 5 }} />
      </View>
      <TouchableOpacity
        onPress={() => login()}
        style={{ backgroundColor: '#0BAB7C', paddingVertical: 15, borderRadius: 3, marginTop: 30 }}>
        <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold' }}>Entrar</Text>
      </TouchableOpacity>
      <Text style={{ textAlign: 'center', marginTop: 30 }}>O</Text>
      <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'center', gap: 20 }}>
        <TouchableOpacity style={{ borderWidth: 0.5, padding: 20, borderColor: '#0BAB7C', borderRadius: 10 }}>
          <Entypo name="facebook" size={30} color='#0BAB7C' />
        </TouchableOpacity>
        <TouchableOpacity style={{ borderWidth: 0.5, padding: 20, borderColor: '#0BAB7C', borderRadius: 10 }}>
          <AntDesign name="googleplus" size={30} color="#0BAB7C" />
        </TouchableOpacity>
        <TouchableOpacity style={{ borderWidth: 0.5, padding: 20, borderColor: '#0BAB7C', borderRadius: 10 }}>
          <Entypo name="instagram" size={30} color="#0BAB7C" />
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 25 }}>
        <Text >¿No tienes una cuenta </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('register')}
        >
          <Text style={{ color: '#0BAB7C', fontWeight: 'bold', paddingVertical: 10 }}>Crear cuenta</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Text style={{ textAlign: 'center', color: '#0BAB7C', fontWeight: 'bold', paddingVertical: 10 }}>¿Olvidaste tu contraseña?</Text>
      </TouchableOpacity>
    </View>
  );
}
