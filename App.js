import Home from './screen/screen';
import Logi from './screen/login';
import { View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Home/>
      {/* <Logi/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})