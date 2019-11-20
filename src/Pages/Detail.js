import React, {Component} from 'react';
import MainListArea from '../components/MainListArea';
import Store from '../Store/store';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Alert,
  TouchableOpacity,
  Image,
  Linking,
  PropTypes
} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

const screenWidth = Dimensions.get('window').width;

export default class List extends Component {
    state = {
        username: 'reactjs',
        repos: [],
        clickItem: 1,
        stateTest: "example"
    }

    static propTypes = { 
        // "pulls_url" : Store.state.repo.owner.pulls_url,
        // "issues_url" : Store.state.repo.owner.issues_url
    };

    handleClick = () => {
        Linking.canOpenURL(this.props.url).then(supported => {
            if (supported) {
                Linking.openURL(this.propTypes.pulls_url);
            } else {
                console.log("Don't know how to open URI: " + this.props.url);
            }
        });
    }; 

    componentDidMount(){
        this.setState({'stateTest':"example1"});
    }

    render() {
        const { goBack } = this.props.navigation;
            return (
                <View style={styles.container}>
                    <TouchableOpacity style={styles.ownerItemBack} onPress={() => goBack()}> 
                    <Image source={require('../assets/img/back.png')} style={styles.backImage} resizeMode="contain" />
                    <Text style={styles.ownerItemBackText}> {Store.state.repo.owner.repos_url} </Text>
                </TouchableOpacity>

                <Image source={{uri: Store.state.repo.owner.avatar_url}} style={styles.itemAvatar}></Image>
                <Text style={styles.itemNameSmall}> {Store.state.repo.name} </Text> 
                <Text style={styles.itemName}> {Store.state.repo.full_name} </Text>
                <View styles={styles.item}>
                    <Text style={styles.ownerItem}> id : {Store.state.repo.id} </Text>
                    <Text style={styles.ownerItem}> url : {Store.state.repo.url} </Text> 
                    <Text style={styles.ownerItem}> html_url : {Store.state.repo.html_url} </Text>  
                    <Text style={styles.ownerItem}> type :  {Store.state.repo.owner.type}  </Text> 
                    <Text style={styles.ownerItem}> subscriptions_url :  {Store.state.repo.owner.subscriptions_url}  </Text> 
                    <Text style={styles.ownerItem}> organizations_url :  {Store.state.repo.owner.organizations_url}  </Text> 
                    <Text style={styles.ownerItem}> received_events_url : {Store.state.repo.owner.received_events_url} </Text> 
                </View>
                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={() => Linking.openURL('' + Store.state.repo.owner.issues_url  + '' )} >
                        <Text style={styles.buttonText}> Issues </Text>
                    </TouchableOpacity> 
                    <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={() => Linking.openURL('' + Store.state.repo.owner.pulls_url  + '' )} >
                        <Text style={styles.buttonText}> Pull Request </Text>
                    </TouchableOpacity>
                </View>
            </View>
            );
        }   
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#FFFFFF',
        marginTop: 100,
        alignItems: "center",
        alignSelf: 'center',
        justifyContent: "center",
        flexDirection: "column",
        position: "relative"
    },
    itemAvatar: {
        width: 50,
        height: 50,
        marginBottom: 20
    },
    itemName: {
        fontWeight: "bold",
        fontSize: 14,
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
    },
    itemNameSmall: {
        fontWeight: "100",
        fontSize: 11,
        marginBottom: 5
    },
    ownerItem: {
        marginTop: 2,
        marginBottom: 5,
        fontSize: 12
    },
    ownerItemBack: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        alignSelf: 'center',
        justifyContent: "center",
        fontWeight: "bold",
        fontSize: 11,
        height: 20,
        width: "auto",
        position: "absolute",
        top: 0,
        left: 10,
    },
    ownerItemBackText :{
        textDecorationLine: "underline",
    },
    backImage :{
        width: 15,
        height: 15
    },
    buttonArea:{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    button: {
        display : "flex",
        height: 45,
        flexDirection: 'row',
        backgroundColor:'#263238',
        borderColor: '#263238',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 10,
        alignSelf: 'stretch',
        justifyContent: 'center',
        marginRight: 20,
        paddingLeft: 10,
        paddingRight: 10
      },
      buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        alignSelf: 'center',
      }
});