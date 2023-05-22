import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Image, View, StyleSheet, Dimensions, ScrollView, Text } from 'react-native';
import { RootStackParams } from '../navigation/Navigation';

const screenHeight = Dimensions.get('screen').height


interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'>{}


export const DetailScreen = ({route}: Props) => {

  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  

  return (

    <ScrollView>

        <View style={styles.imageContainer}>
            <Image
              source={{uri}}
              style = {styles.posterImage}
              />
        </View>

        <View style={styles.marginContainer}>
          <Text style={styles.subtitle}>{movie.original_title}</Text> 
          <Text style={styles.title}>{movie.title}</Text> 
        </View>

    
    </ScrollView>
  )
};


const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    overflow: 'hidden',
    height: screenHeight * 0.7, //Aca le digo que me ocupe el 70% de la altura
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2
    },
    shadowOpacity: 0.9,
    shadowRadius: 3.84,
    elevation: 9,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25
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
  }
})
 
