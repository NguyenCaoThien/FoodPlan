

import React,{Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class MenuHeader extends Component{
    render(){
        return(
          
            <View style={styles.container}>
                <Text style={styles.txtTitle}>FOOD PLAN</Text>
                <Icon name="user" color="white" size={30}/>               
            </View>      
            
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        backgroundColor: '#FF8C00',
        height: 50,
        justifyContent: 'center',
        alignItems:'center'
        
    },
    txtTitle:{
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        width:250
    }
})