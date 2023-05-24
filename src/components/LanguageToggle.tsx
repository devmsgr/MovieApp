import React from 'react';
import {I18nManager} from 'react-native';
import {ToggleButton} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import RNRestart from 'react-native-restart';

const LanguageToggle = ({iconColor}: {iconColor: string}) => {
  const {i18n} = useTranslation();
  const onButtonToggle = () => {
    i18n.changeLanguage(i18n.language === 'ar' ? 'en' : 'ar').then(() => {
      I18nManager.forceRTL(i18n.language === 'ar');
      RNRestart.Restart();
    });
  };
  return (
    <ToggleButton
      icon="translate"
      iconColor={iconColor}
      onPress={onButtonToggle}
    />
  );
};

export default LanguageToggle;
