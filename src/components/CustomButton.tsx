import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../style/CommonStyle';

export default function CustomButton({
  label,
  isDisabled,
  onPress,
}: {
  label: string;
  isDisabled: boolean;
  onPress: any;
}) {
  return (
    <TouchableOpacity
      disabled={isDisabled}
      onPress={onPress}
      style={
        isDisabled ? [styles.container, styles.disableButton] : styles.container
      }>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}
