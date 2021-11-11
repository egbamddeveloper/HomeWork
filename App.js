/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
} from 'react-native';

import Coffee from './src/components/Coffee';

const coffees_array = ['Black',
  'Crystal',
  'Cut nipped',
  'Faded Amber',
  'Faded Oldish',
  'Faded Over dried',
  'Faded Streaked',
  'Immature',
  'Insects',
  'Moldy',
  'Pressed Crushed',
  'Shrunk',
  'Sour',
  'Under Dried'
];

const App = () => {
  return (
    <SafeAreaView style={styles.main}>
      <StatusBar />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">

        {coffees_array.map((item, index) => {
          return (<Coffee
            key={index}
            name={item} />
          );
        })}

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
    flex: 1,
    padding: 15
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
