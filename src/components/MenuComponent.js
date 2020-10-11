import React, {useState} from 'react';
import { Card, CardImg, CardImgOverlay,
    CardTitle } from 'reactstrap';
import {DISHES} from '../shared/dishes.js'
import DishDetail from './DishdetailComponent';

    

    // function RenderMenuItem ({dish}) {
    //     return (
    //         <Card onClick={() => setDish(dish)}>
    //             <CardImg width="100%" src={dish.image} alt={dish.name} />
    //             <CardImgOverlay>
    //                 <CardTitle>{dish.name}</CardTitle>
    //             </CardImgOverlay>
    //         </Card>
    //     );
    // }
    function onDishSelect(dishId) {
        this.setState({ selectedDish: dishId});
    }
    

    const Menu = (props) => {

        const [dish, setDish] = useState(null);
        const RenderMenuItem = (dish) => {
            return (
                <Card onClick={() => setDish(dish)}>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Card>
            );
        }

        const menu = DISHES.map((dish) => {
            return (
                <div className="col-12 col-md-5 m-1"  key={dish.id}>
                    {RenderMenuItem(dish)}
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    <DishDetail dish={dish}/>
                </div>
                
            </div>
        );
    }

export default Menu;