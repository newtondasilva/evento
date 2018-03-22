import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/RespostaStyle'

export default class Resposta extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  static propTypes = {
    resposta: PropTypes.resposta,
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>Resposta Component</Text>
      </View>
    )
  }
}
