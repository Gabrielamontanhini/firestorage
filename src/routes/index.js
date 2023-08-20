import React from "react"
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import { Entypo } from "@expo/vector-icons"
import HomePage from "../pages/HomePage";
import MainPage from "../pages/MainPage";

const Tab = createBottomTabNavigator();

export default function Routes() {
    return (
        <Tab.Navigator
        screenOptions={{
            style:{
                backgroundColor: '#121212',
                borderTopColor: 'transparent'
            },
            tabBarActiveTintColor:'#000',
            tabBarInactiveTintColor:'#DAD',
            tabBarStyle:{
                paddingBottom: 5,
                paddingTop: 5,
            }
        }}>
        <Tab.Screen
        name="HomePage"
        component={HomePage}
        options={{
            tabBarIcon: ({size , color })=> (
                <Entypo name="home" size={size} color={color}/>
            )
        }}
        />
        <Tab.Screen
        name="MainPage"
        component={MainPage}
        options={{
            tabBarIcon: ({size , color })=> (
                <Entypo name="tree" size={size} color={color}/>
            )
        }}
        />
        </Tab.Navigator>
    )
}