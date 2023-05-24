import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import Header from '../components/LanguageToggle';
import Colors from '../constants/Colors';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  const {t} = useTranslation();
  const screenName = t('Popular Movies');
  const {user} = useSelector((state: any) => state.userData);
  return (
    <Stack.Navigator initialRouteName={user?.isLoggedIn ? 'Home' : 'Login'}>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: true,
          title: screenName,
          headerStyle: {
            backgroundColor: Colors.BLUE,
          },
          headerTitleStyle: {
            color: Colors.WHITE,
          },

          headerRight: () => <Header iconColor={Colors.WHITE} />,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
