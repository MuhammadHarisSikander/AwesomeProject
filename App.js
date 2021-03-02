import React from "react";
import { View,Text } from "react-native";
import Home from "./src/Screens/screenTwo";
import { Provider as PaperProvider } from 'react-native-paper';

const App = ()=>{
  return(
    <PaperProvider>
        <Home/>
    </PaperProvider>
  )
}
export default App