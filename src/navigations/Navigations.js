import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SignupScreen from '../screens/loginScreens/SignupScreen';
import MainScreen from '../screens/userScreens/MainScreen';

const Stack = createStackNavigator();

export default Navigation = ()=>{
    return(

       <NavigationContainer>
         <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
        initialRouteName="SignupScreen"
        >
            <Stack.Screen name="SignupScreen" component={SignupScreen} />
            <Stack.Screen name="Main" component={MainScreen} />
        </Stack.Navigator>
       </NavigationContainer>
    )
}