import {View, Text, StyleSheet, Image } from "react-native"

const PokemonCard = ({ name, image, type, hp, moves, weakness }) => {
    return (
        <View style = { styles.card }>
            <View style = { styles.nameContainer }>
                <Text style = { styles.name }>{ name }</Text>
                <Text style = { styles.hp }>❤️{ hp }</Text>
            </View>
            <Image style = { styles.image } source={ image } resizeMode="contain" />
            <View>
                <Text style = { styles.type }>{ type }</Text>
            </View>
            
            <View>
                <Text style = { styles.moves }>Moves : { moves.join(" , ")}</Text>
            </View>

            <View>
                <Text style = { styles.weakness }>Weakness : { weakness.join(" , ")}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card : {
        backgroundColor : "white",
        borderRadius : 16,
        borderWidth : 2,
        padding : 16,
        margin : 16,
    },
    nameContainer : {
        flexDirection : "row",
        justifyContent : "space-between",
        marginBottom : 32,
    },
    name :{
        fontSize : 30,
        fontWeight : "bold",
    },
    hp : {
        fontSize : 22
    },
    image : {
        width : "100%",
        height : 200,
        marginBottom : 16,
    },
    type : {
        fontSize : 25,
        fontWeight : "bold",
        textAlign : "center",
        padding : 5,
        width : "25%",
        borderRadius : 10,
        borderWidth : 4,
        borderColor : "darkred",
        alignSelf : "center",
        marginTop : 10,
        marginBottom : 50,
    },
    moves : {
        fontSize : 20,
        fontWeight : "bold",
        marginBottom : 20,
    },
    weakness : {
        fontWeight : "bold",
        fontSize : 20,
    }

})




export default PokemonCard