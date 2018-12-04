
import React,{Component} from 'react';
import {View, Text, StyleSheet, Button, Image, Dimensions,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {CheckBox} from  'react-native-elements';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Actions } from 'react-native-router-flux';
 
 
class CheckBoxX extends Component{
    constructor(props){
        super(props);
        this.state={ checked: false,}
    };

    
    toggle = () => {
        this.setState({checked: !this.state.checked});
      }

   
      render(){
             
   
          return(
            <CheckBox checked={this.state.checked} onPress={() => this.setState({checked: !this.state.checked}) } title={this.props.title} 
            containerStyle={{backgroundColor:'#ecf0f1', width:91, padding:0, margin:0}}
            size={20} textStyle={{}}
            />     
          )
      }
}

export default class Filter extends Component{
   
    render() { 
        const screenWidth= Dimensions.get('window').width;
        const gotoFilterResult=()=>{
            Actions.SearchResult();
          }
      return (
    <View style={{marginLeft:10, marginRight:10}}>
        <View style={{ flexDirection: 'column', marginTop:15}}>
           <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text>Nguyen lieu chinh</Text>
                <TouchableOpacity onPress={gotoFilterResult}>
                    <Text style={{color:'skyblue',fontSize:20}}>Lọc</Text>  
                </TouchableOpacity>             
           </View>
            <View style={{ flexDirection: 'row' ,}}>                     
               <CheckBoxX title="Heo"></CheckBoxX>
               <CheckBoxX title="Bò"></CheckBoxX>
               <CheckBoxX title="Gà"></CheckBoxX>          
            </View>
        </View>
        <View style={{ flexDirection: 'column', marginTop:15}}>
            <Text>Cách chế biến</Text>
            <View style={{ flexDirection: 'row' ,}}>                     
               <CheckBoxX title="Chiên"></CheckBoxX>
               <CheckBoxX title="Xào"></CheckBoxX>
               <CheckBoxX title="Hấp"></CheckBoxX>    
           </View>           
            <View style={{ flexDirection: 'row' ,}}>                     
               <CheckBoxX title="Luộc"></CheckBoxX>
               <CheckBoxX title="Nướng"></CheckBoxX>    
            </View>
        </View>
        <View style={{ flexDirection: 'column',  marginTop:15}}>
            <Text>Loại món ăn</Text>
            <View style={{ flexDirection: 'row' ,}}>                     
               <CheckBoxX title="Khai vị"></CheckBoxX>
               <CheckBoxX title="Chính"></CheckBoxX>
               <CheckBoxX title="Ăn vặt"></CheckBoxX>       
            </View>
            <CheckBoxX title="Tráng miệng"></CheckBoxX>     
        </View>
        <View style={{ flexDirection: 'column', marginTop:15}}>
            <Text>Khác</Text>
            <View style={{ flexDirection: 'row' ,}}>                     
               <CheckBoxX title="ÂU"></CheckBoxX>
               <CheckBoxX title="Trung"></CheckBoxX>
               <CheckBoxX title="Hàn"></CheckBoxX>                          
            </View>
            <View style={{ flexDirection: 'row' ,}}> 
               <CheckBoxX title="Sang trọng"></CheckBoxX>  
               <CheckBoxX title="Bình dân"></CheckBoxX>        
               <CheckBoxX title="Nhanh"></CheckBoxX>       
            </View>
            <View style={{ flexDirection: 'row' ,}}>
      
               <CheckBoxX title="Người già"></CheckBoxX>        
               <CheckBoxX title="Trẻ nhỏ"></CheckBoxX>         
            </View>
        </View>
    </View>
      );
    }
}