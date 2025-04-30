// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import Home from './screen/screen';
import Login from './screen/login';
import Feed from './screen/feed';
import Counter from './screen/counter';
import product from './screen/products';
import cadastro from './Register';

function BottomTabBar(){
  const BottomTabBar = createBottomTabNavigator();
  return(
<BottomTabBar.Navigator
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
  <BottomTabBar.Screen name='product' component={product} options={{
    tabBarIcon:() => (
      <MaterialIcons name="shopping-cart" size={40} color="white" />
    )
  }}/>

  <BottomTabBar.Screen name='Home' component={Home} options={{
    tabBarIcon:() => (
      <MaterialIcons name="home" size={40} color="white" />
    )
  }}/>

  <BottomTabBar.Screen name='Feed' component={Feed} options={{
    tabBarIcon:() => (
      <MaterialIcons name="feed" size={40} color="white" />
    )
  }}/>

  <BottomTabBar.Screen name='Counter' component={Counter} options={{
    tabBarIcon:() => (
      <MaterialIcons name="123" size={40} color="white" />
    )
  }}/>



</BottomTabBar.Navigator>
  )
}

export default function App() {
  const Stack = createStackNavigator();
  return (

    <NavigationContainer >
      <Stack.Navigator>
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Cadastro' component={cadastro}/>
      <Stack.Screen options={{headerShown:false}} name='Hometab' component={BottomTabBar}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}