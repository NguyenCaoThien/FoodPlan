import React,{Component} from 'react';
import {View, Text, StyleSheet, TextInput, Image, Button, Dimensions,FlatList, TouchableWithoutFeedback} from 'react-native';
import flatListData from '../data/data';
import Icon from 'react-native-vector-icons/FontAwesome';

class FlatListItem extends Component{
    constructor(props)
    {
        super(props);

    }
    render(){
        return(
            <View style={{flex:1, flexDirection:'column', marginTop:10, backgroundColor:'red'}}>
                <View style={{
                    flex:1,
                    flexDirection:'row',
                    backgroundColor: 'white'
                }}>
                    <Image source={this.props.item.imgUrl} style={{
                        width:100,
                        height:100
                    }}>

                    </Image>
                    <View style={{flex:1, flexDirection: 'column'}}>
                        <Text  style={styles.textStyle}>{this.props.item.foodDescription}</Text>
                        <View style={{flex:1, flexDirection:'row', justifyContent:'flex-start', alignItems:'center', padding: 10, paddingLeft:10}}>
                            <Icon name="heart" color="red" size={30}></Icon>
                            <Text style={{paddingTop:10, paddingRight: 10}}>312</Text>
                            <Icon name="calendar" color="black" size={30}></Icon>
                        </View>
                    </View>

                </View>
                <View style={{backgroundColor:'white', height: 1}}></View>
            </View>

        )
    }
}

export default class FoodList extends Component{
    render(){
        return(
          <TouchableWithoutFeedback>
              <View>
                  <FlatList data={flatListData} renderItem={({item,index})=>{
                        console.log(`item =${JSON.stringify(item)}, index=${index}`);
                      return(
                          <FlatListItem item={item} index={index} parentFlatList={this}></FlatListItem>
                      )
                  }} style={{}}>

                  </FlatList>
              </View>
          </TouchableWithoutFeedback>

        )
    }
}

const styles = StyleSheet.create(
    {
        textStyle:{
            textAlign:'center',
            padding:10,
            fontSize: 16
        }
    }
  )
