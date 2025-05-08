import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#ffff',
  },
  section: {
    paddingBottom: 50,
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
    padding: 15,
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
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {width: -10, height: 6},
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 5,
  },
  contians: {
    width: 200,
    borderLeftWidth: 1,
    borderLeftColor: '#f2f0f0',
  },
  calendar: {
    width: 11,
    height: 11,
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
  searchContainer: {
    padding: 10,
    marginTop: 50,
  },
  searchInput: {
    height: 50,
    borderColor: '#9e9e9e',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 20,
    fontSize: 16,
    width: '95%',
    margin: 'auto',
    color: '#000',
    fontFamily: 'Poppins-Regular',
  },
});
export default styles;
