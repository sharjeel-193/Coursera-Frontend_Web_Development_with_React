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
import AboutComponent from './AboutComponent';

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

  const DishWithId = ({match}) => {
    return(
        <DishdetailComponent dish={dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
          comments={comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
    );
  };

  const aboutPage = () => {
    return(
      <AboutComponent leaders={leaders} />
    );
  }

  return (
    <div>
      <HeaderComponent />
      <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <MenuComponent dishes={dishes} />} />
              <Route path='/contactus' component={ContactComponent} />
              <Route path='/menu/:dishId' component={DishWithId} />
              <Route path='/aboutus' component={aboutPage} />
              {/* <Redirect to="/home" /> */}
      </Switch>
      <FooterComponent />
      
    </div>
  )
}

export default MainComponent


