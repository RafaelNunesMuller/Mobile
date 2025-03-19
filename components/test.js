
import {Text, View, StyleSheet, Image} from 'react-native';

export default function Home(){
    return(
        <View style={styles.container}>
            <View style={styles.profile}>
                <Text>EPIC the musical é um musical baseado no livro chamado Odisseia de Homero</Text>
            </View>
            
            <View style={styles.gallery}>
                <Image style={styles.img}  source={require('../assets/homero.jpg')} />
                <Image style={styles.img}  source={require('../assets/odisseia.jpg')} />
            </View>

            <View style={styles.epic}>
                <Text>EPIC the musical é uma historia ficticia da mitologia grega</Text>
            </View>

            <View style={styles.gallery}>
                <Image style={styles.img}  source={require('../assets/storm.jpg')} />
                <Image style={styles.img}  source={require('../assets/troia.jpg')} />
            </View>

            <View style={styles.end}>
                <Text>FIM</Text>
            </View>

        </View>
        
    );
}

const styles = StyleSheet.create({
   
    container:{
        flex: 1,
        backgroundColor:'gray',
    },

    img:{
        width: 100,
        height: 100,       
    },

    profile:{
        flex:1,
        fontSize: 30,
        justifyContent:'center',
    },

    epic:{
        flex:1,
        fontSize: 30,
        flexDirection:'row-reverse',
    },

    gallery:{
        flex:2,
        flexDirection:'row',
        textAlign:'center',
        justifyContent:'space-around',
    },

    end:{
        flex:1,
        fontSize: 30,
        justifyContent:'flex-end',
        alignItems:'center',
    },
    

})