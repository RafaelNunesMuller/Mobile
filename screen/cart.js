import { View, StyleSheet, Text, Button, Image, FlatList } from "react-native";
import { useCarrinho } from "../components/ProviderCarrinho";
import Card from "../components/cards";

export default function Cart(){
    const {carrinho, removerP} = useCarrinho();
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Carrinho</Text>
            <FlatList
            data={carrinho}
            renderItem={({item, index}) => (
                <Card 
                nome={item.Nome}
                valor={item.Valor}
                imagem={item.Imagem}
                remover={() => removerP(index)}
                />
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