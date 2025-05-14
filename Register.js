import {View, Text,TextInput, Button, StyleSheet, } from "react-native"
import {useState} from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./controller";
import { TouchableOpacity } from "react-native";

export default function cadastro({navigation}){
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")


    const cadastroUser = () =>{
        createUserWithEmailAndPassword(auth, email, senha).then((userCredential) => {
            console.log('cadastrado', userCredential.user.email);
            navigation.navigate('Login')
          })
          .catch((error) => {
            console.log('erro', error.message);
          });
    }

    return(
        <View>
            <Text style={styles.container}>
                Cadastro
            </Text>
            <TextInput
            style={styles.input}
            placeholder="email"
            value={email}
            onChangeText={setEmail}
            />

            <TextInput
            style={styles.input}
            placeholder="senha"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry={true}
            />

            <Button
            style={styles.btn}
            color={'#FF007F'}
            title="Cadastrar"
            onPress={cadastroUser}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:50,
        alignContent:'center',
    },

    btn:{
        width:'30%',
        justifyContent:'space-around',
        borderColor:'#000',
        alignContent:'space-around',
    },

    input:{
        width:'30%',
        justifyContent:'center',
        borderColor:'#000000'
    },
})