
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import About from './screens/About';
import Ionicons from '@expo/vector-icons/Ionicons'

export default function App(){
    const Tab = createBottomTabNavigator();
    return(
       <NavigationContainer>
        <Tab.Navigator
        screenOptions={{
            tabBarLabelPosition: "below-icon",
            tabBarShowLabel:true,
            tabBarInactiveTintColor:'green',
            tabBarInactiveBackgroundColor:'gray'
        }}
        >
            <Tab.Screen name='Home' component={Home}
            options={{
                tabBarLabel:'H',
                tabBarIcon: ({color})=><Ionicons name='home' size={20} color={color}/>,
                tabBarBadge:3,

            }}/>
            <Tab.Screen name='About' component={About}/>
        </Tab.Navigator>
       </NavigationContainer>
    )
}