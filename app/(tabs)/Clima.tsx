import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image } from 'react-native';

const Clima = () => {
  const [weatherData, setWeatherData] = useState<any>(null);
  const apiKey = 'c94a2f90b2b6e6c8dc2beba9edc72331'; 

  useEffect(() => {
    const fetchWeather = async () => {
      const city = 'Santo Domingo,DO';
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        setWeatherData(jsonData);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeather();
  }, []);

  if (!weatherData) {
    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={styles.title}>Cargando...</Text>
      </View>
    );
  }

  const { main, weather } = weatherData;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Estado del tiempo en {weatherData.name}</Text>
      <View style={styles.weatherContainer}>
        <Image
          style={styles.weatherIcon}
          source={{ uri: `https://openweathermap.org/img/wn/${weather[0].icon}.png` }}
        />
        <Text style={styles.title}>Temperatura: {kelvinToCentigrade(main.temp)}°C</Text>
        <Text style={styles.title}>Descripción: {weather[0].description}</Text>
      </View>
    </View>
  );
};

function kelvinToCentigrade(temp:any) {
 
  

  return (temp - 273.15).toFixed(1);
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    color:'white'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'white'
  },
  weatherContainer: {
    backgroundColor: 'black',
    padding: 20,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#ccc',
    marginTop: 20,
    alignItems: 'center',
    color:'white'
  },
  weatherIcon: {
    width: 100,
    height: 100,
    marginVertical: 10,
    color:'white'
  },
});

export default Clima;
