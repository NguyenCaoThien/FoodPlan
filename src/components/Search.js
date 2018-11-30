import React,{Component} from 'react';
import {View, Text, StyleSheet, Button, TextInput, FlatList, Image, Keyboard,TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import flatListData from '../data/data';
import { Actions } from 'react-native-router-flux';
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';
import FoodList from './FoodList';

class SearchListReminder extends Component{
    constructor(props)
    {
        super(props);
        
    }
    render(){
    
        return(
           <View>
                <View  style={{flexDirection:'column', marginTop:10}}>       
                    <View style={{marginLeft: 10}}>
                        <Text style={{}}>Món ăn yêu thích</Text>
                    </View>
                    <View style={{flexDirection: 'row',justifyContent:'space-between', alignItems:'center',padding: 10 }}>
                        <Image source={require('../Images/banhmi.jpg')} style={{width:80,height:50}}></Image>
                        <Image source={require('../Images/bun.jpg')} style={{width:80,height:50}}></Image>
                        <Image source={require('../Images/chaca.jpg')} style={{width:80,height:50}}></Image>
                    
                    </View> 
                </View>
                <View  style={{flexDirection:'column', marginTop:10, marginTop: 10}}>       
                    <View style={{marginLeft: 10}}>
                        <Text style={{}}>Món ăn gợi ý</Text>
                    </View>
                    <View style={{flexDirection: 'row',justifyContent:'space-between', alignItems:'center',padding: 10 }}>
                        <Image source={require('../Images/phobien.jpg')} style={{width:80,height:50}}></Image>
                        <Image source={require('../Images/sushi.jpg')} style={{width:80,height:50}}></Image>
                        <Image source={require('../Images/truyenthong.jpg')} style={{width:80,height:50}}></Image>
                    
                    </View> 
                </View>
            </View>
        )
    }
}

export default class Search extends Component{
    render(){
        const gotoPrevious =()=>{
            Actions.reset('home')

        }

        
        const gotoSearhResult=()=>{
            Actions.SearchResult();
        }
        return(
              
            <TouchableWithoutFeedback onPress={dismissKeyboard}>
                <View>
                    <View style={styles.container}>
                        <Icon name="angle-left" color="#eee" size={30} onPress={gotoPrevious}></Icon>
                        <View>
                            <TextInput style={styles.txtSearch} placeholder="Tim kiem" onSubmitEditing={gotoSearhResult}></TextInput>
                        </View>
                        <View>
                            <Icon name="sliders" color="#eee" size={30} />
                        </View>                     
                    </View>  
                    <Text style={{flexDirection:"column", color:'black', marginTop: 10}}>Nhập tên món ăn hoặc loại nguyên liệu bạn có</Text>
                    <SearchListReminder></SearchListReminder>
                </View>
            </TouchableWithoutFeedback>    
             
            
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
    txtSearch:{
        borderColor: 'grey',
        borderWidth:1,
        height:30,
        paddingTop:5,
        width: 200,
        margin: 20,
        backgroundColor:'white'
    }
})