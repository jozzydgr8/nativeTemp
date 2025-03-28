import {Text, View, FlatList, TouchableOpacity, Modal, StyleSheet, Keyboard, TouchableWithoutFeedback} from 'react-native'
import { globalStyle } from '../styles/global'
import { useState } from 'react'
import Card from '../shared/Card'
import Ionicons from '@expo/vector-icons/Ionicons'
import ReviewForm from './components/ReviewForm'
export default function Home({navigation, route}){
    const [modalToggle, setModalToggle] = useState(false)
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
      ]);
      const addReview = (review)=>{
        setBooks((currentReview=>{
            return [review, ...currentReview]
        }));
        setModalToggle(false);
      }
    return(
        <>
        <Modal visible={modalToggle} animationType='slide'>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.modal}>
            <Ionicons
                name='close'
                size={30}
                onPress={()=>setModalToggle(false)}
                style={styles.open}
        
                />
                <ReviewForm addReview={addReview}/>
            </View>
        </TouchableWithoutFeedback>
        </Modal>
        <View style={globalStyle.container}>
            <Ionicons
            name='add'
            size={30}
            onPress={()=>setModalToggle(true)}
            style={styles.open}
    
             />
            <View style={globalStyle.content}>
                <FlatList
                data={books}
                renderItem={({item})=>(
                    <Card>
                            <TouchableOpacity onPress={()=>navigation.navigate('Review', {item:item})}>
                            <View>
                            <Text style={globalStyle.TitleText}>{item.title}</Text>
                            </View>
                            
                        </TouchableOpacity>
                    </Card>
                )}
                />
            </View>
        </View>
        </>
        
    )
}

const styles = StyleSheet.create({
    modal:{
        flex:1,
        marginTop:60,
        padding:16
    },
    open:{
        backgroundColor:'#fff',
        shadowOffset:{width:1, height:1},
        shadowColor:'black',
        shadowOpacity:0.3,
        alignSelf:"center",
        padding:10,
        borderRadius:10,
        marginVertical:10,
    }
})