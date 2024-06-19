import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { CONFIG } from '../../config'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from 'expo-router';
export default function profile() {
    const [name, setName] = useState('')
    const [lname, setLname] = useState('')
    const [cellphone, setCellphone] = useState('')
    const [dni, setdni] = useState('')
    const [userId, setuserId] = useState('')
    const navigation = useNavigation();
    const getUser = async (req, res) => {
        const token = await AsyncStorage.getItem('token');
        if (!token) {
            navigation.navigate('LoginApp');
        }

        setuserId(token);
        axios.get(`${CONFIG.uri}/users/retrieve/${token}`)
            .then(x => {
                setName(x.data.name);
                setLname(x.data.lname);
                setCellphone(x.data.cellphone);
                setdni(x.data.dni);
            })
            .catch(error => {
                console.log(error);
            })
    }
    const updateUser = async (req, res) => {
        axios.post(`${CONFIG.uri}/users/update/${userId}`, { name, lname, cellphone, dni })
            .then(res => {
                alert('Usuario actualizado');
                navigation.navigate('home');
            })
            .catch(error => {
                console.log(error);
            })
    }
    useEffect(() => {
        getUser()
    }, [])

    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ paddingHorizontal: 20 }}>
                <Text style={{ fontSize: 25, fontWeight: 'bold', marginTop: 20 }}>Perfil</Text>
                <View style={{ marginTop: 30 }}>
                    <Text style={{ fontWeight: 'bold' }}>Nombre</Text>
                    <TextInput value={name} onChangeText={text => setName(text)} style={{ borderBottomColor: 'gray', borderBottomWidth: 0.5, paddingHorizontal: 5 }} />
                </View>
                <View style={{ marginTop: 30 }}>
                    <Text style={{ fontWeight: 'bold' }}>Apellido</Text>
                    <TextInput value={lname} onChangeText={text => setLname(text)} style={{ borderBottomColor: 'gray', borderBottomWidth: 0.5, paddingHorizontal: 5 }} />
                </View>
                <View style={{ marginTop: 30 }}>
                    <Text style={{ fontWeight: 'bold' }}>Celular</Text>
                    <TextInput value={cellphone} onChangeText={text => setCellphone(text)} style={{ borderBottomColor: 'gray', borderBottomWidth: 0.5, paddingHorizontal: 5 }} />
                </View>
                <View style={{ marginTop: 30 }}>
                    <Text style={{ fontWeight: 'bold' }}>DNI</Text>
                    <TextInput value={dni} onChangeText={text => setdni(text)} style={{ borderBottomColor: 'gray', borderBottomWidth: 0.5, paddingHorizontal: 5 }} />
                </View>
            </View>
            <View style={{ paddingHorizontal: 20, width: '100%', marginTop: 60 }}>
                <TouchableOpacity
                    onPress={() => updateUser()}
                    style={{ backgroundColor: 'black', paddingVertical: 15, borderRadius: 5 }}>
                    <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold' }}>Guardar cambios</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{ backgroundColor: '#888888', marginTop: 5, paddingVertical: 15, borderRadius: 5 }}>
                    <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold' }}>Volver</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}