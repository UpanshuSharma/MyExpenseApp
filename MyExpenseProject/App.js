import React from 'react'
import Main from './navigation/Main';

import { Provider as PaperProvider } from 'react-native-paper';

const App = () => {
  return (
    
    <PaperProvider>
        <Main/>
    </PaperProvider>
  )
}

export default App;
