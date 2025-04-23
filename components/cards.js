import {View, Text, StyleSheet, Image} from "react-native";
import product from "../screen/products";


export default function Card({nome, valor, imagem}){
    return(
        <View style={styles.card}>
            <Image style={styles.img} source={{uri: imagem}}/>
            <View>
                <Text style={styles.products}>
                {nome}
                </Text>
                <Text style={styles.products}>
                R${valor}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignContent:'center',
    },

    card:{
        padding:10,
        margin:10,
        flexDirection:'row',
        backgroundColor:'#f4f4',
        borderRadius:8,
    },
  
    img:{
        width:100,
        height:100,
        borderRadius: 8,
    }

})