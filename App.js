// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import Home from './screen/screen';
import Login from './screen/login';

export default function App() {
  const BottomTabBar = createBottomTabNavigator();
  return (

    <NavigationContainer >
      <BottomTabBar.Navigator 
      initialRouteName='Login'
      screenOptions={{
        tabBarActiveTintColor:'black',
        
        tabBarActiveBackgroundColor:'red',

        tabBarInactiveBackgroundColor:'blue',

        headerStyle: {
          backgroundColor: '#f4511e',
        },

        headerTintColor: '#fff',

        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      >
        <BottomTabBar.Screen name='Login' component={Login} options={{
          tabBarIcon:() => (
            <MaterialIcons name="login" size={40} color="white"/>
          ),
        }}/>
        <BottomTabBar.Screen name='Home' component={Home} options={{
          tabBarIcon:() => (
            <MaterialIcons name="home" size={40} color="white"  />
          )
        }}/>


      </BottomTabBar.Navigator>
    </NavigationContainer>

  );
}



