import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {signIn} from '../../redux/reducer/userSlice';
import styles from './styles';
import CustomTextInput from '../../components/CustomTextInput';
import ErrorText from '../../components/ErrorText';
import {validateEmail, validatePassword} from '../../utils';
import Header from '../../components/LanguageToggle';
import Colors from '../../constants/Colors';
import {useTranslation} from 'react-i18next';
import CustomButton from '../../components/CustomButton';
import Route from '../../constants/Route';

const LoginScreen = ({navigation}: {navigation: any}) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [error, setError] = useState('');
  const {t} = useTranslation();
  const {user} = useSelector((state: any) => state.userData);
  useEffect(() => {
    if (user?.isLoggedIn) {
      navigation.navigate(Route.HOME);
    }
  }, [navigation, user]);

  useEffect(() => {
    setShowErrorMessage(false);
    const message = validateEmail(userName);
    if (message?.length === 0) {
      const passwordErrorMsg = validatePassword(password);
      if (passwordErrorMsg?.length === 0) {
        setError('');
      } else {
        setError(passwordErrorMsg);
      }
    } else {
      setError(message);
    }
  }, [userName, password]);

  const dispatch = useDispatch();

  const onUserNameTextChange = (value: string) => {
    setUserName(value);
  };
  const onPasswordTextChange = (value: string) => {
    setPassword(value);
  };

  const onLoginButtonPress = () => {
    if (error.length === 0) {
      dispatch(signIn({userName, password}));
    } else {
      setShowErrorMessage(true);
    }
  };

  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.leftCornerView}>
        <Header iconColor={Colors.BLACK} />
      </View>
      <View style={styles.container}>
        <Text style={styles.headerText}>{t('Login')}</Text>
        <CustomTextInput
          iconName={'alternate-email'}
          placeholder={t('Email')}
          onChangeText={onUserNameTextChange}
          secureTextEntry={false}
        />

        <CustomTextInput
          iconName={'lock-outline'}
          placeholder={t('Password')}
          secureTextEntry={true}
          onChangeText={onPasswordTextChange}
        />
        {showErrorMessage && <ErrorText errorMessage={error} />}

        <CustomButton
          label={t('Login')}
          isDisabled={userName?.length === 0 || password?.length === 0}
          onPress={onLoginButtonPress}
        />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
