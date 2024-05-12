import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 10,
  },
  title: {
    textAlign: 'center',
    marginBottom: 40,
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    alignSelf: 'center',
    width: 300,
    height: 40,
    marginTop: 12,
    marginRight: 14,
    marginBottom: 25,
    marginLeft: 14,
    borderWidth: 1,
    borderColor: '#f8f4fa',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#f8f4fa',
    color: '#6a4fa7',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  containerStyle: {
    width: 100,
    marginHorizontal: 10,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: 'blue',
    textAlign: 'center',

    marginTop: 20,
  },
});

export default styles;
