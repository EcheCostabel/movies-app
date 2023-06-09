import React from 'react';
import { ActivityIndicator,  View, Dimensions,  ScrollView } from 'react-native';
import { useMovies } from '../hooks/useMovies';
import { MovieCard } from '../components/MovieCard';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBackground } from '../components/GradientBackground';


const { width: windowWidth } = Dimensions.get('window')


export const HomeScreen = () => {

    const { nowPlaying, isLoading, popular, topRated, upcoming } = useMovies();

    const { top } = useSafeAreaInsets();
    
    
    

    if(isLoading) {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignContent:'center'}}>
          <ActivityIndicator color='red' size={20} />
        </View>
      )
    }

    // const getPosterColors = async(index: number) => {
    //     const movie = nowPlaying[index]
    //     const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    //     const colors = await ImageColors.getColors(uri)
    //     console.log(colors)
        
    // }
    
  return (
    <GradientBackground>
        <ScrollView>
          <View style={{marginTop: top + 20}}>

              {/* Carrusel Principal  */}
              <View style={{height: 440,}}>
                <Carousel 
                  data={nowPlaying}
                  renderItem={({ item }: any) => <MovieCard movie = {item} /> }
                  sliderWidth={windowWidth}
                  itemWidth={300}
                  inactiveSlideOpacity={0.9}
                  // onSnapToItem={(index => getPosterColors(index))}
                  />
              </View>
              <HorizontalSlider title='Popular'movies={popular}/>
              <HorizontalSlider title='Top Rated'movies={topRated}/>
              <HorizontalSlider title='Upcoming'movies={upcoming}/>
          </View>
        </ScrollView>
  </GradientBackground>
              
  )
}
