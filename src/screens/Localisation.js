// import React from 'react';
// import {Pressable, Text, View} from 'react-native';
// import NavigationServices from '../routing/NavigationServices';
// import LocalizedStrings from 'react-native-localization';
// let strings = new LocalizedStrings({
//   'en-US': {
//     how: 'How do you want your egg today?',
//     boiledEgg: 'Boiled egg',
//     softBoiledEgg: 'Soft-boiled egg',
//     choice: 'How to choose the egg',
//   },
//   en: {
//     how: 'How do you want your egg today?',
//     boiledEgg: 'Boiled egg',
//     softBoiledEgg: 'Soft-boiled egg',
//     choice: 'How to choose the egg',
//   },
//   it: {
//     how: 'Come vuoi il tuo uovo oggi?',
//     boiledEgg: 'Uovo sodo',
//     softBoiledEgg: 'Uovo alla coque',
//     choice: "Come scegliere l'uovo",
//   },
// });

// const Localisation = () => {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}>
//       <Text>{strings.how}</Text>
//       <Pressable
//         style={{
//           position: 'absolute',
//           right: 10,
//           bottom: 20,
//           height: 40,
//           //   width: 50,
//           backgroundColor: '#ACD49C',
//         }}
//         onPress={() => NavigationServices?.navigate('AnimationScreen')}>
//         <Text>Animation</Text>
//       </Pressable>
//     </View>
//   );
// };
// export default Localisation;
// Example of Localization in React Native Multi Language App
// https://aboutreact.com/localization-in-react-native/

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
} from 'react-native';
import NavigationServices from '../routing/NavigationServices';
import StringsOfLanguages from './StringsOfLanguages';

const Localisation = ({navigation}) => {
  const lang = [
    {shortform: 'hi', longform: 'Hindi'},
    {shortform: 'ma', longform: 'Marathi'},
    {shortform: 'en', longform: 'English'},
    {shortform: 'fr', longform: 'French'},
  ];

  const settext = value => {
    StringsOfLanguages.setLanguage(value);
    NavigationServices.navigate('ContentScreen', {selectedLanguage: value});
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.headingStyle}>
          Select Preferred Language for the App
        </Text>

        <ScrollView style={{marginTop: 30, width: '80%'}}>
          {lang.map((item, key) => (
            <View style={styles.elementContainer} key={key}>
              <Text
                onPress={() => settext(item.shortform)}
                style={styles.textStyle}>
                {item.longform}
              </Text>
              <View style={styles.saparatorStyle} />
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  headingStyle: {
    color: '#191919',
    fontSize: 25,
    textAlign: 'center',
  },
  imageStyle: {
    width: 64,
    height: 64,
    marginTop: 30,
  },
  elementContainer: {
    width: '100%',
    marginTop: 30,
    alignItems: 'center',
  },
  textStyle: {
    color: '#191919',
    fontSize: 25,
  },
  saparatorStyle: {
    height: 0.5,
    width: '60%',
    backgroundColor: '#C2C2C2',
    marginTop: 10,
  },
});

export default Localisation;
