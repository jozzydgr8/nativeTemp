import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useEffect } from "react";
import Home from "./screens/Home";
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from "expo-font";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Review from "./screens/Review";
import { Alert, TouchableWithoutFeedback, Text } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons'


import About from './screens/About';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


// home stack  navigation

 const HomeStack = ()=>{
  const navigate = useNavigation();
  return(
    
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerStyle:{
          backgroundColor:"#6a51ae",
        },
        headerTintColor:'#fff',
        headerTitleStyle:{fontWeight:"bold"},
        headerRight:()=>(
          <TouchableWithoutFeedback onPress={()=>navigate.toggleDrawer()}>
            <Ionicons name='menu-outline' color={'white'} size={30}/>
          </TouchableWithoutFeedback>
        )
       
      }}>
        <Stack.Screen name="Home" component={Home} 
        options={{
          title:'Books'
        }}/>
        <Stack.Screen name="Review" component={Review} initialParams={{name:'Guest'}} />
      </Stack.Navigator>
   
  )
}


// aboutStack navigation

const AboutStack = ()=>{
  const navigate = useNavigation();
  return(
    
      <Stack.Navigator initialRouteName="About" screenOptions={{
        headerStyle:{
          backgroundColor:"#6a51ae",
        },
        headerTintColor:'#fff',
        headerTitleStyle:{fontWeight:"bold"},
        headerRight:()=>(
          <TouchableWithoutFeedback onPress={()=>navigate.toggleDrawer()}>
            <Ionicons name='menu-outline' color={'white'} size={30}/>
          </TouchableWithoutFeedback>
        )
       
      }}>
        <Stack.Screen name="About" component={About} 
        options={{
          title:'About'
        }}/>
       
      </Stack.Navigator>
   
  )
}

export default function App() {
  const [loaded, error] = useFonts({
    'Roboto-bold': require('./assets/fonts/Roboto_Condensed-Bold.ttf'),
    'Roboto-Light': require('./assets/fonts/Roboto_Condensed-Light.ttf')
  });

  useEffect(() => {
    const hideSplashScreen = async () => {
      if (loaded || error) {
        await SplashScreen.hideAsync();
      }
    };

    hideSplashScreen();
  }, [loaded, error]);

  // Prevent rendering until fonts are loaded or error occurs
  if (!loaded && !error) {
    return null;
  }




  return (
    <>
    {/* nest drawer navigation stack navigation */}
    


    

    <NavigationContainer>
      <Drawer.Navigator screenOptions={{
        drawerActiveTintColor:'#333',
        drawerActiveBackgroundColor:'lightblue',
        drawerContentStyle:{
          backgroundColor:'gray'
        }
      }}>
        <Drawer.Screen name="Home" component={HomeStack} options={{
          title:'Books',
          drawerLabel:'Books',
          headerShown:false
        }}/>
        <Drawer.Screen name="About" component={AboutStack} options={{
          headerShown:false
        }}/>
      </Drawer.Navigator>
    </NavigationContainer>
    
    </>
  );
}
