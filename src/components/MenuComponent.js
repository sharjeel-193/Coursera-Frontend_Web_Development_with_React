import React, {useState} from 'react';
import { Card, CardImg, CardImgOverlay,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {DISHES} from '../shared/dishes.js'
import { baseUrl } from '../shared/baseUrl';

import {Link} from 'react-router-dom';

    
    
    

    const Menu = (props) => {

        // const [dish, setDish] = useState(null);
        const RenderMenuItem = (dish) => {
            return (
                <Card>
                    <Link to={`/menu/${dish.id}`}>
                        <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Link>
                    
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
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    {menu}
                </div>
                
            </div>
        );
    }

export default Menu;