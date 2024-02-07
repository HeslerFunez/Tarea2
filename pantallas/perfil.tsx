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
import { Float } from 'react-native/Libraries/Types/CodegenTypes';


const Perfil = ({navigation}) => {

    const [calificacion, setCalificacion] = useState(0);

    const handleCalificacionChange = (valor: Float)=> {
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
                <Image source={require('../imagenes/mi_persona.jpg')} />

                <View>
                    <Evaluacion calificacion={calificacion} onCalificacionChange={handleCalificacionChange} />
                </View>

                <View style={styles.seccion}>
                    <Text style={styles.seccionHeader}>Nombre:</Text>
                    <Text style={styles.seccionContent}>Hesler Aldair Fúnez</Text>
                </View>

                <View style={styles.seccion}>
                    <Text style={styles.seccionHeader}>Fecha de Nacimiento:</Text>
                    <Text style={styles.seccionContent}>3 de Enero del 2001</Text>
                </View>

                <View style={styles.seccion}>
                    <Text style={styles.seccionHeader}>Pasatiempos:</Text>
                    <Text style={styles.seccionContent}>Leer libros y Jugar Video Juegos</Text>
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

export default Perfil;
