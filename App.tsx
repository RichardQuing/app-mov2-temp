import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>APLICACIÓN</Text>
      <Text style={styles.subtitle}>Adrian SI VALIO, CHATOOO</Text>
      <Text style={{ fontSize:50}}>James 😎</Text>
    <Text style={styles.textito}>Elianaaaaaaaaaaaaaa</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#008080', // color de fondo
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333', // color del texto
  },
  subtitle: {
    fontSize: 30,
    color: '#000000', // color del texto secundario
  },
  text:{
  fontSize:50,
  color: 'white'
  },
  textito:{
  fontSize: 50,
  color: 'pink',
  
  }
});
    
  
