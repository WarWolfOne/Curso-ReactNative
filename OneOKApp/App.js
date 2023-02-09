import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//imports das paginas que entraram na Stack.
import Home from './src/Home';
import PrimeiraTela from './src/PrimeiaTela';

const Stack = createNativeStackNavigator();

function Pessoa(props) {
  return (
    <View>
      <Text>
        Olá, bem-vindo {props.nome} {props.sobrenome}
      </Text>
    </View>
  )
}

//O App deve ser encapsulado em uma variavel para ser mencioda
//e acessar os dados em CONTEXT.
const App = () => {
  return (

    <NavigationContainer
      //O NavigationContainer é resposavel por gerenciar a navegação entre tela.
      //Existem diversos tipos de Navegação, Stack(em pilha) e BottomTab(barra de navegação inferior)
      //são os mais comuns.
    >
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Primeira Tela" component={PrimeiraTela} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
};
export default App;