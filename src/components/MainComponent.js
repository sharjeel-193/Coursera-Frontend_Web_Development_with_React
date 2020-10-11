import React, {Component} from 'react';
import DishdetailComponent from './DishdetailComponent';
import {Navbar, NavbarBrand} from 'reactstrap'

import {Switch, Route, Redirect} from 'react-router-dom';

import { DISHES } from '../shared/dishes';
import MenuComponent from './MenuComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent'
import HomeComponent from './HomeComponent';

function MainComponent() {

  const dishes = DISHES;

  const HomePage = () => {
    return(
      <HomeComponent />
    );
  }

  return (
    <div>
      <HeaderComponent />
      <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <MenuComponent dishes={dishes} />} />
              <Redirect to="/home" />
      </Switch>
      <FooterComponent />
      
    </div>
  )
}

export default MainComponent


