import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'

export default function RegisterLayout() {
    const navigation = useNavigation();
    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ paddingHorizontal: 20 }}>
                <Text style={{ fontSize: 40, fontWeight: 'bold', textAlign: 'center', marginTop: 20 }}>Crear cuenta</Text>
                <View style={{ marginTop: 20 }}>
                    <Text>Nombre</Text>
                    <TextInput style={{ borderBottomWidth: 0.5, borderColor: 'gray', padding: 5, borderRadius: 5 }} />
                </View>
                <View style={{ marginTop: 20 }}>
                    <Text>Apellido</Text>
                    <TextInput style={{ borderBottomWidth: 0.5, borderColor: 'gray', padding: 5, borderRadius: 5 }} />
                </View>
                <View style={{ marginTop: 20 }}>
                    <Text>DNI</Text>
                    <TextInput style={{ borderBottomWidth: 0.5, borderColor: 'gray', padding: 5, borderRadius: 5 }} />
                </View>
                <View style={{ marginTop: 20 }}>
                    <Text>Número de telefono</Text>
                    <TextInput style={{ borderBottomWidth: 0.5, borderColor: 'gray', padding: 5, borderRadius: 5 }} />
                </View>
                <View style={{ marginTop: 20 }}>
                    <Text>Contraseña</Text>
                    <TextInput secureTextEntry style={{ borderBottomWidth: 0.5, borderColor: 'gray', padding: 5, borderRadius: 5 }} />
                </View>
                <TouchableOpacity style={{ backgroundColor: '#0BAB7C', paddingVertical: 15, borderRadius: 3, marginTop: 30 }}>
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