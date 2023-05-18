import React from 'react'
import { Button } from 'react-native'
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const HomeScreen = () => {

    const navigation = useNavigation()

  return (
    <View>
        <Text>HomeScreen</Text>

        <Button
            title='ir detalle'
            onPress={() => navigation.navigate('DetailScreen')}
        />
    </View>
  )
}
