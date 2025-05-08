import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#ffff',
  },
  section: {
    marginVertical: 50,
  },
  card: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    flexDirection: 'row',
    gap: 20,
    backgroundColor: '#FFFAFA',
    width: '90%',
    margin: 'auto',
    borderRadius: 20,
    padding: 25,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {width: -10, height: 6},
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 10,
  },
  container: {
    marginVertical: 10,
  },

  avtar: {
    width: 120,
    height: 120,
    borderRadius: 100,
  },
  contians: {
    width: 200,
    borderLeftWidth: 1,
    borderLeftColor: '#85755f',
  },
  name: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
    textAlign: 'left',
    fontSize: 16,
    marginLeft: 20,
  },
  address: {
    color: '#000',
    textAlign: 'center',
    textAlign: 'left',
    fontFamily: 'Poppins-Regular',
    marginLeft: 20,
  },
  birthday: {
    color: '#000',
    textAlign: 'center',
    textAlign: 'left',
    fontFamily: 'Poppins-Regular',
    marginLeft: 20,
  },
});
export default styles;
