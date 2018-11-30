
import React,{Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class MenuFooter extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Icon name="users" color="#eee" size={30}></Icon>
                <Icon name="calendar" color="#eee" size={30}></Icon>
                <Icon name="home" color="#eee" size={30}></Icon>
                <Icon name="heartbeat" color="#eee" size={30}></Icon>
                <Icon name="picture-o" color="#eee" size={30}></Icon>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        
        flexDirection: 'row',
        backgroundColor: '#FF8C00',
        height: 50,
        justifyContent: 'space-between',
        alignItems:'center',
        paddingLeft: 10,
        paddingRight: 10
        
    },
    txtTitle:{
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        width:250
    }
})