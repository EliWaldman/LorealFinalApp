import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/home";
import PdpScreen from "../screens/pdpScreen";
import pdpScreen from "../screens/pdpScreen";
import ClpScreen from "../screens/clpScreen";

const screens = {
    Homepage: {
        screen: Home
    },

    PdpScreen: {
        screen: pdpScreen
    },

    ClpScreen: {
        screen: ClpScreen
    }
} 

const mainStack = createStackNavigator(screens);


export default createAppContainer(mainStack);