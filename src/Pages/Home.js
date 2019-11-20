import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Alert } from 'react-native';
// import { createStackNavigator, createAppContainer } from "react-navigation";

export default class Home extends React.Component {
	render() {
		return (
			<ImageBackground source={require('../assets/img/background.png')} style={styles.background} >
				<View>
					<Image source={require('../assets/img/logo.png')} style={styles.logo} resizeMode="contain">
					</Image>
					<TouchableOpacity mode="contained" onPress={() => this.props.navigation.navigate("ListScreen") }>
						<Text style={styles.listBtn}>List</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={this.detailAction}>
						<Text style={styles.detailBtn}>Detail</Text>
					</TouchableOpacity>
				</View>
			</ImageBackground>
		);
	}
}

// class Detail extends React.Component {
// 	render() {
// 		return (
// 			<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
// 				<Text>Detail Screen</Text>
// 			</View>
// 		);
// 	}
// }

const styles = StyleSheet.create({
    background: {
      width: '100%',
      height: '100%'
    },
    logo:{
      width: 280,
      height: 280,
      marginLeft: '15%',
      marginTop: '10%'
    },
    text: {
      color: 'white',
      marginTop: '-25%',
      marginLeft: '20%'
    },
    listBtn: {
      backgroundColor: 'white',
      color: '#3A59FF',
      width: "75%",
      borderRadius: 25,
      textAlign: 'center',
      fontWeight: 'bold',
      marginLeft: '11%',
      padding: "2%",
      fontSize:  27,
	  marginTop: '70%',
	  borderRadius: 10
    },
    detailBtn: {
      backgroundColor: '#3A59FF',
      color: 'white',
      width: "75%",
      borderRadius: 25,
      textAlign: 'center',
      fontWeight: 'bold',
      marginLeft: '11%',
      padding: "2%",
      fontSize:  27,
      marginTop: '10%',
      display: "none"
    }
});

// const AppNavigator = createStackNavigator({
// 	Home: {
// 		screen: App
// 	},
// 	List: {
// 		screen: List
// 	}
// });
