import React from 'react';
import { View, Text, FlatList, ScrollView, StyleSheet } from 'react-native';

import { Karma_400Regular, Karma_700Bold, useFonts } from '@expo-google-fonts/karma';
import { Mulish_400Regular, Mulish_700Bold } from '@expo-google-fonts/mulish';

export default function Dashboard() {
    return (
        <ScrollView style={styles.screen}>
            <View style={styles.container}>
                <Text style = {[styles.title, styles.text]}>Rimini</Text>
                <Text style = {[styles.temp, styles.text]}>25°C</Text>
                <Text style = {[styles.weatherInfo, styles.text]}>Felhős</Text> 
                <Text style = {[styles.weatherInfo, styles.text]}>Min: 18°C  Max: 28°C</Text>
            </View>
            <View>
                <Text>Előrejelzés:</Text>
                <View>
                    <Text>Hétfő - 20°C - Felhős</Text>
                    <Text>Kedd - 22°C - Napos</Text>
                    <Text>Szerda - 19°C - Eső</Text>
                    {/* stb. */}
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#ffc1b5',
    },
    container: {
        marginTop: 50,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        fontFamily: 'Mulish_400Regular',
    },
    temp: {
        fontSize: 80,
        marginVertical: 10,
        fontFamily: 'Mulish_400Regular',
    },
    weatherInfo: {
        fontSize: 20,
        fontFamily: 'Mulish_400Regular',
    },
    text: {
        color: "#343a40",
    }
});
