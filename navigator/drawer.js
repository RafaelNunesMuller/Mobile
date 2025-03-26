// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './screen/screen';
import Login from './screen/login';

export default function Drawer() {
  const Drawer = createDrawerNavigator();
  return (

    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Login' component={Login}/>
        <Drawer.Screen name='Home' component={Home}/>
      </Drawer.Navigator>
    </NavigationContainer>

  );
}



