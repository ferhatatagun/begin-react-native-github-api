import React, {Component} from 'react';
import MainListArea from '../components/MainListArea';
import Store from '../Store/store';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Alert,
  ScrollView,
  SafeAreaView,
  Image
} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const url = 'https://github.com/reactjs';

export default class List extends Component {
  state = {
    username: 'reactjs',
    repos: [],
    clickItem: 1,
  }

  _getUserRepos = (username) => {
    username = username.toLowerCase().trim();
    const url = `https://api.github.com/users/${username}/repos`;
    return fetch(url).then((res) => res.json());
  }

  _handleSubmit = () => {
    this._getUserRepos(this.state.username)
      .then((res) => {
        this.setState({repos: res});
      });
  }
  _goToRepo=(repo)=>{

    Store.setRepo(repo);
    this.props.navigation.navigate('DetailScreen');

  }
  _renderRepos = () => {
    return (
      <ScrollView style={styles.listArea}>
        {
          this.state.repos.map((repo, i) => {
            return (
              <View key={i} style={styles.item}>
                <View style={styles.itemBoxCountArea}> 
                    <Text style={styles.itemCount} >{i}</Text>
                </View>
                <View style={styles.itemBoxArea}> 
                    {/* <Image source={{uri: JSON.stringify(repo.avatar_url) }} style={styles.itemAvatar} resizeMode="contain"></Image> */}
                    <Image source={{uri: "https://avatars3.githubusercontent.com/u/6412038?v=4" }} style={styles.itemAvatar} resizeMode="contain"></Image>
                </View>
                <View style={styles.itemNameArea}> 
                    <Text style={styles.itemName}> {JSON.stringify(repo.full_name)}</Text>
                </View>
                <TouchableOpacity style={styles.itemDetailButton} activeOpacity={0.8} id={JSON.stringify(repo.id)} onPress={this._goToRepo.bind(this,repo)} >
                    <Text style={styles.detailBtnName}>Detail</Text>
                    <Image style={styles.arrowRight} source={require('../assets/img/arrow-right.png')}/>
                </TouchableOpacity>
              </View>
            )
          })
        }
      </ScrollView>
    )
  } 
  render() {
    return (
      <View style={styles.container}>
        <View>
            <Text style={styles.label}>Github <Text style={styles.labelred}> {url}</Text> Repo List </Text>
            <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={this._handleSubmit} >
                <Text style={styles.buttonText}> Show Repository </Text>
            </TouchableOpacity> 
        </View>
        { this._renderRepos() }
      </View>
    );
  }
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: 'white',
        marginBottom: 10,
        padding: 10,
        backgroundColor: "#d6d7da"
    },
    itemBoxArea: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        width: "auto",
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: 'white',
        maxWidth: 45,
        marginRight: 5
    },
    itemBoxCountArea: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        width: 20,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: 'white',
        maxWidth: 50,
        marginRight: 5
    },
    itemCount: {
        fontSize: 15,
        color: "black",
        padding: 5
    },
    itemAvatar: {
        width: 30,
        height: 30,
        margin: 5
    },
    itemNameArea: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 4,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        backgroundColor:'#263238',
        color: "white",
        maxWidth: 170
    },
    itemDetailButton: {
        flex: 1,
        width: "auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        width: 30,
        maxWidth: 80,
        color: "white"
    },
    arrowRight: {
        width: 20,
        height: 15,
        marginLeft: 5,
    },
    itemName: {
        color: "white",
        fontSize: 12
    },
    detailBtnName: {
        fontSize: 11
    },
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#FFFFFF',
        marginTop: 100
    },
    input: {
        width: screenWidth - 20,
        height: 38,
        padding: 4,
        fontSize: 16,
        borderColor: '#3a3a3a',
        borderWidth: 1,
        borderRadius: 8,
    },
    listArea: {
        paddingVertical: 20
    },
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