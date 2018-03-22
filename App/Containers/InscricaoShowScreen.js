import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, Alert, View } from 'react-native'
import RoundedButton from '../Components/RoundedButton'
import { connect } from 'react-redux'
import axios from 'axios'
import { Container, Header, Content, Card, CardItem, Body, H2,List, ListItem } from 'native-base';


// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/InscricaoShowScreenStyle'

class InscricaoShowScreen extends Component {
  constructor(props){
    super(props);


    this.state = {
      inscricao: [],
      participante: [],
      resposta: [],
    };

    inscricaoId = this.props.navigation.state.params.inscricaoId.data;
    urlInscricao = 'http://www.fcm.unicamp.br/eventos/api/inscricao/' + inscricaoId;

    axios.get(urlInscricao).then(
      res => {
        const inscricao = JSON.parse(res.data);
        const participante = inscricao.participante;
        const resposta = inscricao.respostas;
        this.setState({inscricao : inscricao, participante: participante, resposta: resposta});
        
      }
    );
    
  }


  render () {
  
    return (
    
      <View style={styles.mainContainer}>
        <Container>
        <Header />
        <Content>
          <Card>
            <CardItem header>
              <H2>{this.state.participante.nome}</H2>
            </CardItem>
            <CardItem>
              <Body>
                <Text>Documento: {this.state.participante.documento}</Text>
                <Text>E-mail: {this.state.participante.email}</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                
                x
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>Em caso de divergência dos dados corriga através do Gerenciador</Text>
            </CardItem>
         </Card>
        </Content>
      </Container>

        
        <RoundedButton
          text="Voltar"
          onPress={() => this.props.navigation.goBack()}
        />

      </View>
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
