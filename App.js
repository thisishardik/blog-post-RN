import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import IndexScreen from './src/screens/index_screen';
import React from 'react';
import { Provider } from './src/context/blog_context';

const navigator = createStackNavigator({
  Index: IndexScreen,
}, {
  initialRouteName: 'Index',
  defaultNavigaionOptions: {
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