import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    TextInput,
    Button,
} from 'react-native';
import Evaluacion from '../components/evaluacion/Evaluacion';


const LinusT = ({navigation}) => {

    const [calificacion, setCalificacion] = useState(0);

    const handleCalificacionChange = (valor: number)=> {
        if(calificacion == 1 && valor == 1){
            setCalificacion(0);
        } else {
            setCalificacion(valor);
        }
    }
    
    const handlePress = ()=> {
        navigation.navigate('Home');
    }
    
    return (

        <SafeAreaView>
            <ScrollView
                contentContainerStyle={styles.svContenedor}
                contentInsetAdjustmentBehavior="automatic">
                <Image style={styles.fotoPerfil} source={require('../imagenes/linus_torvalds.jpeg')} />

                <View>
                    <Evaluacion calificacion={calificacion} onCalificacionChange={handleCalificacionChange} />
                </View>

                <View style={styles.seccion}>
                    <Text style={styles.seccionHeader}>Nombre:</Text>
                    <Text style={styles.seccionContent}>Torvalds Benedict Linus</Text>
                </View>

                <View style={styles.seccion}>
                    <Text style={styles.seccionHeader}>Fecha de Nacimiento:</Text>
                    <Text style={styles.seccionContent}>28 de Diciembre del 1969</Text>
                </View>

                <View style={styles.seccion}>
                    <Text style={styles.seccionHeader}>Residencia:</Text>
                    <Text style={styles.seccionContent}>Helsinki, Finlandia</Text>
                </View>

                <View style={styles.seccion}>
                    <Text style={styles.seccionHeader}>Contribución:</Text>
                    <Text style={styles.seccionContent}>Fundador del nucleo de Linux</Text>
                </View>

                <View style={styles.seccionBoton}>
                    <Button title="Regresar" onPress={handlePress} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    svContenedor: {
        alignItems: 'center',
        marginTop: 10,
    },
    fotoPerfil: {
        width: 220,
        height: 290,
    },
    encabezado: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#FF00FF',
    },
    seccion: {
        flexDirection: 'row',
        marginTop: 10,
        borderWidth: 3,
        borderColor: 'blue',
        padding: 2,
    },
    seccionHeader:{
        fontSize: 17,
        fontWeight: 'bold',
    },
    seccionContent:{
        fontSize: 17,
        marginStart: 5,
    },
    seccionBoton:{
        marginTop: 10,
    }
});

export default LinusT;