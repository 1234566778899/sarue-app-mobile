import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from 'react-native/Libraries/NewAppScreen'

export default function HomeLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: 'light',
                headerShown: false,
            }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Perfil',
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="suggestions"
                options={{
                    title: 'Sugerencias',
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon name={focused ? 'bulb' : 'bulb-outline'} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="history"
                options={{
                    title: 'Historial',
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon name={focused ? 'time' : 'time-outline'} color={color} />
                    ),
                }}
            />
        </Tabs>
    )
}