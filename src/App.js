import React, {Component} from 'react';

import {Navbar, NavbarBrand} from 'reactstrap'
import './App.css';
import Main from './components/MainComponent';
import MenuComponent from './components/MenuComponent';
import { DISHES } from './shared/dishes';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }

  render(){
    return (
      <Main />
    );
  }

}
export default App;
