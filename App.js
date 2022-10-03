import { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  let [info, setInfo] = useState("")
  const [nome, setNome] = useState("")
  const [cargo, setCargo] = useState("")
  const [salario, setSalario] = useState("")

  const [lida, setLida] = useState("")


  const salvar = async() => {
    try {
      info = {
        'nome': nome,
        'cargo': cargo,
        'salario': salario
      }

      await AsyncStorage.setItem("data", info)
      setInfo("")
      console.log(info)
    } catch(err){
      console.log(err)
    }
  }

  const ler = async () => {
    try{
      const nome = JSON.stringify(info.nome)
      const cargo = JSON.stringify(info.cargo)
      const salario = JSON.stringify(info.salario)
      setLida("Nome:" + nome + "Cargo:" + cargo + "Salário:" + salario)
    } catch(err){
      console.log(err)
    }
  }

  return (
    <View style={styles.container}>
      
      <Text>Nome: </Text>
      <TextInput onChangeText = {(val) => { setNome(val)}} />

      <Text>Cargo: </Text>
      <TextInput onChangeText = {(val) => { setCargo(val)}} />

      <Text>Salário: </Text>
      <TextInput onChangeText = {(val) => { setSalario(val)}} />


      <Button title = "Salvar" onPress = {() => { salvar() }}/>
      <Button title = "Ler" onPress = {() => { ler() }}/>
      <Text>{lida}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
