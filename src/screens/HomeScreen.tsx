import React, { useEffect } from 'react'
import { ActivityIndicator, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import movieDB from '../api/movieDB';
import { MovieDBNowPlaying } from '../interfaces/movieInterface';
import { useMovies } from '../hooks/useMovies';

export const HomeScreen = () => {
    const navigation = useNavigation();

    const { moviesCine, isLoading } = useMovies();

    if(isLoading) {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignContent:'center'}}>
          <ActivityIndicator color='red' size={20} />
        </View>
      )
    }
    

  return (
    <View>
        <Text>HomeScreen</Text>

    </View>
  )
}
