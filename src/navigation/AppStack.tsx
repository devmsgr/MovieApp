import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useTranslation} from 'react-i18next';
import HomeScreen from '../screens/HomeScreen';
import Header from '../components/LanguageToggle';
import Colors from '../constants/Colors';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  const {t} = useTranslation();
  const screenName = t('Popular Movies');
  return (
    <Stack.Navigator>
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

export default AppStack;
