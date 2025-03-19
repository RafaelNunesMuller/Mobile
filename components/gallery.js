
import {Text, View, StyleSheet, Image} from 'react-native';

export function Profile(){
    return(
        <View style={styles.profile}>
            <Text>meu primeiro componente</Text>
            <Image style={styles.img} source={{uri:'https://media.tenor.com/_1hMqyFC4LEAAAAM/pop-cat.gif'}} />
            <Image style={styles.img} source={require('../assets/capybara.gif')} />
            <Text>gatinho pop</Text>
        </View>
    );
}

/*export function Favorites(){
    return(
        <View style={styles.favorites}>
            <Text>meus favoritos</Text>

            <Image style={styles.img} source={require('../assets/capybara.gif')} />
        </View>
    );
}*/


export default function Gallery(){
    return(
        <View style={styles.container}>
            <Text>meus companheiros</Text>
            <Profile/>
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'gray',
    },

    img:{
        width: 100,
        height: 100,       
    },
    profile:{
        flex:3,
        backgroundColor:'#EA1',
        

    },
    /*favorites:{
        flex:1,
        backgroundColor:'#A12',
        alignItems:'center',
        justifyContent:'space-evenly',
    }*/
})