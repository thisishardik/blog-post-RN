import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import IndexScreen from './src/screens/index_screen';
import React from 'react';
import { Provider } from './src/context/blog_context';
import ShowScreen from './src/screens/show_screen';
import CreateScreen from './src/screens/create_screen';
import EditScreen from './src/screens/edit_screen';


const navigator = createStackNavigator({
  Index: IndexScreen,
  Show: ShowScreen,
  Create: CreateScreen, 
  Edit: EditScreen,
}, {
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'Blogs',
  }
});

 const App = createAppContainer(navigator);

 export default () => {
    return (
      <Provider>
        <App/>
      </Provider>
    );
 };