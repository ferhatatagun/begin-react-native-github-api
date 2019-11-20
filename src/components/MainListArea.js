import React, { Component } from 'react';
import { View, Text ,TouchableOpacity,StyleSheet, Navigator} from 'react-native';

class MainListArea extends Component {
    state = {
        url: 'https://github.com/reactjs',
    }
    render() {
      return (
        <View>
            <Text style={styles.label}>Github <Text style={styles.labelred}> {this.state.url}</Text> Repo List </Text>
            <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={this._handleSubmit} >
                <Text style={styles.buttonText}> Show Repository </Text>
            </TouchableOpacity> 
            <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={this._handleSubmit} >
                <Text style={styles.buttonText}> Show Detail Page </Text>
            </TouchableOpacity>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    label: {
      fontSize: 16,
      marginBottom: 6,
    },
    labelred: {
        color: "gray"
    },
    button: {
      height: 45,
      flexDirection: 'row',
      backgroundColor:'#263238',
      borderColor: '#263238',
      borderWidth: 1,
      borderRadius: 8,
      marginBottom: 10,
      marginTop: 10,
      alignSelf: 'stretch',
      justifyContent: 'center'
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 18,
      alignSelf: 'center',
    }
});

export default MainListArea;

