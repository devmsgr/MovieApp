import {View, Text} from 'react-native';
import React from 'react';
import commonStyles from './CommonStyle';

const ErrorText = ({errorMessage}: {errorMessage: string}) => {
  return (
    <View>
      <Text style={commonStyles.errorText}>{errorMessage}</Text>
    </View>
  );
};

export default ErrorText;
