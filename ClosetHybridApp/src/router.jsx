import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './pages/Home';
import Feed from './pages/Feed';
import Closet from './pages/Closet';
import Profile from './pages/Profile';
import CustomBottombar from './components/Bottombar/Bottombar';
import ClothesAdd from './pages/ClothesAdd';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import Terms from './pages/Terms/Terms';
import Alarm from './pages/Alarm';
import ClothesEdit from './pages/ClothesEdit';
import LookbookEdit from './pages/LookbookEdit';
import FeedEdit from './pages/FeedEdit';
import FeedAdd from './pages/FeedAdd';
import Setting from './pages/Setting';
import Search from './pages/Search';
import LookbookAdd from './pages/LookbookAdd';
import LookbookImgAdd from './pages/LookbookImgAdd';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const renderTabBar = props => <CustomBottombar {...props} />;

const Bottombar = () => {
  return (
    <Tab.Navigator
      tabBar={renderTabBar}
      screenOptions={{
        headerShown: false,
        unmountOnBlur: true,
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Closet" component={Closet} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Terms" component={Terms} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Bottombar" component={Bottombar} />
      <Stack.Screen name="clothesImgAdd" component={ClothesAdd} />
      <Stack.Screen name="alarm" component={Alarm} />
      <Stack.Screen name="clothesEdit" component={ClothesEdit} />
      <Stack.Screen name="lookbookEdit" component={LookbookEdit} />
      <Stack.Screen name="lookbookAdd" component={LookbookAdd} />
      <Stack.Screen name="lookbookImgAdd" component={LookbookImgAdd} />
      <Stack.Screen name="feedEdit" component={FeedEdit} />
      <Stack.Screen name="feedAdd" component={FeedAdd} />
      <Stack.Screen name="setting" component={Setting} />
      <Stack.Screen name="search" component={Search} />
    </Stack.Navigator>
  );
};

export default Router;
