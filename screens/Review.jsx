import {Text, View, StyleSheet, Image} from 'react-native'
import { globalStyle } from '../styles/global'
import { useLayoutEffect } from 'react';
import Card from '../shared/Card';
import { reviewImage } from '../styles/global';
export default function Review({route, navigation}){
    const {item} = route.params;
    useLayoutEffect(()=>{
        navigation.setOptions({
            title:item.title 
        })
    },[navigation,item])
    return(
        <View style={globalStyle.container}>
            
            <Card>
            <View>
            <Text style={globalStyle.TitleText }>{item.title}</Text>
            <Text>{item.body}</Text>
                
                <View style={styles.rating}>
                <Text>Book Rating</Text>
                    <Image source={reviewImage.ratings[item.rating]}/>
                </View>
            </View>
            </Card>
           
        </View>
    )
}

const styles = StyleSheet.create({
    rating:{
        borderTopWidth:1,
        borderTopColor:'black',
        marginTop:20,
        flexDirection:'row',
        justifyContent:'center',
        paddingTop:16,
        gap:5,

    }
})