// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './screen/screen';
import Login from './screen/login';

export default function App() {
  const BottomTabBar = createBottomTabNavigator();
  return (

    <NavigationContainer>
      <BottomTabBar.Navigator>
        <BottomTabBar.Screen name='Login' component={Login}/>
        <BottomTabBar.Screen name='Home' component={Home}/>


      </BottomTabBar.Navigator>
    </NavigationContainer>

  );
}



