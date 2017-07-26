import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';
import { Card,
  CardSection,
  Button,
  Input,
  Spinner
 } from './common';


class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false
  };
  onButtonPress() {
    const { email, password } = this.state;
    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(this.onLoginSuccess.bind(this))
    .catch(this.onLoginFail.bind(this));//createuser catch    
  }//on button press

  onLoginFail() {
    this.setState({ loading: false, error: 'authentication failed' });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
       loading: false,
       error: ''
      });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }//if
    return (
      <Button text="Login" onPress={this.onButtonPress.bind(this)} />
    );
  }
  render() {
    return (
      <Card>

      <CardSection>
        <Input
        label="Email"
        value={this.state.email}
        onChangeText={email => this.setState({ email })}
        style={{ height: 20, width: 100 }}
        placeholder="user@mail.com"
        />
      </CardSection>

      <CardSection>
        <Input
        label="Password"
        secureTextEntry
        value={this.state.password}
        onChangeText={password => this.setState({ password })}
        style={{ height: 20, width: 100 }}
        placeholder="secretpass"
        />
      </CardSection>
      <Text>{this.state.error} </Text>
      <CardSection>
        {this.renderButton()}
      </CardSection>
      </Card>
    );//return
  }//render
}//App

// const styles = {
//
// };

export default LoginForm;
