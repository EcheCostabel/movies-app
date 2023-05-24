import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { Navigation } from './src/navigation/Navigation';
import { FadeScreen } from './src/screens/FadeScreen';
import { SafeAreaView } from 'react-native-safe-area-context';



const App = () => {


  return (


    <NavigationContainer>
      <Navigation />
    </NavigationContainer>

  )
}


export default App;