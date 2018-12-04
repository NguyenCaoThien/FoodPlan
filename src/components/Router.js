
import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Home  from './Home';
import FoodList from './FoodList';
import Search from './Search'
import Filter from './Filter'


const Routes = () => (
    <Router>
       <Scene key = "root">
          <Scene key = "home" component = {Home} hideNavBar={true} initial = {true} />
          <Scene key = "XuHuong" component = {FoodList} title = "Xu hướng" />
          <Scene key = "PhoBien" component = {FoodList} title = "Phổ biến" />
          <Scene key = "TruyenThong" component = {FoodList} title = "Truyền thống" />
          <Scene key = "Search" component = {Search} title = "" hideNavBar={true} />
          <Scene key = "SearchResult" component = {FoodList} title = "Danh sách món ăn"  />
          <Scene key = "Filter" component = {Filter} title = "Lọc" />
       </Scene>
    </Router>
 )
 export default Routes