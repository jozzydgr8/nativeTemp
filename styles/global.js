import { StyleSheet } from "react-native"
export const globalStyle = StyleSheet.create({

        container:{
            flex:1,
            backgroundColor:'white',
            padding:16,
        },
        content:{
            flex:1
        },
        TitleText:{
            fontFamily:'Roboto-bold',
            fontSize:24,
        },
        input:{
            borderWidth:1,
            padding:10,
            margin:5,
            borderRadius:7,
            
        },
        errormessage:{
            color:'red',
            fontWeight:'bold',
            textAlign:'center'
        }
    
})

export const reviewImage = {
    ratings:{
        "1":require('../assets/rating-1.png'),
        "2":require('../assets/rating-2.png'),
        "3":require('../assets/rating-3.png'),
        "4":require('../assets/rating-4.png'),
        "5":require('../assets/rating-5.png'),
    }
}