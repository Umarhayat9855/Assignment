
import * as React from 'react';
import { View, Text ,SafeAreaView,StatusBar} from 'react-native';
import Navigation from './Navigation/tabNavigation';
import Login from './src/Screen/splashScreen';
function App() {
  return (
      <View style={{flex:1}}>
        <Navigation/>
      </View>
  );
}

export default App;