import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Home from './screens/Home';
import styles from './styles/homeStyles';
function App(): React.JSX.Element {
  return (
    <SafeAreaProvider style={styles.bg}>
      <Home />
    </SafeAreaProvider>
  );
}
export default App;
