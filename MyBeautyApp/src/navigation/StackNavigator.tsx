import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import TabsNavigator from './TabsNavigator';
import ServiceRegistryScreen from '../screens/services/ServiceRegistryScreen';
import Registro from "../screens/RegistryScreen";

export type RootStackParamList = {
    Login: undefined,
    Tabs: {email:string},
    ServiceRegistry: undefined,
    Registro: undefined,
}
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigator() {
    return(
        <Stack.Navigator initialRouteName='Login' 
                            screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Registro" component={Registro} />            
            <Stack.Screen name="Tabs" component={TabsNavigator} />
            <Stack.Screen name="ServiceRegistry" component={ServiceRegistryScreen} />
        </Stack.Navigator>
    );
}