import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Linking } from 'react-native';

function WordPrees() {
  const [mostrarArticulos, setMostrarArticulos] = useState(false);

  // Definición del array de artículos
  const articulos = [
    {
      id: 1,
      titulo: 'Welcome to Beyond: Maybach X David LaChapelle',
      url: 'https://www.mercedes-benz.com/en/art-and-culture/zeitgeist/art/mercedes-maybach-david-lachapelle-collab/',
    },
    {
      id: 2,
      titulo: 'Freedom Drives Us.',
      url: 'https://www.mercedes-benz.com/en/innovation/milestones/freedom-drives-us/',
    },
    {
      id: 3,
      titulo: 'VISION EQXX – the most efficient Mercedes-Benz ever built.',
      url: 'https://www.mercedes-benz.com/en/innovation/concept-cars/vision-eqxx/',
    },
  ];

  const mostrarMasArticulos = () => {
    setMostrarArticulos(true);
  };

  const abrirURL = (url:any) => {
    Linking.openURL(url).catch((err) => console.error('Error al abrir la URL:', err));
  };

  return (
    <View style={estilos.contenedor}>
      <Image
        source={require('../../assets/images/image.png')}
        style={estilos.photo}
      />
      <Text style={estilos.text}>
        Mercedes Benz es una de las marcas más grandes del mundo y utiliza WordPress en su sitio web internacional. De una manera muy hábil y con un diseño personalizado de muy alta calidad y apariencia coincidente con su marca, el sitio web destaca las imágenes y vídeos de sus coches. Muchas de sus páginas cuentan con sliders a pantalla completa que muestran estas imágenes a los visitantes.
      </Text>

      {/* Botón para mostrar más artículos */}
      <TouchableOpacity style={estilos.boton} onPress={mostrarMasArticulos}>
        <Text style={estilos.textoBoton}>Mostrar más artículos</Text>
      </TouchableOpacity>

      {/* Mostrar artículos adicionales si se ha hecho clic en el botón */}
      {mostrarArticulos && (
        <View style={estilos.articulosContainer}>
          {articulos.map((articulo) => (
            <View style={estilos.articulo} key={articulo.id}>
              <Text style={estilos.tituloArticulo}>{articulo.titulo}</Text>
              <TouchableOpacity
                style={estilos.botonArticulo}
                onPress={() => abrirURL(articulo.url)}
              >
                <Text style={estilos.textoBotonArticulo}>Leer más</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
    backgroundColor: 'black',
    color: 'white',
  },
  photo: {
    width: 350,
    height: 250,
    borderRadius: 75,
    marginBottom: 10,
  },
  text: {
    color: 'white',
    margin: 15,
    textAlign: 'center',
    fontFamily: 'Times New Roman',
  },
  boton: {
    backgroundColor: 'blue',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  textoBoton: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  articulosContainer: {
    marginTop: 20,
  },
  articulo: {
    backgroundColor: '#333',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  tituloArticulo: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  resumenArticulo: {
    color: 'white',
    marginBottom: 10,
  },
  botonArticulo: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  textoBotonArticulo: {
    color: 'white',
    textAlign: 'center',
  },
});

export default WordPrees;
