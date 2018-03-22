import React, { Component } from 'react'
import { ScrollView, Text, Image, View, Alert, StyleSheet } from 'react-native'
import { Images, Metrics } from '../Themes'
import RoundedButton from '../Components/RoundedButton'
import { Constants, BarCodeScanner, Permissions } from 'expo'
import { StackNavigator } from 'react-navigation';
import { Header, Left, Button, Body, Container } from 'native-base';


// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  

  state = {
    hasCameraPermission: null,
    showCamera: true,
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
    this.setState({showCamera: false});
    this.props.navigation.navigate('InscricaoShowScreen', { inscricaoId: data});
    
  }

  render () {
    
    return (
      
      <Container>
        
        <Header style={styles.header}>
          <Left>
            <Button transparent/>
          </Left>

          <Body>
            <Text style={styles.sectionText}>Leitor QRCode</Text>
          </Body>
        </Header>
        
        <View style={styles.centered} >
            {this.state.hasCameraPermission === null ?
              <Text>Permissao</Text>:
            this.state.hasCameraPermission === false ?
              <Text>Nao deu</Text>
              :
              this.state.showCamera === true ?
                <BarCodeScanner 
                onBarCodeRead={this._handleBarCodeRead} 
                style={{height: Metrics.screenHeight, width: Metrics.screenWidth}}
                />
              :
              <View/>
          }
          
        </View>

    

        
      </Container>
    )
  }
}
