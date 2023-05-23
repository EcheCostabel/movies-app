import React from 'react';
import { Text, View } from 'react-native';
import currencyFormatter from 'currency-formatter';
import { MovieFull } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/creditsInterface';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { CastItem } from './CastItem';

interface Props {
    movieFull: MovieFull;
    cast: Cast[]
}

export const MovieDetails = ({movieFull, cast}: Props) => {
  return (
    <>
        {/* DETALLES */}
        <View style={{marginHorizontal: 20}}>
            <View style={{flexDirection: 'row'}}>
                <Icon 
                    name='star-outline'
                    color= 'grey'
                    size={16}
                />
                <Text> {movieFull.vote_average}</Text>
                <Text style={{marginLeft: 5}}>
                    - {movieFull.genres.map( genre => genre.name).join(', ')}
                </Text>
            </View>


            {/* Historia de la pelicula */}
            <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
                Historia
            </Text>

            <Text style={{fontSize:16}}>{ movieFull.overview}</Text>


            {/* Presupuesto */}
            <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
                Presupuesto
            </Text>
            <Text style={{fontSize:18}}>{currencyFormatter.format(movieFull.budget, { code:'USD'})}</Text>
        </View>


        {/* CASTING */}
        <View style={{marginTop: 10, marginBottom: 100}}>
        <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold', marginHorizontal: 20, }}>
                Actores
            </Text>
            <CastItem 
                actor={cast[0]}
            />
        </View>

    </> 
  )
}
