import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Movie } from '../interfaces/movieInterface';


interface Props {
    movie: Movie
}

export const MovieCard = ({movie} :Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`


  return (
    <View style={{
        width: 300,
        height: 420,
        
    }}>
        <View style= {styles.imgContainer}>
            <Image
                source={{ uri }}
                style={styles.image}
            />
            
        </View>
    </View>
  )
};


const styles = StyleSheet.create({
    image: {
        flex: 1, //con esto la imagen abarca todo lo que mide su padre
        borderRadius: 18,
    },
    imgContainer: {
        flex: 1,
        borderRadius: 18,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.9,
        shadowRadius: 3.84,
        elevation: 10
    }
})