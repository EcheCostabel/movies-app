import React, { useEffect } from 'react'
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import movieDB from '../api/movieDB';
import { MovieDBNowPlaying } from '../interfaces/movieInterface';

export const HomeScreen = () => {
    const navigation = useNavigation();


    useEffect(() => {
      movieDB.get<MovieDBNowPlaying>('/now_playing')
      .then( resp => {
        console.log(resp.data.results[0].title)
      })
    }, [])



  return (
    <View>
        <Text>HomeScreen</Text>

    </View>
  )
}
