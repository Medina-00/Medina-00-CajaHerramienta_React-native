import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';

const PrediccionEdad = () => {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState(0);
  const [estado, setEstado] = useState('');
  const [imagenEstado, setImagenEstado] = useState(null);

  const consultarEdad = async () => {
    if (nombre.trim() === '') {
      alert('Por favor ingrese un nombre.');
      return;
    }

    try {
      const response = await fetch(`https://api.agify.io/?name=${nombre}`);
      const data = await response.json();

      if (data.age) {
        setEdad(data.age);

        if (data.age < 30) {
          setEstado('JOVEN!!');
          setImagenEstado(require('../../assets/images/Joven.png')); // Ajusta la ruta según la ubicación de tu imagen
        } else if (data.age >= 30 && data.age < 60) {
          setEstado('ADULTO!!');
          setImagenEstado(require('../../assets/images/Adulto.png')); // Ajusta la ruta según la ubicación de tu imagen
        } else {
          setEstado('ANCIANO!!');
          setImagenEstado(require('../../assets/images/Anciano.png')); // Ajusta la ruta según la ubicación de tu imagen
        }
      } else {
        alert('No se encontró información de edad para el nombre ingresado.');
      }
    } catch (error) {
      console.error('Error al consultar la API de Agify:', error);
      alert('Ocurrió un error al consultar la API.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>INGRESE SU NOMBRE PARA PREDECIR SU EDAD 📍 </Text>
      <TextInput
        style={styles.input}
        value={nombre}
        onChangeText={(text) => setNombre(text)}
      />
      <Button title="Consultar Edad" onPress={consultarEdad} />

      {edad !== 0 && (
        <View style={styles.resultado}>
          <Text style={styles.textoResultado}>LA EDAD DE {nombre.toUpperCase()} ES: {edad}</Text>
          <Text style={styles.textoEstado}>ESTADO: {estado.toUpperCase()}</Text>
          {imagenEstado && <Image source={imagenEstado} style={styles.imagenEstado} />}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
    color:'white'
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    color:'white',
    textAlign:'center'
  },
  resultado: {
    marginTop: 30,
    alignItems: 'center',
    color:'white',
    borderWidth:3,
    borderColor:'white',
    padding: 10,
    borderRadius: 20
  },
  textoResultado: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
    color:'white'
  },
  textoEstado: {
    fontSize: 18,
    textAlign: 'center',
    color:'white'
  },
  imagenEstado: {
    width: 200,
    height: 200,
    borderRadius: 20,
    resizeMode: 'contain',
    
  },
});

export default PrediccionEdad;
