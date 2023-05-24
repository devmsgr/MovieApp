import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

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
        isDisabled
          ? [styles.container, {backgroundColor: 'grey'}]
          : styles.container
      }>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  label: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 16,
    color: '#fff',
  },
  container: {
    backgroundColor: '#0077e6',
    padding: 10,
    borderRadius: 10,
    marginBottom: 30,
    marginTop: 20,
    width: '100%',
  },
});
