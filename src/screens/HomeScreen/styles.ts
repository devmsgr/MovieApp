import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  activityContainer: {
    flex: 1,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
  },
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    padding: 8,
  },
  container: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerText: {
    color: Colors.BLUE,
    fontSize: 25,
    margin: 20,
    fontWeight: 'bold',
  },
});
export default styles;
