import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

class App extends Component {

  constructor(props) { 
    super(props);
    this.state = {
      numero: 0,
      botao: 'VAI',
      ultimoTempo: null,
    };
    // variável do timer do relógio
    this.timer = null;
    this.vai = this.vai.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  vai() { 
    if (this.timer != null) {
      // aqui para o timer
      clearInterval(this.timer);
      this.timer = null;
      this.setState({botao: 'VAI'});
    } else {
      // começa a girar o timer
      this.timer = setInterval( () => {
        this.setState({ numero: this.state.numero + 0.1 });
      }, 100);
      this.setState({ botao: 'PARAR' });
    }
  }
  
  limpar() {
    if (this.timer != null) {
      // aqui vai parar o timer
      clearInterval(this.timer);
      this.timer = null;
    }
    this.setState({
      numero: 0,
      botao: 'VAI',
      ultimoTempo: this.state.numero
    });
  }

  render(){
    return (
      <View style = { styles.container } >
        
      <Image
        source={require('./src/cronometro.png')}
        style={styles.cronometro}  
      />

      <Text style={styles.timer}> {this.state.numero.toFixed(1)} </Text>

      <View style={styles.btnArea}>
      
        <TouchableOpacity style={styles.botao} onPress={this.vai}>
          <Text style={styles.btnTexto}> {this.state.botao} </Text>
        </TouchableOpacity>
          
        <TouchableOpacity style={styles.botao} onPress={this.limpar}>
          <Text style={styles.btnTexto}> LIMPAR </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.areaUltima}>
          <Text style={styles.textoCorrida}>
           {this.state.ultimoTempo > 0 ? 'Último tempo:' + this.state.ultimoTempo.toFixed(1) + 's' : ''}
          </Text>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00AEEF',
  },
  timer: {
    marginTop: -160,
    color: '#FFF',
    fontSize: 65,
    fontWeight: 'bold',
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 70,
    height: 40,
  },
  botao: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 40,
    margin: 25,
    borderRadius: 9,
  },
  btnTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00AEEF',
  },
  cronometro: {
    width: 255,
    height: 255,
  },
  areaUltima: {
    marginTop: 60,
  },
  textoCorrida: {
    fontSize: 25,
    fontStyle: 'italic',
    color: '#FFF',
  }
});

export default App;