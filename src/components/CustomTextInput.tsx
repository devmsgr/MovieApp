import {View, TextInput} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from '../style/CommonStyle';
import Colors from '../constants/Colors';

const CustomTextInput = ({
  placeholder,
  iconName,
  secureTextEntry,
  onChangeText,
}: {
  placeholder: string;
  iconName: string;
  secureTextEntry: boolean;
  onChangeText: any;
}) => {
  return (
    <View style={styles.inputContainer}>
      <MaterialIcons name={iconName} size={18} color={Colors.BLACK} />
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        style={styles.inputText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default CustomTextInput;
