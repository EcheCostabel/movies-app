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
import { HorizontalSlider } from '../components/HorizontalSlider';

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
              inactiveSlideOpacity={0.9}
              />
          </View>

          {/* Peliculas Populares */}
          
          <HorizontalSlider title='En cine'movies={moviesCine}/>
      </View>
    </ScrollView>
  )
}
