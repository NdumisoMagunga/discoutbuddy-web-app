import React, { Component } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Header from './Header/Header'
import Category from './category/Category'
import Product from './product/Product1'
import Store from './store/Store'
import ViewStore from './store/ViewStore'
import HomePage from './homepage/HomePage'
import Products from './products/Products'
import Login from './Login/Login'
import Manage from './manage/Manage';
import Registration from './Login/Register'
import './App.css';
import Store1 from './store/Store1';
import storesss from './store/StoreView';
const base = "http://130.211.50.71:89";

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      categories: [],
    
    }
    
  }

  render() {
    const {categories} = this.state
   
    return (
   
        <BrowserRouter>
          <div >
            <Header categories={this.state.categories} />
            <Route exact path="/" component={HomePage}/>
            <Route path="/category/:filter?" component = {Category}/>
            <Route path="/products" component = {Product}/>
            <Route path="/stores" component = {Store}/>
            <Route path="/manage" component={Manage} />
            <Route path="/store/:filter?" component = {ViewStore}/>
            <Route path="/login" component = {Login}/>
            <Route path="/register" component = {Registration}/>
            <Route path="/store1" component = {Store1}/>
            <Route path="/singlestore/:filter?" component = {storesss}/>
          
          </div>
        </BrowserRouter>
    
    );
  }

  async _getCategory(){
    let response = await fetch('http://130.211.50.71:89/api/category');
    let result = await response.json();

    this.setState({
      categories: result
    });

  }



  componentDidMount(){
    this._getCategory();
  }

}

export default App;