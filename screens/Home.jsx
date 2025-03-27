import {Text, View, Button, FlatList, TouchableOpacity} from 'react-native'
import { globalStyle } from '../styles/global'
import { useState } from 'react'
export default function Home({navigation, route}){
    const [books, setBooks] = useState([
        { number: "1", title: "The Great Gatsby", rating: 5, body: "A timeless classic." },
        { number: "2", title: "1984", rating: 4, body: "Chilling and thought-provoking." },
        { number: "3", title: "To Kill a Mockingbird", rating: 5, body: "Powerful and deeply moving." },
        { number: "4", title: "Moby Dick", rating: 3, body: "A bit too long." },
        { number: "5", title: "Pride and Prejudice", rating: 5, body: "A romantic masterpiece." },
        { number: "6", title: "The Hobbit", rating: 5, body: "Adventure at its best." },
        { number: "7", title: "The Catcher in the Rye", rating: 4, body: "A rebellious coming-of-age." },
        { number: "8", title: "Brave New World", rating: 4, body: "Futuristic and unsettling." },
        { number: "9", title: "The Alchemist", rating: 5, body: "Inspirational and magical." },
        { number: "10", title: "Crime and Punishment", rating: 5, body: "Dark and psychological." }
      ])
    return(
        <View style={globalStyle.container}>
            <View>
                <FlatList
                data={books}
                renderItem={({item})=>(
                    <TouchableOpacity onPress={()=>navigation.navigate('Review', {item:item})}>
                        <View style={globalStyle.items}>
                        <Text style={globalStyle.TitleText}>{item.title}</Text>
                        </View>
                        
                    </TouchableOpacity>
                )}
                />
            </View>
        </View>
    )
}
