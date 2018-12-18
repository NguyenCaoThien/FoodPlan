import React,{Component} from 'react';
import {View, Text, StyleSheet, TextInput, Image, Button, Dimensions, TouchableOpacity,
   Keyboard,TouchableWithoutFeedback, Animated,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';
import { Actions } from 'react-native-router-flux';
import { TabView, SceneMap } from 'react-native-tab-view';
import FoodList from './FoodList';



const FirstRoute = () => (
    <ScrollView>
        <View style={{flex:1}}>
            <FoodList></FoodList>
        </View>
    </ScrollView>

);
const SecondRoute = () => (
  <ScrollView>
      <View style={{flex:1}}>
          <FoodList></FoodList>
      </View>
  </ScrollView>
);

const ThirdRoute = () => (
  <ScrollView>
      <View style={{flex:1}}>
          <FoodList></FoodList>
      </View>
  </ScrollView>
);
 class TabViewDetail extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Xu hướng' },
      { key: 'second', title: 'Truyền thống' },
      {key:'third',title:'Phổ biến'}
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const color = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map(
              inputIndex => (inputIndex === i ? '#D6356C' : '#222')
            ),
          });
          return (
            <TouchableOpacity key={i}
              style={styles.tabItem}
              onPress={() => this.setState({ index: i })}>
              <Animated.Text style={{ color }}>{route.title}</Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute
  });

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={this._renderTabBar}
        onIndexChange={this._handleIndexChange}
      />
    );
  }
}



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

            const gotoHomNayAnGi=()=>{
              Actions.HomNayAnGi();
            }

        return(
            <TouchableWithoutFeedback>
              <View style={{flex:1}}>
                  <View style={styles.container}>
                      <View style={styles.viewSearch}>
                          <TouchableOpacity onPress={gotoSearch}>
                              <Text style={styles.txtInput} >Tìm kiếm</Text>
                          </TouchableOpacity>
                          <Icon name="shopping-cart" color="aqua" size={30} />
                      </View>
                      <TouchableOpacity style={{flex:1, backgroundColor: '#FF8C00', flexDirection:'column', width:150, justifyContent:'center',
                        alignItems: 'center', height:5, marginTop: 2}} onPress={gotoHomNayAnGi}>
                          <Text style={{color: 'white'}}>Hôm nay ăn gì</Text>
                      </TouchableOpacity>

                  </View>
                  <View style={{flex:4,width:'100%', marginTop: 10}}>
                      <TabViewDetail></TabViewDetail>
                  </View>
              </View>
            </TouchableWithoutFeedback>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flexDirection: 'column',
        flex:1,
        height: '25%',
        alignItems:'center',
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
    },
    tabBar: {
      flexDirection: 'row',
      paddingTop: 0,
    },
    tabItem: {
      flex: 1,
      alignItems: 'center',
       padding: 3,
      borderWidth:1,
      borderColor:'grey'
    },
});
