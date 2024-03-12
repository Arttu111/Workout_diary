import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    margin: 10,
    borderRadius: 15
  },
  itemText: {
    fontSize: 20,
    fontFamily: 'Arial',
  },
  sportTotal: {
    textAlign: 'center',
    marginLeft:100,
    fontSize: 18,
   
    marginTop: 10,
    padding: 10,
    width: 200
  },
  
  runningBackground: {
    backgroundColor: '#1985a1',
  },
  swimmingBackground: {
    backgroundColor: '#089bcc',
  },
  skiingBackground: {
    backgroundColor: '#4666ff',
  },
});

export default styles;
