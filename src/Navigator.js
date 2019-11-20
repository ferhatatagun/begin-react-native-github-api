import {createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'; 
import Home from './Pages/Home';
import List from './Pages/List';
import Detail from './Pages/Detail';

const Navigator = createStackNavigator({
    // Intro : {screen : Intro},
    HomeScreen : { screen: Home },
    ListScreen : { screen: List},
    DetailScreen :{screen:Detail} 
},
    {
        headerMode: 'none',
    });

const App = createAppContainer(Navigator);
export default App;