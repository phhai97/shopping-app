import * as React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Icon} from 'react-native-elements';
// screens
import HomeScreen from '../Screen/Home';
import LoginScreen from '../Screen/Login';
import DetailProductScreen from '../Screen/DetailProduct';
import CartScreen from '../Screen/Cart';
import ProductsScreen from '../Screen/Products';
import VoucherScreen from '../Screen/Voucher';

const HomeStack = createStackNavigator();

const optionScreen = {
  headerShown: false,
};

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={optionScreen}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={ProductsScreen} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator screenOptions={optionScreen}>
      <SettingsStack.Screen name="Details" component={DetailProductScreen} />
    </SettingsStack.Navigator>
  );
}
const CartStack = createStackNavigator();
function CartStackScreen() {
  return (
    <CartStack.Navigator screenOptions={optionScreen}>
      <CartStack.Screen name="Cart-Product" component={CartScreen} />
    </CartStack.Navigator>
  );
}
const Tab = createBottomTabNavigator();

const Main = createStackNavigator();

function NavigationScreen() {
  return (
    <Tab.Navigator
      screenOptions={optionScreen}
      tabBarOptions={{
        inactiveTintColor: '#f0e68c',
        activeTintColor: '#f8f8ff',
        style: {
          height: 65,
          backgroundColor: '#ff8c00',
          borderTopColor: '#ffffff',
          justifyContent: 'center',
          margin:0
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarBadge: 3,
          tabBarLabel: 'Home',
          tabBarIcon: (color, size) => (
            <Icon name="home" type="antdesign" size={15} style={{margin:0}} reverse />
          ),
        }}
      
      />
        <Tab.Screen
        name="Products"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Product',
          tabBarIcon: (color, size) => (
            <Icon name="home" type="antdesign" size={15} style={{margin:0}} reverse />
          ),
        }}
      
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStackScreen}
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: (color, size) => (
            <Icon name="shoppingcart" type="antdesign" size={15} reverse />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartStackScreen}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: (color, size) => (
            <Icon name="setting" type="antdesign" size={15} reverse />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function MainNavigation() {
  return (
    <Main.Navigator screenOptions={optionScreen}>
      <Main.Screen name="Login" component={LoginScreen} />
      <Main.Screen name="dashboard" component={NavigationScreen} />
      <Main.Screen name='Voucher' component={VoucherScreen} />
    </Main.Navigator>
  );
}
