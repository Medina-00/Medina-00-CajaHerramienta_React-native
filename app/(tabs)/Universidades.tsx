import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet, Linking } from 'react-native';


  

const Universidades = () => {
  const [pais, setPais] = useState('');
  const [universidades, setUniversidades] = useState<any>([]);

  const buscarUniversidades = () => {
    if (pais.trim() === '') {
      alert('Por favor ingrese un nombre de país en inglés.');
      return;
    }

    

    fetch(`http://universities.hipolabs.com/search?country=${encodeURIComponent(pais)}`)
      .then(response => response.json())
      .then(data => {
        setUniversidades(data);
      })
      .catch(error => {
        console.error('Error al buscar universidades:', error);
        alert('Ocurrió un error al buscar las universidades.');
      });
  };

  const abrirEnlace = (url:any) => {
    Linking.openURL(url).catch(err => console.error('Error al abrir el enlace:', err));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>INGRESE UN PAIS EN INGLES, PARA MOSTRAR SUS UNIVERSIDADES 📍</Text>
      <TextInput
        style={styles.input}
        value={pais}
        onChangeText={text => setPais(text)}
        placeholder="Ej. Dominican Republic"
        placeholderTextColor='white'
      />
      <Button title="Buscar Universidades" onPress={buscarUniversidades} />

      <ScrollView style={styles.resultadosContainer}>
        {universidades.map((uni:any, index:any) => (
          <View key={index} style={styles.universidadCard}>
            <Text style={styles.nombre}>{uni.name}</Text>
            <Text style={styles.dominio}>Dominio: {uni.domains.join(', ')}</Text>
            <Text style={styles.enlace} onPress={() => abrirEnlace(uni.web_pages[0])}>
              Página Web: {uni.web_pages[0]}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 20,
    paddingTop: 50
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
  resultadosContainer: {
    flex: 1,
    width: '100%',
    marginTop: 20,
    color:'white'
  },
  universidadCard: {
    backgroundColor: 'black',
    padding: 10,
    marginBottom: 10,
    borderRadius: 15,
    color:'white',
    borderWidth:2,
    borderColor:'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nombre: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'white'
  },
  dominio: {
    fontSize: 14,
    marginTop: 5,
    color:'white'
  },
  enlace: {
    fontSize: 14,
    color: 'blue',
    textDecorationLine: 'underline',
    marginTop: 5,
    textAlign:'center'
  },
});

export default Universidades;
