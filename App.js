import { Text } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Ionicons} from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import WelcomeScreen from './screens/WelcomeScreen'
import UserScreen from './screens/UserScreen'

const Drawer = createDrawerNavigator();
const BottomTap = createBottomTabNavigator();

export default function App() {
  //this makes the first screen 'User'
  //the headerTintColor is basically the writing on the header
  //Navigator passes down the color and size values to Screen
  return (
    // This is for the Drawer Navigator
    //<NavigationContainer>
    //  <Drawer.Navigator initialRouteName='User' screenOptions={{
    //      headerStyle: {backgroundColor: '#3c0a6b'},
    //      headerTintColor: 'white',
    //      drawerActiveBackgroundColor: '#f0e1ff',
    //      drawerActiveTintColor: '#4c0a6b',
    //  }}>
    //    <Drawer.Screen name="Welcome" component={WelcomeScreen} options={{
    //      drawerLabel: 'Welcome Screen',
    //      drawerIcon: ({color, size}) => 
    //        <Ionicons name="home" color={color} size={size}/>
    //    }}
    //    />
    //    <Drawer.Screen name="User" component={UserScreen} options={{
    //      drawerIcon: ({color, size}) => (
    //        <Ionicons name="person" color={color} size={size}/>
    //      )
    //    }}/>
    //  </Drawer.Navigator>

    //This is for Bottom Navigator
    //</NavigationContainer>
      <NavigationContainer>
        <BottomTap.Navigator initialRouteName='User' screenOptions={{
          headerStyle: {backgroundColor: '#3c0a6b'},
          headerTintColor: 'white',
          tabBarActiveTintColor: '#3c0a6b'
      }}>
          <BottomTap.Screen name="Welcome" component={WelcomeScreen} options={{
            tabBarIcon: ({color, size}) => <Ionicons name="home" color={color} size={size}/>
          }}
          />
          <BottomTap.Screen name="User" component={UserScreen} options={{
            tabBarIcon: ({color, size}) => <Ionicons name="person" color={color} size={size}/>
          }}/>
      </BottomTap.Navigator>
    </NavigationContainer>
  );
}
