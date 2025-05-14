import {Text, View, StyleSheet, ImageBackground, TextInput, Button, TouchableOpacity} from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../controller';

export default function Login({navigation}){

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const Verificator = () =>{
        signInWithEmailAndPassword(auth, email, senha).then(userCredential => {console.log('usuario logado', userCredential.user.email);
            navigation.navigate('Hometab');

        })
        .catch((error) => {console.log('erro ao logar', error.message)})
        
    }

    return(
        <View style={styles.container}>
            <ImageBackground style={{flex:1, width:'100%', height:'100%'}} source={require('../assets/troia.jpg')}>

            <Text style={styles.texto}>Epic the musical</Text>
           
                <TextInput
                     style={styles.barra}
                     placeholder='email'
                     value={email}
                    onChangeText={setEmail}
                />
        
                <TextInput
                    style={styles.barra}
                    placeholder='senha'
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry={true}
                />

                <Button
                    style={styles.btn}
                    title='Login'
                    onPress={Verificator}
                />

{/*                 <Button
                style={styles.btn}
                color={'#FF007F'}
                title="Cadastrar-se"
                onPress={() => navigation.navigate('Cadastro')}
                
                /> */}

            <TouchableOpacity onPress={() => navigation.navigate('cadastroUser')}>
                <Text style={styles.txtcadastrar}>Cadastrar</Text>
            </TouchableOpacity>
               
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#000",
        padding:10,
    },

    texto:{
        textAlign:'center',
        color:'white',
    },

    barra:{
        margin:150,
        alignSelf:'center',
        backgroundColor:'white',
        borderWidth:'120',
        borderColor:'black',
    },

    btn:{
        alignSelf:'center',
        backgroundColor:'white',
        borderWidth:'20',
        borderColor:'black',
    },

    txtcadastrar:{
        fontSize:20,
        color:'#FF007F',
        textAlign:'center'
    },
});