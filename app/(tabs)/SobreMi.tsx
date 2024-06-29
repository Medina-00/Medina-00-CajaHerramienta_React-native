import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const SobreMi = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/fotoPerfil.jpg')}
        style={styles.photo}
      />
      <Text style={styles.text}>
        ¡Contáctame para futuros proyectos!
      </Text>
      <Text style={styles.contactInfo}>
        Nombre: Luis Angel Morel Medina
        {'\n'}
        {'\n'}
        Teléfono: 809-753-7245
        {'\n'}
        {'\n'}
        Correo electrónico: lmorelmedina@gmail.com
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'black',
    color:'white'
  },
  photo: {
    width: 250,
    height: 350,
    borderRadius: 75,
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
    color:'white',
    fontFamily: 'Times New Roman'
  },
  contactInfo: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
    fontStyle: 'italic',
    color:'white',
    fontFamily: 'Times New Roman',
  },
});

export default SobreMi;