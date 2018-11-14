import React from 'react';
import { AsyncStorage, StyleSheet, Text, View, Button } from 'react-native';
import { RkTextInput, RkButton } from 'react-native-ui-kitten';


class SignInScreen extends React.Component {
    static navigationOptions = {
      title: 'Please sign in',
    };

    constructor(props){
        super(props);
        this.state = {
            name:'',
            login: [],
        }
    }

    async componentDidMount() {
      var response = await fetch(`https://gist.githubusercontent.com/Salaidevaganamani/14b317595ba9236ddd09590d0bd8e541/raw/819ea6cd4709595a35fef569d7370aa3bc4ac85c/login.json`);
      var login = await response.json();
      // console.log(products);
      this.setState({login});
    }

    handleEmail = (text) => {
        this.setState({name: text})
    }

    handlePass = (passtext) => {
        this.setState({pass: passtext})
    }
  
    render() {
      return (
        <View style={styles.container}>
          <RkTextInput 
            rkType='rounded' 
            placeholder='Email'
            onChangeText = {this.handleEmail}
            />
          <RkTextInput 
            rkType='rounded' 
            placeholder='Password'
            onChangeText = {this.handlePass}
            secureTextEntry={true}
            />
          <RkButton onPress={() => this._signInAsync(this.state.name, this.state.pass)}>Sign In!</RkButton>
          
        </View>
      );
    }
    
    


    _signInAsync = async (name, pass) => {
      let email = this.state.login.map(e => {return e.email});
      let password = this.state.login.map(p => {return p.password});
      let emailresult = email.find( fruit => {return fruit == name} );
      let passresult = password.find( passw => {return passw == pass} );
      console.log(emailresult, passresult);
        if(name == emailresult && pass == passresult){
            await AsyncStorage.setItem('userToken', 'abcd');
            this.props.navigation.navigate('App');
        }else{
            alert('SignIn Failed');
        }
      
    };
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
  });

  export default SignInScreen;