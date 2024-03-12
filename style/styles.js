import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
    alignItems: 'center', 
    justifyContent: 'center', 
  },
  selectedButton: {
    backgroundColor: '#729cbd',
  },
  buttonText: {
    color: 'black', 
    
  },
  addButton: {
    padding: 10,
    backgroundColor: '#729cbd',
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 10,
  },
});

export default styles;