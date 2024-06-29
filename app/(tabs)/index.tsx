import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const index = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/Cajaherramienta.png')}
        style={styles.photo}
      />
     
      <Text style={styles.text}>
        BIENVENIDO A LA CAJA DE HERRAMIENTAS!!🛠️
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
    width: 350,
    height: 350,
    borderRadius: 75,
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
    color:'white',
    fontFamily: 'Times New Roman',
    borderWidth:2,
    borderColor: 'white',
    borderRadius:30
  },
  
});

export default index;