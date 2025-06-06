import { StyleSheet, View, Text,TouchableOpacity, TextInput } from "react-native";
import { use, useState } from "react";



export default function Counter(){
    const [contador, setContador] = useState(0)
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    function Aumentar (){
        setContador(contador+1)
    }
    
    function Diminuir (){
        if (contador > 0){
            setContador(contador-1)
        }
    }
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Contador: {contador} </Text>

            <View style={styles.btn}>
                <TouchableOpacity style={styles.botao} onPress={Aumentar}>
                    <Text style={styles.btnTxt}>+</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao} onPress={Diminuir}>
                    <Text style={styles.btnTxt}>-</Text>
                </TouchableOpacity>

            

            </View>

            <View style={styles.Viewinput}>
            <TextInput
                placeholder='nome'
                style={styles.input}
                value={nome}
                onChangeText={setNome}
            />
                        
            <TextInput
                placeholder='email'
                style={styles.input}
                value={email}
                onChangeText={setEmail}
            />
            </View>
            <Text>oi, {nome}, seu email é {email}</Text>
             
        </View>
)}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'gray',
        alignItems:'center',
    },

    title:{
        fontSize:50,
    },

    btn:{
        width:'30%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
    },

    botao:{
        backgroundColor:'red',
        width:'30%',
        borderRadius:'10%',   
    },

    btnTxt:{
        textAlign:'center',
        color:'white',
    },

    input:{
        width: 240,
        height: 'auto',
        alignContent:'center',
        backgroundColor:'white',
        justifyContent:'center'
    },

    Viewinput:{
        backgroundColor:'orange'

    }

}) 