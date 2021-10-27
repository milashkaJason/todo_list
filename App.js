import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainPage from "./pages/main/MainPage";


export default function App() {
const Stack = createNativeStackNavigator();



    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={MainPage} />
                <Stack.Screen name="Home1" component={MainPage} />
                <Stack.Screen name="Home2" component={MainPage} />
            </Stack.Navigator>

        </NavigationContainer>
    );
}

