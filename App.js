import React, {useEffect} from 'react';
import {
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
  View,
  Text,
} from 'react-native';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

//Redux
import {Provider} from 'react-redux';
import store from './src/store';
import {loadUser} from './src/actions/auth';
import DefaultStackScreen from './src/components/layout/DefaultStackScreen';
//import setAuthToken from './src/utils/setAuthToken';
//import AsyncStorage from '@react-native-async-storage/async-storage';

// if (AsyncStorage.token) {
//   setAuthToken(AsyncStorage.token);
// }
const App = () => {
  // useEffect(() => {
  //   store.dispatch(loadUser());
  // }, [loadUser]);

  return (
    <>
      <React.Fragment>
        {/* <View>
          <Text>sadasdas</Text>d
        </View> */}
        <StatusBar
          backgroundColor="#0C6CD5"
          barStyle="light-content"></StatusBar>
        <NavigationContainer>
          <DefaultStackScreen />
        </NavigationContainer>
      </React.Fragment>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
