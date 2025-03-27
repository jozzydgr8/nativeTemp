import { useEffect } from "react";
import Home from "./screens/Home";
import * as SplashScreen from 'expo-splash-screen'
import { useFonts } from "expo-font";

export default function App() {
  const [loaded, error] = useFonts({
    'Roboto-bold':require('./assets/fonts/Roboto_Condensed-Bold.ttf'),
    'Roboto-Light':require('./assets/fonts/Roboto_Condensed-Light.ttf')
  })
  useEffect(()=>{
    const hideSplashScreen = async () => {
      if (loaded || error) {
        await SplashScreen.hideAsync();
      }
    };

    hideSplashScreen();
  },[loaded, error])
 
  
  if(!loaded && !error){
    return null
  }

    return (
      <Home/>
    );
  
  
  
}

