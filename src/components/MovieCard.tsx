import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import { useNavigation } from '@react-navigation/native';


interface Props {
    movie: Movie;
    height?: number;
    width?: number
}

export const MovieCard = ({movie, height = 420, width = 300} :Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const navigation = useNavigation();


  return (
    <TouchableOpacity 
    onPress={() => navigation.navigate('DetailScreen', movie)}
    activeOpacity={0.8}
    style={{
        width,
        height,
        marginHorizontal: 5
    }}>
        
        <View style= {styles.imgContainer}>
            <Image
                source={{ uri }}
                style={styles.image}
            />
            
        </View>
    </TouchableOpacity>
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
        elevation: 9
    }
})
