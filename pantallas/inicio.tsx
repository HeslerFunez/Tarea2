import React, {useState} from 'react';
import { ScrollView, StyleSheet, Text, Button, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Inicio = ({navigation}) => {

    const handlePress = ()=> {
        navigation.navigate('Mi Persona');
    }

    const handlePress2 = ()=> {
        navigation.navigate('linusT');
    }

    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={styles.contenedor}>
                <Text style={styles.encabezado}>¡¡Bienvenidos!!</Text>
                <View style={styles.vista}>
                    <Button title='Mi Persona' onPress={handlePress}/>
                </View>
                <View style={styles.vista}>
                    <Button title='Linus Torvalds' onPress={handlePress2} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    contenedor:{
        alignItems: 'center',
    },
    encabezado:{
        fontSize: 36,
        fontWeight: 'bold',
        color: 'blue',
    },
    vista:{
        marginTop: 4,
        marginBottom: 2,
    }
});

export default Inicio;