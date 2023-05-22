import React, { useEffect } from 'react';
import { ActivityIndicator, Text, View, Dimensions, FlatList, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useMovies } from '../hooks/useMovies';
import { MovieCard } from '../components/MovieCard';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';

const { width: windowWidth } = Dimensions.get('window')


export const HomeScreen = () => {

    const navigation = useNavigation();
    const { moviesCine, isLoading } = useMovies();

    const { top } = useSafeAreaInsets();
    
    
    

    if(isLoading) {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignContent:'center'}}>
          <ActivityIndicator color='red' size={20} />
        </View>
      )
    }
    
  return (
    <ScrollView>

    
      <View style={{marginTop: top + 20}}>

          {/* Carrusel Principal  */}
          <View style={{height: 440,}}>
            <Carousel 
              data={moviesCine}
              renderItem={({ item }: any) => <MovieCard movie = {item} /> }
              sliderWidth={windowWidth}
              itemWidth={300}
              />
          </View>

          {/* Peliculas Populares */}
          <View style={{backgroundColor: 'red', height: 260}}>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>En cine</Text>
            <FlatList 
              data={moviesCine}
              renderItem={({ item }: any) =>( 
                <MovieCard movie = {item} width={140} height={200}/> 
              )}
              keyExtractor={(item) => item.id.toString()}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />

          </View>

      </View>
    </ScrollView>
  )
}
