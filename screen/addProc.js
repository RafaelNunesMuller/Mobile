import { View, Text, StyleSheet, TextInput, ScrollView, Button} from "react-native";
import { useState } from 'react';
import { db } from "../controller";
import { collection, addDoc } from "firebase/firestore";

export default function AddP(){

    const [Nome, setNome] = useState("");
    const [Valor, setValor] = useState("");
    const [Imagem, setImagem] = useState("");

    const cadastrarProduto = async () => {
        try{
            await addDoc(collection(db, 'produtos'), {
                Nome,
                Valor: parseFloat(Valor),
                Imagem
            }),
            setNome('');
            setValor('');
            setImagem('');
        }
        catch(error){
            console.log('erro no cadastro do produto', error);
        }
    }

    return(
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>

            <Text style={styles.text}>Digite o nome, valor e o URL da imagem do produto</Text>

            <TextInput
            style={styles.barra}
            placeholder='Nome'
            value={Nome}
            onChangeText={setNome}
            />

            <TextInput
            style={styles.barra}
            placeholder='Valor'
            value={Valor}
            onChangeText={setValor}
            />

            <TextInput
            style={styles.barra}
            placeholder='URL de Imagem'
            value={Imagem}
            onChangeText={setImagem}
            />

            <Button
            style={styles.btn}
            title='Adicionar'
            onPress={cadastrarProduto}
            />

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignContent:'center',
        padding:50,
    },

    barra:{
        margin:100,
        alignSelf:'center',
        backgroundColor:'white',
        borderWidth:'120',
        borderColor:'black',
    },

    text:{
        fontSize:30,
        color: 'red',
        textAlign:'center',
    },

    btn:{
        justifyContent:'center',
        flexDirection:'column',
        alignItems:'center',
    },

});