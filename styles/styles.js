import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignSelf: 'center',
    marginLeft: 20,
    marginRight: 20,
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
    marginRight: 12,
    marginBottom: 25,
    marginLeft: 12,
    borderWidth: 1,
    borderColor: '#dedefb',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#dedefb',
    color: 'black',
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
});

export default styles;
