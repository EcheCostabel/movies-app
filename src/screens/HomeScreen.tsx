import React, { useEffect } from 'react'
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import movieDB from '../api/movieDB';

export const HomeScreen = () => {
    const navigation = useNavigation();


    useEffect(() => {
      movieDB.get('/now_playing')
      .then( resp => {
        console.log(resp.data)
      })
    }, [])



  return (
    <View>
        <Text>HomeScreen</Text>
        {/* <Button
            title='ir detalle'
            onPress={() => navigation.navigate('DetailScreen')}
        /> */}
    </View>
  )
}
