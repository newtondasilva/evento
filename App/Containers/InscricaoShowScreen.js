import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, Alert, View } from 'react-native'
import RoundedButton from '../Components/RoundedButton'
import { connect } from 'react-redux'
import axios from 'axios'
import { Container, Header, Content, Card, CardItem, Body, H2,List, ListItem, Title, Spinner, Left, Badge } from 'native-base';
import { Button } from 'native-base';


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
      resposta_itens: [],
    };

    inscricaoId = this.props.navigation.state.params.inscricaoId.data;
    urlInscricao = 'http://www.fcm.unicamp.br/eventos/api/inscricao/' + inscricaoId;

    axios.get(urlInscricao).then(
      res => {
        const inscricao = JSON.parse(res.data);
        const participante = inscricao.participante;
        const resposta = inscricao.respostas[0];
        this.setState({inscricao : inscricao, participante: participante,
           resposta: resposta,
           resposta_itens: resposta.resposta_itens,
          });
      }
    );    
  }

  render () {
  
    return (
    
      <View style={styles.mainContainer}>
        <Container>
          <Header>
            <Left>
              <Button transparent light
                onPress={() => this.props.navigation.navigate('LaunchScreen')} 
                >
                <Text style={styles.sectionText}>Voltar</Text>
              </Button>
            </Left>

            <Body>
              <Text style={styles.sectionText}>Detalhes da inscrição</Text>
            </Body>
          </Header>
          <Content>
            <Card>
              <CardItem header>
                <H2>{this.state.participante.nome}</H2>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>Documento: {this.state.participante.documento}</Text>
                  <Text>E-mail: {this.state.participante.email}</Text>
                  <Text>Inscrição: {this.state.inscricao.id}</Text>
                  {this.state.resposta.pago ?
                    <Badge success><Text style={styles.cwhite}>Pago</Text></Badge>   
                  :
                    <Badge warning><Text style={styles.cwhite}>Não Pago</Text></Badge>   
                  }
                </Body>
              </CardItem>
              {this.state.resposta === null ?
                <Body>
                  <Text>Vazio</Text>
                </Body>
                :  
                this.state.resposta_itens.map((resposta_item, index) => (
                  resposta_item.text ?
                  <CardItem key={index}>
                    <Body >
                        <Text>{resposta_item.pergunta.nome}</Text>
                        <Text>{resposta_item.text}</Text>
                    </Body>
                  </CardItem>
                  :
                  <Text key={index}/>
                ))
              }
          </Card>
          </Content>
        </Container>

        

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
