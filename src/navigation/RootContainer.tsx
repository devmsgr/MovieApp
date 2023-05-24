import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import AuthStack from './AuthStack';
import AppStack from './AppStack';

const RootContainer = () => {
  const {user} = useSelector((state: any) => state.userData);
  return (
    <NavigationContainer>
      {user?.isLoggedIn ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default RootContainer;
