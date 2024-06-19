import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { CONFIG } from '../../config'
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment'
export default function history() {
    const [alerts, setAlerts] = useState(null);
    const getHistory = async () => {
        const token = await AsyncStorage.getItem('token');
        console.log(token)
        if (!token) {
            navigation.navigate('LoginApp');
        }
        axios.get(`${CONFIG.uri}/alerts/retrieve/${token}`)
            .then(res => {
                setAlerts(res.data);
            })
            .catch(error => {
                console.log(error);
                alert('Error on server');
            })
    }
    useEffect(() => {
        getHistory()
    }, [])
    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>

            <View style={{ paddingHorizontal: 20 }}>
                <Text style={{ fontSize: 25, marginTop: 20, marginBottom: 10, fontWeight: 'bold' }}>Historial de Incidencias</Text>
                {
                    alerts && alerts.length > 0 && alerts.map((x, index) => (
                        <View key={index} style={{ backgroundColor: '#F9F6FF', marginTop: 10, padding: 10, borderRadius: 10 }}>
                            <Text style={{ fontSize: 18 }}>{x.typeIncidence}</Text>
                            <Text style={{ fontWeight: 'bold', marginTop: 5 }}>{x.incidence}</Text>
                            <Text style={{ marginTop: 5 }}>{moment(x.createdAt).format('DD/MM/YYYY hh:mm:ss')}</Text>
                        </View>
                    ))
                }
            </View>
        </ScrollView>

    )
}