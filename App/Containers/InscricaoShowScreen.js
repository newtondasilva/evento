import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, Alert } from 'react-native'
import RoundedButton from '../Components/RoundedButton'
import { connect } from 'react-redux'
import axios from 'axios'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/InscricaoShowScreenStyle'

class InscricaoShowScreen extends Component {
  constructor(props){
    super(props);


    this.state = {
      inscricao: []
    };

    inscricaoId = this.props.navigation.state.params.inscricaoId.data;
    urlInscricao = 'http://www.fcm.unicamp.br/eventos/api/inscricao/' + inscricaoId;

    Alert.alert('InscricaoShowScreen',JSON.stringify(urlInscricao));
    axios.get(urlInscricao).then(
      res => {
        const inscricao = JSON.parse(res.data);
        Alert.alert('oi',JSON.stringify(inscricao));
        this.setState({inscricao});
      }
    )
  }

  render () {

    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <Text>oi</Text>
        </KeyboardAvoidingView>
        <RoundedButton
          text="Voltar"
          onPress={() => this.props.navigation.goBack()}
        />
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InscricaoShowScreen)
