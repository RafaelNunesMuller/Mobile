import {Text, View, StyleSheet, ImageBackground, TextInput, Button} from 'react-native';

export default function Login({navigation}){
    return(
        <View style={styles.container}>
            <ImageBackground style={{flex:1, width:'100%', height:'100%'}} source={require('../assets/troia.jpg')}>

            <Text style={styles.texto}>Epic the musical</Text>
           
                <TextInput
                     style={styles.barra}
                     placeholder='nome'
                />
        
                <TextInput
                    style={styles.barra}
                    placeholder='numero'
                />

                <Button
                    title='Login'
                    onPress={() => navigation.navigate('Home')}
                />
               
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },

    texto:{
        flex:3,
        textAlign:'center',
        color:'white',
    },

    barra:{
        flex:1,
        width: 240,
        height: 'auto',
        margin: 160,
        alignSelf:'center',
        backgroundColor:'white'
    }
});