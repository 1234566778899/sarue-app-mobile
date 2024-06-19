import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';

export default function index() {
    const navigation = useNavigation();
    const sendAlert = async (incidence) => {
        navigation.navigate('ConfirmApp', { incidence })
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>SARUE</Text>
            <Text style={styles.subtitle}>Incidencias</Text>
            <View style={styles.iconsContainer}>
                <TouchableOpacity
                    onPress={() => sendAlert('ambulancia')}
                    style={styles.iconBox}>
                    <MaterialCommunityIcons name="ambulance" size={50} color="white" />
                    <Text style={styles.iconText}>Ambulancia</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => sendAlert('policia')}
                    style={styles.iconBox}>
                    <MaterialCommunityIcons name="police-badge" size={50} color="white" />
                    <Text style={styles.iconText}>Policía</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity
                    onPress={() => sendAlert('bomberos')}
                    style={styles.iconBox}>
                    <MaterialCommunityIcons name="fire-truck" size={50} color="white" />
                    <Text style={styles.iconText}>Bomberos</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 40,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 50,
        textAlign: 'center',
    },
    iconsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30,
    },
    iconBox: {
        backgroundColor: '#3d3d3d',
        borderRadius: 10,
        padding: 20,
        margin: 10,
        alignItems: 'center',
        width: 150
    },
    iconText: {
        color: 'white',
        marginTop: 10,
        fontSize: 16,
    },
    tabBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'lightgray',
        paddingVertical: 10,
    },
    tab: {
        alignItems: 'center',
    },
    tabText: {
        fontSize: 12,
    },
});