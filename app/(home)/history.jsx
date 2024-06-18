import { View, Text, ScrollView } from 'react-native'
import React from 'react'

export default function history() {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ paddingHorizontal: 20 }}>
                <Text style={{ fontSize: 25, marginTop: 20, marginBottom: 10, fontWeight: 'bold' }}>Historial de Incidencias</Text>
                <View style={{ backgroundColor: '#F9F6FF', marginTop: 10, padding: 10, borderRadius: 10 }}>
                    <Text style={{ fontSize: 18 }}>Ava Skylark</Text>
                    <Text style={{ fontWeight: 'bold', marginTop: 10 }}>Av. Republica 234, San Isidro</Text>
                </View>
                <View style={{ backgroundColor: '#F9F6FF', marginTop: 10, padding: 10, borderRadius: 10 }}>
                    <Text style={{ fontSize: 18 }}>Ava Skylark</Text>
                    <Text style={{ fontWeight: 'bold', marginTop: 10 }}>Av. Republica 234, San Isidro</Text>
                </View>
                <View style={{ backgroundColor: '#F9F6FF', marginTop: 10, padding: 10, borderRadius: 10 }}>
                    <Text style={{ fontSize: 18 }}>Ava Skylark</Text>
                    <Text style={{ fontWeight: 'bold', marginTop: 10 }}>Av. Republica 234, San Isidro</Text>
                </View>
                <View style={{ backgroundColor: '#F9F6FF', marginTop: 10, padding: 10, borderRadius: 10 }}>
                    <Text style={{ fontSize: 18 }}>Ava Skylark</Text>
                    <Text style={{ fontWeight: 'bold', marginTop: 10 }}>Av. Republica 234, San Isidro</Text>
                </View>
                <View style={{ backgroundColor: '#F9F6FF', marginTop: 10, padding: 10, borderRadius: 10 }}>
                    <Text style={{ fontSize: 18 }}>Ava Skylark</Text>
                    <Text style={{ fontWeight: 'bold', marginTop: 10 }}>Av. Republica 234, San Isidro</Text>
                </View>
            </View>
        </ScrollView>

    )
}