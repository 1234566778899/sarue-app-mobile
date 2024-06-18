import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';
import { CONFIG } from '../../config';
import { useNavigation } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function suggestions() {
    const navigation = useNavigation();
    const [description, setdescription] = useState('');
    const [typeSelected, setTypeSelected] = useState('')
    const sendSugg = async () => {
        const token = await AsyncStorage.getItem('token');
        if (!token) {
            navigation.navigate('login');
        }
        if (typeSelected == '' || description == '') return;
        axios.post(`${CONFIG.uri}/suggestions/register`, { category: typeSelected, description, user: token })
            .then(x => {
                navigation.navigate('home');
                alert('La sugerencia se envio correctamente')

            }).catch(error => {
                console.log(error);
                alert('Ups, un error');
            })
    }
    const [suggs, setSuggs] = useState(['Mejoras en la interfaz de usuario (UI)', 'Nuevas funcionalidades', 'Corrección de errores', 'Optimización de rendimiento'])
    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flex: 1 }}>
                <View style={{ paddingHorizontal: 20 }}>
                    <Text
                        style={{ fontSize: 25, marginTop: 20, fontWeight: 'bold' }}>Enviar sugerencia</Text>
                    <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Seleccione el tipo de segurencia</Text>
                    <ScrollView>
                        {
                            suggs.map(x => (
                                <TouchableOpacity
                                    onPress={() => setTypeSelected(x)}
                                    key={x} style={{ padding: 15, marginTop: 10, backgroundColor: `${typeSelected == x ? 'black' : '#EDEBEB'}` }}>
                                    <Text style={{ color: `${typeSelected == x ? 'white' : 'black'}` }}>{x}</Text>
                                </TouchableOpacity>
                            ))
                        }
                    </ScrollView>
                    <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Descripción:</Text>
                    <TextInput
                        onChangeText={text => setdescription(text)}
                        numberOfLines={5} style={{ backgroundColor: '#EDEBEB', padding: 10, marginTop: 10 }} multiline textAlignVertical='top' />
                </View>
                <View style={{ paddingHorizontal: 20, width: '100%', marginTop: 30 }}>
                    <TouchableOpacity
                        onPress={() => sendSugg()}
                        style={{ backgroundColor: 'black', paddingVertical: 15, borderRadius: 5 }}>
                        <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold' }}>Enviar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={{ backgroundColor: '#888888', marginTop: 5, paddingVertical: 15, borderRadius: 5 }}>
                        <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold' }}>Volver</Text>
                    </TouchableOpacity>
                </View>
            </View >
        </ScrollView>
    )
}