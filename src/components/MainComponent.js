import React, {Component, useState} from 'react';
import DishdetailComponent from './DishdetailComponent';
import {Navbar, NavbarBrand} from 'reactstrap'

import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import {addComment} from '../redux/ActionCreators'


import MenuComponent from './MenuComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent'
import HomeComponent from './HomeComponent';
import ContactComponent from './ContactComponent';
import AboutComponent from './AboutComponent';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}
const mapDispatchToProps = (dispatch) => ({
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment))
})


class MainComponent extends Component {

  constructor(props){
    super(props)
  }

  render() {

    const HomePage = () => {
      return(
        <HomeComponent
                dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
                leader={this.props.leaders.filter((leader) => leader.featured)[0]}
            />
      );
    }
  
    const DishWithId = ({match}) => {
      return(
          <DishdetailComponent dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} 
            addComment={this.props.addComment} />
      );
    };
  
    const aboutPage = () => {
      return(
        <AboutComponent leaders={this.props.leaders} />
      );
    }

    return (
      <div>
        <HeaderComponent />
        <Switch>
                <Route path='/' exact component={HomePage} />
                <Route exact path='/menu' component={() => <MenuComponent dishes={this.props.dishes} />} />
                <Route path='/contactus' component={ContactComponent} />
                <Route path='/menu/:dishId' component={DishWithId} />
                <Route path='/aboutus' component={aboutPage} />
                {/* <Redirect to="/home" /> */}
        </Switch>
        
        <FooterComponent />
        
      </div>
    )
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent))


