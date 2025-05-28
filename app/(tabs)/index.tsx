import { Image } from 'expo-image';
import React, { useState } from 'react';
import { Platform, StyleSheet } from 'react-native';
import { View, Text, TextInput, Button } from 'react-native';
import { Karma_400Regular, Karma_700Bold, useFonts } from '@expo-google-fonts/karma';
import { Mulish_400Regular, Mulish_700Bold } from '@expo-google-fonts/mulish';
import { Pressable } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';


export default function HomeScreen() {

  useFonts({
    Karma_400Regular,
    Karma_700Bold,
    Mulish_400Regular,
    Mulish_700Bold,
  });

  const [city, setCity] = useState('');
  const [date, setDate] = useState('');
  const [days, setDays] = useState('');

  const [weatherData, setWeatherData] = useState(null);

  const handleSubmit = async () => {
  if (!city) {
    alert('Kérlek, add meg a város nevét!');
    return;
  }

  if (!days) {
    alert('Kérlek, add meg a napok számát (1-16 között)!');
    return;
  }

  try {
    const apiKey = '313ea7a23a89a44aeb549b5588641c85'; 
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&lang=hu`;

    const response = await fetch(url);  
    if (!response.ok) {
      throw new Error('Hiba történt az adatok lekérésekor');
    }

    const data = await response.json();
    console.log(data);
    setWeatherData(data);
  } catch (error) {
    console.error('Hiba:', error);
  }
};

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Szia Rebeka!</Text>
      <Text style={styles.h2}>Hová szeretnél utazni?</Text>

      <TextInput
        style={styles.input}
        placeholder="Add meg a várost"
        value={city}
        onChangeText={setCity}
      />

      <TextInput
        style={styles.input}
        placeholder="Mikor indulsz? (YYYY-MM-DD)"
        value={date}
        onChangeText={setDate}
      />

      <TextInput 
        style={styles.input}
        placeholder="Hány napra mész?"
        value={days}
        onChangeText={setDays}
      />
      <Text>Megjegyzés: Maximum 2 héttel az utazás előtt tudod lekérni az időjárás adatokat, és legfeljebb 16 napnyit.</Text>

      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Lekérdezés</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6bd60',
    padding: 20,
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
  },
  h1: {
    fontFamily: 'Karma_700Bold',
    fontSize: 30,
    textAlign: 'center',
    color: '#ffffff',
  },
  h2: {
    fontFamily: 'Karma_400regular',
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: '#ffffff',
  },
  input: {
    borderWidth: 1,
    fontFamily: 'Mulish_400Regular',
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
    width: '80%',
  },
  button: {
    backgroundColor: '#faedcd',
    padding: 10,
    borderRadius: 5,
    marginTop: 30,
    alignItems: 'center',
    width: '40%',
  },
  buttonText: {
    fontFamily: 'Mulish_700Bold',
    fontSize: 18,

  },
  note: {
    fontFamily: 'Mulish_400Regular',
    fontSize: 14,
    textAlign: 'center',
  }

});
