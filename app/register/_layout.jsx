import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from 'expo-router'
import axios from 'axios'
import { CONFIG } from '../../config';
export default function RegisterLayout() {
    const navigation = useNavigation();
    const [name, setname] = useState('')
    const [lname, setlname] = useState('')
    const [dni, setdni] = useState('')
    const [cellphone, setcellphone] = useState('')
    const [passsword, setpassword] = useState('')

    const isValid = (name, input, min, max) => {
        if (input.trim().length <= 0) {
            alert(`Debe llenar el campo ${name}`);
            return false;
        }
        if (input.length < min || input.length > max) {
            alert(`Cantidad de caracteres no permitido: ${name}`)
            return false;
        }
        return true;
    }
    const registerUser = () => {

        if (!isValid('Nombre', name, 3, 20)) return;
        if (!isValid('Apellido', lname, 3, 20)) return;
        if (!isValid('Dni', dni, 3, 20)) return;
        if (!isValid('Telefono', cellphone, 9, 9)) return;
        if (!isValid('Password', passsword, 6, 20)) return;

        axios.post(`${CONFIG.uri}/users/register`, { name, lname, dni, cellphone, passsword })
            .then(x => {
                alert('Usuario registrado');
                navigation.navigate('login');
            })
            .catch(error => {
                console.log(error);
                if (error.response) {
                    alert(error.response.data.error);
                } else {
                    alert('Error on server');
                }
            })
    }
    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ paddingHorizontal: 20 }}>
                <Text style={{ fontSize: 40, fontWeight: 'bold', textAlign: 'center', marginTop: 20 }}>Crear cuenta</Text>
                <View style={{ marginTop: 20 }}>
                    <Text>Nombre</Text>
                    <TextInput
                        onChangeText={text => setname(text)}
                        style={{ borderBottomWidth: 0.5, borderColor: 'gray', padding: 5, borderRadius: 5 }} />
                </View>
                <View style={{ marginTop: 20 }}>
                    <Text>Apellido</Text>
                    <TextInput
                        onChangeText={text => setlname(text)}
                        style={{ borderBottomWidth: 0.5, borderColor: 'gray', padding: 5, borderRadius: 5 }} />
                </View>
                <View style={{ marginTop: 20 }}>
                    <Text>DNI</Text>
                    <TextInput
                        onChangeText={text => setdni(text)}
                        style={{ borderBottomWidth: 0.5, borderColor: 'gray', padding: 5, borderRadius: 5 }} />
                </View>
                <View style={{ marginTop: 20 }}>
                    <Text>Número de telefono</Text>
                    <TextInput
                        onChangeText={text => setcellphone(text)}
                        style={{ borderBottomWidth: 0.5, borderColor: 'gray', padding: 5, borderRadius: 5 }} />
                </View>
                <View style={{ marginTop: 20 }}>
                    <Text>Contraseña</Text>
                    <TextInput
                        onChangeText={text => setpassword(text)}
                        secureTextEntry style={{ borderBottomWidth: 0.5, borderColor: 'gray', padding: 5, borderRadius: 5 }} />
                </View>
                <TouchableOpacity
                    onPress={() => registerUser()}
                    style={{ backgroundColor: '#0BAB7C', paddingVertical: 15, borderRadius: 3, marginTop: 30 }}>
                    <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold' }}>Registrarse</Text>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 25 }}>
                    <Text >¿tienes una cuenta </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('(login)')}
                    >
                        <Text style={{ color: '#0BAB7C', fontWeight: 'bold', paddingVertical: 10 }}>Iniciar sesión</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}