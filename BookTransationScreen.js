import React, { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner';

export default class BookTransationScreen extends React.Component{
    constructor(){
        super()
        this.state={
            hasCameraPermission:null,
            scanned:false,
            scannedData:'',
            buttonState:'normal'
        }
    }
    
    getCameraPermisssion=async()=>{
    const {status}=await Permissions.askAsync(Permissions.CAMERA)
    this.setState({
        hasCameraPermission:status=='branted'
    })
    }

    handleBarCodeScanned=async({type,data})=>{
    this.setState({
        scanned:true,
        scannedData:data,
        buttonState:'normal'
    })
    }
    render(){
        const hasCameraPermission=this.state.hasCameraPermission
        const scanned=this.state.scanned
        const buttonState=this.state.buttonState
        if(buttonState=='clicked'&&hasCameraPermission){
            return(
                <BarCodeScanner
                onBarCodeScanned={scanned?undefined:this.handleBarCodeScanned}/>
            )
        }
        else if(buttonState=='normal'){

        
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text style={styles.displayText}>
{                 hasCameraPermission==true? this.state.scannedData: 'request camera permission'
}                </Text>
             <TouchableOpacity style={styles.scanButton} 
             onPress={this.getCameraPermisssion}>
              <Text style={styles.buttonText}>
              scan QR Code
              </Text>
             </TouchableOpacity>
            </View>
        )
    }
}
}

const styles= StyleSheet.create({
    scanButton:{
        backgroundColor:'red',
        padding:10,
        margin:10
    },
    buttonText:{
        fontSize:20,

    }
})