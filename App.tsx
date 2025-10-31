import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {


  const [name, setName] = useState<String>('Emanuel');;
  const [senha, setSenha] = useState<String>('');;

  return (
    <View style={styles.container}>

      <View style={styles.loginContainer}>
        <Text style={{ fontSize: 30, textAlign: 'center' }}>Olá, {name}</Text>
        {/* LOGIN */}
        <Text style={styles.text}>Login</Text>
        <TextInput
          onChangeText={setName}
          style={styles.textInput}
          placeholder='Digite seu email' />

        {/* SENHA */}
        <Text style={styles.text}>Senha</Text>
        <TextInput
          onChangeText={setSenha}
          style={styles.textInput} secureTextEntry placeholder='Digite sua senha' />

        {/* BOTÃO */}
        <Button title="Entrar" />
      </View>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0072be',
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 30
  },
  loginContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 5
  },
  text: {
    color: 'black'
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    marginBottom: 10
  }
});
