import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import SplashScreen from '../src/Screen/splashScreen/index';
import Login from '../src/Screen/Login/index';
function LoginNavigation() {
    return ( 
        <NavigationContainer>
            <Stack.Navigator initialRouteName='SplashScreen' 
            screenOptions={{
                headerShown: false
            }}
            >
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Splash" component={SplashScreen} />
            </Stack.Navigator>
    </NavigationContainer>
    )
}
export default LoginNavigation;