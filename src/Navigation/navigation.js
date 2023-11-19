import { createAppContainer, DrawerItems, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'
import Login from '../Components/Login'
import Signup from '../Components/Signup'
import Dashboard from '../Components/Main/Dashboard'
import MovieDetail from "../Components/Main/MovieDetails";


const AuthStack = createStackNavigator({

    UserLogin: {
        screen: Login,
        headerMode: 'none',
        navigationOptions: {
            header: null,
        }
    },

    UserSignUp: {
        screen: Signup,
       
        navigationOptions: () => ({
            headerBackTitle: null,
            header: null,
        }),
    },

})



const AppStack = createStackNavigator({

    Dashboard: {
        screen: Dashboard,
        headerMode: 'none',
        navigationOptions: {
            header: null,
        }
    },
    MovieDetail: {
        screen: MovieDetail,
        headerMode: 'none',
        navigationOptions: {
            header: null,
        }
    },

  

})

const SwitchNavigator = createSwitchNavigator({
    // Splash: Splash,

    // Authentication: {
    //     screen: AuthStack
    // },

    App: {
        screen: AppStack
    },
})


const Navigator = createAppContainer(SwitchNavigator);

export default Navigator