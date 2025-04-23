import { useState } from "react";
import { View, Text, StyleSheet, FlatList, Image} from "react-native";
import Card from "../components/cards";
export default function product(){
    const [Produtos, setProdutos] = useState([
        {id:1, nome: 'Camiseta', valor:9.99, imagem:'https://deco-sites-assets.s3.sa-east-1.amazonaws.com/simples/159af6e8-10b8-425a-9084-cf8b67a49875/BANNER-FILTRO-CAMISETA-M.jpg' },

        {id:2, nome: 'Moletom', valor:159.90, imagem:'https://ph-cdn3.ecosweb.com.br/imagens01/foto/mkp145/moda-masculina/casacos/blusa-moletom-masculina-canguru-logo-polo-wear-cinza-claro_2344690_600_1.jpg'},

        {id:3, nome: 'Tênis', valor:89.90, imagem:'https://andaraki.fbitsstatic.net/img/p/tenis-adidas-feminino-grand-court-base-2-0-iq-7281-80079/321960.jpg?w=575&h=575&v=no-change&qs=ignore'},

        {id:4, nome: 'Calça', valor:250.90, imagem:'https://images.tcdn.com.br/img/img_prod/769687/calca_jeans_masculina_mais_comprida_longa_premium_jamer_2649_1_d32393952c59a63e5a115ae22d492fd0.jpg'}
    ])

    return(
        <View style={styles.container}>
            {/* array com map 
            <Text style={styles.text}>Lista de produtos</Text>
            {Produtos.map((item) => (
                <Text style={styles.products}>
                    {item.nome} - R${item.valor}
                </Text>
            ))} */}

            <Text style={styles.text}>Lista de produtos</Text>

            <FlatList 
            data={Produtos}
            renderItem={({item}) => (
                <Card 
                nome={item.nome}
                valor={item.valor}
                imagem={item.imagem}
                />
                )}
            keyExtractor={item => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignContent:'center',
    },

    text:{
        fontSize:30,
        color: 'red',
        textAlign:'center'
    },
})