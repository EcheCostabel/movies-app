import React, { useEffect } from 'react'
import { ActivityIndicator, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useMovies } from '../hooks/useMovies';
import { MovieCard } from '../components/MovieCard';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';


export const HomeScreen = () => {

    const navigation = useNavigation();
    const { moviesCine, isLoading } = useMovies();

    const { top } = useSafeAreaInsets()
    
    

    if(isLoading) {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignContent:'center'}}>
          <ActivityIndicator color='red' size={20} />
        </View>
      )
    }
    

  return (
    <View style={{marginTop: top + 20}}>
        <MovieCard movie = {moviesCine[0]} />

    </View>
  )
}
