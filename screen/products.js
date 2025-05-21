import { useState, useEffect} from "react";
import { View, Text, StyleSheet, FlatList, Image} from "react-native";
import Card from "../components/cards";
import { db } from "../controller";
import { collection, getDocs } from "firebase/firestore";
import { useCarrinho } from "../components/ProviderCarrinho";

export default function Product({navigation}){
    const [Produtos, setProdutos] = useState([])
    const {AddP} = useCarrinho();

    useEffect(() => {
        async function carregarProdutos() {
            try{
                const querySnapshot = await getDocs(collection(db, 'produtos'));
                const lista = [];
                querySnapshot.forEach((doc) => {
                    lista.push({ id: doc.id, ...doc.data() });
                });
                setProdutos(lista);
            } catch(error){
                console.log("erro ao buscar produtos:",error);
            }
        }
        carregarProdutos();
    }, []);

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
                nome={item.Nome}
                valor={item.Valor}
                imagem={item.Imagem}
                Comprar={() => {
                    AddP(item);  
                    navigation.navigate('carrinho');
                }}
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
        textAlign:'center',
    },
})