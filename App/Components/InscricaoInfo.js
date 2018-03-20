import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/InscricaoInfoStyle'
import axios from 'axios'

export default class InscricaoInfo extends Component {
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
  constructor(props){
    super(props);

    this.state = {
      inscricao: []
    };
  }

  componentDidUpdate(){
    axios.get('http://143.106.49.93/eventos/app_dev.php/api/inscricao/${this.props.inscricaoId}').then(
      res => {
        const inscricao = res.data.data.children.map(obj => obj.data);
        this.setState({inscricao});
      }
    )
  }
  
  render () {
    return (
      <View style={styles.container}>
        <Text>InscricaoInfo Component</Text>
      </View>
    )
  }
}
