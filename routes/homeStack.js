import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";


const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Gamezone'
        }
    },
    ReviewDetails: {
        screen: ReviewDetails
    }
}

const HomeStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerStyle: {
            backgroundColor: '#987654',
        }
    }
})

export default HomeStack