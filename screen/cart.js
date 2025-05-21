import { View, StyleSheet, Text, Button, Image, FlatList } from "react-native";
import { useCarrinho } from "../components/ProviderCarrinho";

export default function Cart(){
    const {carrinho} = useCarrinho();
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Carrinho</Text>
            <FlatList
            data={carrinho}
            renderItem={({item}) => (
                <View style={styles.card}>
                    <Image style={styles.img} source={{uri: item.Imagem}}/>
                    <Text style={styles.txtprod}>{item.Nome}</Text>
                    <Text style={styles.txtprod}>R${item.Valor}</Text>
                </View>
            )}
            />
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
    },

    txtprod:{
        fontSize:20,
        fontWeight:'bold',
        color:'white'
    },
    text:{
        fontSize:30,
        color: 'red',
        textAlign:'center',
    },
})