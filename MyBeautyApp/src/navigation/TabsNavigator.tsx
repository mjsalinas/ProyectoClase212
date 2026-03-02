import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Registro from '../screens/Registro';

export type TabsParamList = {
    Home: {newItem?: string} | undefined;
    Profile: undefined;
    Registro: {newItem?: string} | undefined;
}
const Tab = createBottomTabNavigator<TabsParamList>();
export default function TabsNavigator() {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} options={{title: 'Inicio'}}/>
            <Tab.Screen name="Profile" component={ProfileScreen} options={{title: 'Perfil'}}/>
           <Tab.Screen name="Registro" component={Registro} options={{title: 'Registro'}}/>

        </Tab.Navigator>
    );
}