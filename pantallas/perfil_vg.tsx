
import React, {useState} from 'react';
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
  } from 'react-native';


const Perfil_VG = () =>{
  const [comentario, setComentario] = useState('Hola Mundo');

  return (
    <SafeAreaView>
     
      <ScrollView
       contentContainerStyle={styles.svContenedor}
       contentInsetAdjustmentBehavior="automatic">
        <Text style={styles.encabezado}>Dany Phantom</Text>
        <Image source={require('../imagenes/dany_phantom.jpg')} />
        
        <View style={styles.seccion}>
          <Text style={styles.seccionHeader}>Lugar de Nacimiento:</Text>
          <Text style={styles.seccionContent}>Texas, Estados Unidos</Text>
        </View>

        <View style={styles.seccion}>
          <Text style={styles.seccionHeader}>Fecha de Nacimiento:</Text>
          <Text style={styles.seccionContent}>3 de Febrero del 2003</Text>
        </View>

        <View style={styles.seccion}>
          <Text style={styles.seccionHeader}>Fecha de Fallecimiento:</Text>
          <Text style={styles.seccionContent}>9 de Julio del 2009</Text>
        </View>

        <View style={styles.seccion}>
          <TextInput style={styles.comentario} placeholder="Comentario" 
            defaultValue={comentario}
            onChangeText={texto => {
              setComentario(texto);
            }}

          />
        </View>

        <View style={styles.seccion}>
          <Text style={styles.seccionHeader}>Último Comentario:</Text>
          <Text style={styles.seccionContent}>{comentario}</Text>
        </View> 
      </ScrollView>
    </SafeAreaView>

    
  );

};

const styles = StyleSheet.create({
    encabezado:{
      fontSize: 36,
      fontWeight: 'bold',
      color: '#FF00FF',
      //width: 30,
    },
    svContenedor:{
      alignItems: 'center',
      //flexDirection: 'row',
      //flexWrap: 'wrap',
    },
    fotoPerfil:{
      //width: 220,
      //height: 200,
    },
    seccion:{
      flexDirection: 'row',
      marginTop: 10,
    },
    seccionHeader:{
      fontSize: 18,
      fontWeight: 'bold',
  
    },
    seccionContent:{
      fontSize: 18,
      marginStart: 5,
    },
    comentario:{
      height: 40
    }
  });

export default Perfil_VG;