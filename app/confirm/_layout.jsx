import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';
import { CONFIG } from '../../config';
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from 'expo-router';
import { useRoute } from '@react-navigation/native';
export default function _layout() {
    const route = useRoute();
    const navigation = useNavigation();
    const { incidence } = route.params;
    const [typeIncidence, setTypeIncidence] = useState(incidence);
    const types = {
        'ambulancia': ['Emergencias médicas', 'Translado urgente a unidades especializadas', 'Atención en situaciones de emergencia en eventos públicos'],
        'policia': ['Delito de robo', 'Incidente de armas', 'Disturbios y desordenes públicos', 'Control de tráfico/Seguridad en eventos'],
        'bomberos': ['Indencios', 'Rescata y salvamento', 'Incidentes por electricidad']
    }
    const sendIncidence = async (incidence) => {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') return;
        let location = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = location.coords;

        const token = await AsyncStorage.getItem('token');
        if (!token) {
            navigation.navigate('login');
        }
        Alert.alert(
            'Confirmar',
            '¿Estas seguro de enviar la alerta',
            [
                {
                    text: 'Cancelar',
                    onPress: () => { },
                    style: 'cancel'
                },
                {
                    text: 'Aceptar',
                    onPress: () => {
                        axios.post(`${CONFIG.uri}/alerts/send`, {
                            address: '', user: token, incidence, longitude, latitude, typeIncidence: typeIncidence
                        })
                            .then(x => {
                                alert('Alerta enviado correctamente')
                            })
                            .catch(error => {
                                console.log(error);
                                alert('Ha ocurrido un error');
                            })
                    },
                }
            ]
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'white', paddingHorizontal: 20 }}>
            <Text style={{ fontSize: 20, marginBottom: 30, textAlign: 'center', marginTop: 20 }}>Tipo de incidencia: {typeIncidence.toUpperCase()}</Text>
            {
                types[typeIncidence].map((x, index) => (
                    <TouchableOpacity onPress={() => sendIncidence(x)}
                        key={index} style={{ paddingVertical: 20, paddingHorizontal: 10, marginTop: 10, backgroundColor: '#EDEBEC', borderRadius: 5 }}>
                        <Text style={{ fontSize: 15 }}>{x}</Text>
                    </TouchableOpacity>
                ))
            }
        </View>
    )
}