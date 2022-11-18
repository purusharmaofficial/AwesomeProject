// Example of Localization in React Native Multi Language App
// https://aboutreact.com/localization-in-react-native/

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  I18nManager,
  Pressable,
} from 'react-native';
import StringsOfLanguages from './StringsOfLanguages';
I18nManager.forceRTL(true);
// the hook
import {useTranslation} from 'react-i18next';
import NavigationServices from '../routing/NavigationServices';
const ContentScreen = ({route, navigation}) => {
  useEffect(() => {
    let heading = '';
    if (route.params.selectedLanguage == 'hi') {
      heading = 'Selected Language Hindi';
    } else if (route.params.selectedLanguage == 'ma') {
      heading = 'Selected Language Marathi';
    } else if (route.params.selectedLanguage == 'en') {
      heading = 'Selected Language English';
    } else if (route.params.selectedLanguage == 'fr') {
      heading = 'Selected Language French';
    }
    navigation.setOptions({title: heading});
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Pressable onPress={() => NavigationServices?.goBack()}>
          <Text style={styles.text}>{StringsOfLanguages.first}</Text>
          <Text style={styles.text}>{StringsOfLanguages.second}</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // alignItems: 'center',
    padding: 10,
  },
  text: {
    color: '#191919',
    fontSize: 25,
    marginTop: 15,
    // textAlign: 'right',
  },
});

export default ContentScreen;
