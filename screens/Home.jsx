import {Text, View, StyleSheet} from 'react-native'
import { globalStyle } from '../styles/global'
export default function Home(){
    return(
        <View style={globalStyle.container}>
            <Text style={globalStyle.TitleText}>Home section</Text>
        </View>
    )
}
