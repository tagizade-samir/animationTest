import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  animationContainer: {
    flex: 0.8,
    backgroundColor: 'gray',
    justifyContent: 'space-around',
    alignItems: 'center',
    overflow: 'hidden',
  },
  btnContainer: {
    flex: 0.2,
    backgroundColor: '#dedede',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  animatedView: {
    width: 100,
    height: 100,
    backgroundColor: 'aqua',
  },
  animatedImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  animatedText: {
    fontSize: 20,
    textTransform: 'uppercase',
    backgroundColor: 'steelblue',
    color: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
  },
  btnTouchable: {
    width: 150,
    minHeight: 110,
    backgroundColor: '#6495ED',
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});
