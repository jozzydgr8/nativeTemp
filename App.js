// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';
import { useEffect } from "react";
import Home from "./screens/Home";
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from "expo-font";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Review from "./screens/Review";
import { Alert, TouchableWithoutFeedback, Text } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import About from './screens/About';

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

  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

  return (
    <>
    {/* stack navigation stack navigation */}
    {/* <NavigationContainer >
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerStyle:{
          backgroundColor:"#6a51ae",
        },
        headerTintColor:'#fff',
        headerTitleStyle:{fontWeight:"bold"},
        headerRight:()=>(
          <TouchableWithoutFeedback onPress={()=>Alert.alert('Ateention', "meny opened", {text:'close'})}>
            <Text style={{color:'#fff'}}>Menu</Text>
          </TouchableWithoutFeedback>
        )
       
      }}>
        <Stack.Screen name="Home" component={Home} 
        options={{
          title:'Books'
        }}/>
        <Stack.Screen name="Review" component={Review} initialParams={{name:'Guest'}} />
      </Stack.Navigator>
    </NavigationContainer> */}


    {/* drawer navigator drawer navigator */}
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{
        drawerActiveTintColor:'#333',
        drawerActiveBackgroundColor:'lightblue',
        drawerContentStyle:{
          backgroundColor:'gray'
        }
      }}>
        <Drawer.Screen name="home" component={Home} options={{
          title:'dashboard',
          drawerLabel:'dashboard label'
        }}/>
        <Drawer.Screen name="About" component={About}/>
      </Drawer.Navigator>
    </NavigationContainer>
    </>
  );
}
