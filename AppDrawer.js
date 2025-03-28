// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Button } from 'react-native';


export default function AppDrawer(){
    const Drawer = createDrawerNavigator();
    return(
    <>
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


    
        {/* useful tips useful tips methods to open toggler and navigate drawer without oopenein drawer
<Button title='press' onPress={()=>{navigation.toggleDrawer()}}/>
<Button title='press' onPress={()=>{navigation.jumpTo('settings')}}/> */}
    </>
    )
}


