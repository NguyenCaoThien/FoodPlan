import React,{Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// Components
import MenuHeader from './MenuHeader';
import MenuContent from './MenuContent';
import FoodList from './FoodList';
import MenuFooter from './MenuFooter';


export default class Home extends Component{
    render(){
        return(
            <View style={styles.container}>
                <MenuHeader></MenuHeader>
                <MenuContent></MenuContent>
                <MenuFooter></MenuFooter>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column'
    }
})
