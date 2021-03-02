import React from "react";
import { Text, View,Linking } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from "react-native-paper";
import QRCodeScanner from 'react-native-qrcode-scanner';

const Home = ()=>{

    return(
        <View  style={{display:'flex',flex:1,borderWidth:1,borderColor:'red'}}>
            <View style={{justifyContent:'space-between',flex:1,marginVertical:20}} >
            <Text style={{textAlign:'center',fontSize:25}} >
                QR Code Scanner
            </Text>
            <Button icon="camera" onPress={()=>{console.log("Hello");}} >Click Me</Button>
            </View>
        </View>
    )
}
export default Home