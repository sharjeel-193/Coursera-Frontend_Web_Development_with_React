import React, { Component } from 'react'
import {Media} from 'reactstrap'
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
import DishdetailComponent from './DishdetailComponent';

export default class MenuComponent extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            
        }
    }

    

    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className='col-12 col-md-6'>
                    <Card onClick={() => this.props.onClick(dish.id)} >
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle >{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        return (
            <div className='container'>
                <div className='row'>
                    {menu}
                </div>
                <DishdetailComponent dish={this.state.selectedDish} />
            </div>
        );
    }
}
