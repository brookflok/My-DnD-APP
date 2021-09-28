import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Platform } from 'react-native'
import Colors from '../constants/Colors'
import HomeScreen from '../screens/HomeScreen'
import SpellDetailScreen from '../screens/SpellDetailScreen'

const OrdersStackNavigation = props => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator screenOptions={{
            headerStyle:{
                backgroundColor: Platform.OS ==="android" ? Colors.primaryColor : '#fff'
            },
            headerTitleStyle:{
                color:Platform.OS ==="android" ? '#fff' : Colors.primaryColor
            },
            headerTintColor: Platform.OS ==="android" ? '#fff' :Colors.primaryColor
            
        }}>
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name ='Spell' component={SpellDetailScreen} />
        </Stack.Navigator>
    )
}

export default OrdersStackNavigation