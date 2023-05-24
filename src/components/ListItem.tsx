import {View, Text, Image} from 'react-native';
import React from 'react';
import Strings from '../constants/Strings';
import styles from '../style/CommonStyle';

const ListItem = ({
  title,
  poster_path,
}: {
  title: string | null;
  poster_path: string;
}) => {
  return (
    <View style={styles.listViewItemContainer}>
      <Image
        source={{uri: Strings.IMAGE_ENDPOINT + poster_path}}
        style={styles.imageStyle}
        resizeMode="contain"
      />
      <View style={styles.backgroundOverlay}>
        <Text style={styles.labelStyles}>{title}</Text>
      </View>
    </View>
  );
};

export default ListItem;
