import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import Clipboard from 'expo-clipboard'

let charset ='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

export default function app () {

  const [password, setPassword] = useState ('');
  const [size, setSize] = useState (5);

  function generatePass (){
    let pass = "";
    for (let i = 0, n = charset.length; i < size; i++) {
      pass += charset.charAt(Math.floor(Math.random() * n));
    }

    setPassword(pass);
  }

  function copyPass () {
    Clipboard.setString(password);
    alert('Senha copiada com sucesso!')
  }


  return (
    <View style={styles.container}>
      <Image
        source={require("./src/assets/img/logo.png")}
        style={styles.logo}
      />
      <Text style={styles.title}> {size} caracteres </Text>

      <View style={styles.area}>
        <Slider
          style={{ height: 50 }}
          minimumValue={5}
          maximumValue={15}
          minimumTrackTintColor="#ff0000"
          maximumTrackTintColor="#000"
          value={5}
          onValueChange={(valor) => setSize(valor.toFixed(0))}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={generatePass}>
        <Text style={styles.buttonText}> Gerar Senha </Text>
      </TouchableOpacity>

      {password !== "" && (
        <View style={styles.area}>
          <Text style={styles.password} onLongPress={copyPass}> {password} </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f3ff'
  },
  logo:{
    marginBottom: 60,
  },
  title:{
    fontSize: 25,
    fontWeight: 'bold'
  },
  area:{
    backgroundColor: '#fff',
    marginBottom: 15,
    marginTop: 15,
    width:'80%',
    borderRadius: 8
  },
  button:{
    backgroundColor:'#ffa200',
    width:'80%',
    height:10,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:8,
    marginBottom:25
  },
  buttonText:{
    color:'#fff',
    fontWeight: 'bold',
    fontSize:20
  },
  password:{
    padding:10,
    textAlign:'center',
    fontSize:20
  }

});
