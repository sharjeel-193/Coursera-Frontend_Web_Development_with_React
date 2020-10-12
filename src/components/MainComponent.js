import React, {Component, useState} from 'react';
import DishdetailComponent from './DishdetailComponent';
import {Navbar, NavbarBrand} from 'reactstrap'

import {Switch, Route, Redirect} from 'react-router-dom';

import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import MenuComponent from './MenuComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent'
import HomeComponent from './HomeComponent';
import ContactComponent from './ContactComponent';

function MainComponent() {

  const dishes = DISHES;
  const comments = COMMENTS;
  const promotions  = PROMOTIONS;
  const leaders = LEADERS;

  const HomePage = () => {
    return(
      <HomeComponent
              dish={dishes.filter((dish) => dish.featured)[0]}
              promotion={promotions.filter((promo) => promo.featured)[0]}
              leader={leaders.filter((leader) => leader.featured)[0]}
          />
    );
  }

  return (
    <div>
      <HeaderComponent />
      <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <MenuComponent dishes={dishes} />} />
              <Route exact path='/contactus' component={ContactComponent} />
              <Redirect to="/home" />
      </Switch>
      <FooterComponent />
      
    </div>
  )
}

export default MainComponent


