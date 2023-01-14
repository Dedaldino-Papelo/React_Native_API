import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";


const screens = {
    Home: {
        screen: Home
    },
    ReviewDetailsme: {
        screen: ReviewDetails
    }
}

const HomeStack = createStackNavigator(screens)
export default createAppContainer(HomeStack)