import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import RootStack from './src/routing/RootStack';
import {Provider} from 'react-redux';
// import { store, persistor } from './store/ConfigureStore'
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return <RootStack />;
};

export default App;
