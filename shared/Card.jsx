import { View, StyleSheet } from "react-native";

export default function Card(props){
    return(
        <View style={Styles.card}>
            {props.children}
        </View>
    )
}

const Styles = StyleSheet.create({
    card:{
        backgroundColor:'#fff',
        margin:7,
        padding:20,
        shadowOffset: {width:1, height:1},
        shadowColor:'black',
        shadowOpacity:0.3,
        elevation:3,
        shadowRadius:4,
        borderRadius:7,
    
    }
})