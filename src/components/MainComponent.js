import React, {Component} from 'react';
import DishdetailComponent from './DishdetailComponent';
import {Navbar, NavbarBrand} from 'reactstrap'

import { DISHES } from '../shared/dishes';
import MenuComponent from './MenuComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent'


export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
}

  render(){
    return (
      <div>
        <HeaderComponent />
        <MenuComponent dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)}/>
        <DishdetailComponent dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>
        <FooterComponent />
      </div>
    );
  }

}

