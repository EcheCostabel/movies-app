import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Image, View, StyleSheet, Dimensions, ScrollView, Text, TouchableOpacity } from 'react-native';
import { RootStackParams } from '../navigation/Navigation';
import Icon from 'react-native-vector-icons/Ionicons'
import { useMovieDetails } from '../hooks/useMovieDetails';
import { ActivityIndicator } from 'react-native';
import { MovieDetails } from '../components/MovieDetails';
import { SafeAreaView } from 'react-native-safe-area-context';


const screenHeight = Dimensions.get('screen').height


interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'>{}


export const DetailScreen = ({route, navigation}: Props) => {

  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const { isLoading, cast, movieFull } =  useMovieDetails(movie.id);



  

  return (
<SafeAreaView>
    <ScrollView>
        <View style={styles.imageContainer}>
          <View style={styles.imageBorder}>
            <Image
              source={{uri}}
              style = {styles.posterImage}
              />
          </View>
        </View>

        <View style={styles.marginContainer}>
          <Text style={styles.subtitle}>{movie.original_title}</Text> 
          <Text style={styles.title}>{movie.title}</Text> 
        </View>

       
          {
            isLoading 
            ? <ActivityIndicator size={30}color='grey'style={{marginTop: 20}} />
            : <MovieDetails movieFull={movieFull!} cast={cast}  />
          }

          {/* Boton para cerrar */}
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.pop()}>
              <Icon 
                color='white'
                name='arrow-back-outline'
                size={40}
                style={{padding: 15}}
                />
          </TouchableOpacity>
     </ScrollView>
 </SafeAreaView>
  )
};


const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: screenHeight * 0.7, //Aca le digo que me ocupe el 70% de la altura
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2
    },
    shadowOpacity: 0.9,
    shadowRadius: 3.84,
    elevation: 9,

  },
  posterImage: {
    flex: 1
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20
  },
  subtitle:{
    fontSize: 16,
    opacity: 0.8
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25
  },
  backButton: {
    backgroundColor: 'black',
    borderRadius: 100,
    position: 'absolute',
    zIndex: 999,
    elevation: 9,
    top: 30,
    left: 5
  }
})
 
