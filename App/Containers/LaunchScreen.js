import React, { Component } from 'react'
import { ScrollView, Text, Image, View, Alert } from 'react-native'
import { Images } from '../Themes'
import RoundedButton from '../Components/RoundedButton'
import {Constants, BarCodeScanner, Permissions } from 'expo'
import InscricaoInfo from '../Components/InscricaoInfo'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  state = {
    hasCameraPermission: null
  };

  componentDidMount(){
    this._requestCameraPermission();
  }

  _requestCameraPermission = async() => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted',
    });
  }

  _handleBarCodeRead = data => {
    Alert.alert('Scanned',JSON.stringify(data));
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo} />
          </View>
          <InscricaoInfo/>

          <View style={styles.centered} >
            
            {this.state.hasCameraPermission === null ?
            <Text>Permissao</Text>:
            this.state.hasCameraPermission === false ?
            <Text>Nao deu</Text>:
            <BarCodeScanner onBarCodeRead={this._handleBarCodeRead}
            style={{height:200, width: 100}}
            />
          }
          </View>

        
        </ScrollView>
      </View>
    )
  }
}
