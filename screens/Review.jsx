import {Text, View, Button} from 'react-native'
import { globalStyle } from '../styles/global'
import { useLayoutEffect } from 'react';
export default function Review({route, navigation}){
    const {item} = route.params;
    useLayoutEffect(()=>{
        navigation.setOptions({
            title:item.title 
        })
    },[navigation,item])
    return(
        <View style={globalStyle.container}>
            
            <View>
            <Text>{item.title}</Text>
            <Text>{item.body}</Text>
            <Text> {item.rating}</Text>
            </View>
           
        </View>
    )
}

