import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from '../actions';

class AuthScreen extends Component {

  componentDidMount() {
    this.props.facebookLogin();
    this.onAuthComplete(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.onAuthComplete(nextProps);
  }

  onAuthComplete(props) {
    if (props.token) {
      this.props.navigation.navigate('map');
    }
  }

  facebookLogin() {
    this.props.facebookLogin();
    this.onAuthComplete(this.props);
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Button
          title="Log into Facebook"
          onPress={this.facebookLogin.bind(this)} />
      </View>
    );
  }
}

function mapStateToProps({auth}) {
  return { token: auth.token };
}

export default connect(mapStateToProps, actions)(AuthScreen);
