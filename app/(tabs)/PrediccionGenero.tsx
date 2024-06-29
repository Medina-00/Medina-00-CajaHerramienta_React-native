import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const PrediccionGenero = () => {
  const [nombre, setNombre] = useState('');
  const [genero, setGenero] = useState('');
  const [colorFondo, setColorFondo] = useState('');
  
  const consultarGenero = async () => {
    if (nombre.trim() === '') {
      alert('Por favor ingrese un nombre.');
      return;
    }

    try {
      const response = await fetch(`https://api.genderize.io/?name=${nombre}`);
      const data = await response.json();

      if (data.gender === 'male') {
        setGenero('Masculino');
        setColorFondo('blue');
      } else if (data.gender === 'female') {
        setGenero('Femenino');
        setColorFondo('pink');
      } else {
        setGenero('Desconocido');
        setColorFondo('white');
      }
    } catch (error) {
      console.error('Error al consultar la API de Genderize:', error);
      alert('Ocurrió un error al consultar la API.');
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: colorFondo ?  colorFondo : 'black'  }]}>
      <Text style={styles.label}>INGRESE UN NOMBRE PARA PREDECIR SU GENERO 📍 </Text>
      <TextInput
        style={styles.input}
        value={nombre}
        onChangeText={(text) => setNombre(text)}
      />
      <Button title="Consultar" onPress={consultarGenero} />
      {genero !== '' && (
        <Text style={styles.resultado}>
          EL GENERO DE {nombre.toUpperCase()} ES: {genero.toUpperCase()}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    color: 'white',
    textAlign:'center'
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'white',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: 'black',
    color: 'white',
    textAlign: 'center'
  },
  resultado: {
    fontSize: 20,
    marginTop: 20,
    textAlign: 'center',
    color: 'white'
  },
});

export default PrediccionGenero;
