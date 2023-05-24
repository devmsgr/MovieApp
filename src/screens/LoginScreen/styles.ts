import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.LIGHT_CYNE,
  },
  container: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  leftCornerView: {left: 0, top: 0, position: 'absolute'},

  headerText: {
    color: Colors.BLUE,
    fontSize: 25,
    margin: 20,
    fontWeight: 'bold',
  },
});
export default styles;
