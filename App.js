/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {SafeAreaView, ScrollView, View, Text} from 'react-native';

const App = ({navigation}) => {
  return (
    <SafeAreaView x={console.log(navigation)}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <View>
            <Text>Hello react-native!</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
