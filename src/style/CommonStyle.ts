import {StyleSheet, I18nManager} from 'react-native';
import Colors from '../constants/Colors';

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    padding: 10,

    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,

    height: 40,
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
  },
  inputText: {
    height: 40,
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
    flex: 1,
    color: Colors.BLACK,
  },
  errorText: {
    fontSize: 12,
    color: Colors.RED,
    textAlign: 'left',
  },
  listViewItemContainer: {
    flex: 1,
    height: 150,
    margin: 5,
    justifyContent: 'space-between',
  },
  imageStyle: {height: '100%', width: '100%', borderRadius: 10},
  backgroundOverlay: {
    position: 'absolute',
    padding: 8,
    height: 40,
    justifyContent: 'center',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: Colors.BLACK,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0.8,
  },
  labelStyles: {
    fontSize: 14,
    color: Colors.WHITE,
    textAlign: 'left',
    justifyContent: 'center',
  },
  disableButton: {backgroundColor: 'grey'},
  label: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 16,
    color: Colors.WHITE,
  },
  container: {
    backgroundColor: Colors.BLUE,
    padding: 10,
    borderRadius: 10,
    marginBottom: 30,
    marginTop: 20,
    width: '100%',
  },
});
export default styles;
