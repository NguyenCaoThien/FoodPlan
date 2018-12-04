import React,{Component} from 'react';
import {View, Text, StyleSheet, TextInput, Image, Button, Dimensions, TouchableOpacity, Keyboard,TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';
import { Actions } from 'react-native-router-flux';


   

export default  class MenuContent extends Component{
    render(){
       
            const goToXuHuong = () => {
               Actions.XuHuong();
            }

            const goToPhoBien=()=>{
                Actions.PhoBien();
            }

            const gotoTruyenThong=()=>{
                Actions.TruyenThong();
            }

            const gotoSearch=()=>{
                Actions.Search();
            }
        //const {navigate} = this.props.navigation;
        return(
            <TouchableWithoutFeedback>
                <View style={styles.container}>
                    <View style={styles.viewSearch}>
                        <TouchableOpacity onPress={gotoSearch}> 
                            <Text style={styles.txtInput} >Tìm kiếm</Text>
                        </TouchableOpacity>
                        <Icon name="shopping-cart" color="aqua" size={30} />                
                    </View>
                    <View style={{flex:1, backgroundColor: '#FF8C00', flexDirection:'column', width:150, justifyContent:'center', alignItems: 'center', height:10, marginTop: 2}}>
                        <Text style={{color: 'white'}}>Hôm nay ăn gì</Text>
                    </View>
                    <View style={{flex:1, flexDirection:'row', width:'100%', height: 50, marginTop: 10}}>
                        <TouchableOpacity style={{flex: 1, borderColor:'white', borderWidth: 1, justifyContent:'center', alignItems:'center'}}
                            onPress={goToXuHuong}
                        >
                            <Text>Xu hướng</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flex: 1, borderColor:'white', borderWidth: 1, justifyContent:'center', alignItems:'center'}} 
                            onPress={goToPhoBien}
                        >
                            <Text>Phổ biến</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flex: 1, borderColor:'white', borderWidth: 1, justifyContent:'center', alignItems:'center'}}
                            onPress={gotoTruyenThong}
                        >
                            <Text>Truyền Thống</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'column',
        // flex:1,
        //justifyContent:'center',
        height: '25%',
        alignItems:'center',
       // backgroundColor: 'green',
        paddingTop: 2
    },
    txtBtn:{
        textAlign:'center',
        fontSize: 10
    },
    viewSearch:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems: 'center',
        marginTop:2
    },
    txtInput:{
        color:'grey',
        opacity:.54,
        borderColor: 'black',
        borderWidth:1,
        height:30,
        paddingTop:2,
        paddingLeft: 3,
        width: 200,
        margin: 20,
      
       
    },

    imgCart:{
        backgroundColor: 'aqua'
    }
})