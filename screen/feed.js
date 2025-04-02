import { StyleSheet,  View, Text, Button, Image,ScrollView } from "react-native";

export default function Feed(){
    return(
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.title}>A vida é feita de momentos simples, mas cheios de significado.
            Às vezes, é nas pequenas coisas que encontramos as maiores alegrias. Um café quentinho pela manhã, um sorriso de alguém querido, ou até mesmo o silêncio de um dia tranquilo.Que tal aproveitar o hoje para fazer algo que te faça feliz? Não precisa ser grandioso, só genuíno.</Text>
            <Image style={styles.img} source={require('../assets/cafe.jpg')}/>

            <Button
            title="botao"
            color="red"
            />

            <Text style={styles.title}>A vida é feita de momentos simples, mas cheios de significado.
            Às vezes, é nas pequenas coisas que encontramos as maiores alegrias. Um café quentinho pela manhã, um sorriso de alguém querido, ou até mesmo o silêncio de um dia tranquilo.Que tal aproveitar o hoje para fazer algo que te faça feliz? Não precisa ser grandioso, só genuíno.</Text>
            <Image style={styles.img} source={require('../assets/cafe.jpg')}/>

            <Button
            title="botao"
            color="red"
            />

            <Text style={styles.title}>A vida é feita de momentos simples, mas cheios de significado.
            Às vezes, é nas pequenas coisas que encontramos as maiores alegrias. Um café quentinho pela manhã, um sorriso de alguém querido, ou até mesmo o silêncio de um dia tranquilo.Que tal aproveitar o hoje para fazer algo que te faça feliz? Não precisa ser grandioso, só genuíno.</Text>
            <Image style={styles.img} source={require('../assets/cafe.jpg')}/>

            <Button
            title="botao"
            color="red"
            />
            </ScrollView>
            
        </View>
)}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        backgroundColor:'gray',
    },

    title:{
        flex:1,
        justifyContent:'center',
    },

    img:{
        width:320,
        height:200,
        justifyContent:'center',
    }
}) 