import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Alert } from 'react-native';
// import { createStackNavigator, createAppContainer } from "react-navigation";
import Navigator from './src/Navigator';
export default class App extends React.Component {
	render() {
		return (
			<Navigator/>
		);
	}
}
