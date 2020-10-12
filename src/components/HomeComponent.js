import React from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';

function RenderCard({item}) {

    if(item!=null){
        return(
            <Card>
                <CardImg src={item.image} alt={item.name} />
                <CardBody>
                <CardTitle>{item.name}</CardTitle>
                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
                <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
        );
    } else {
        return(
            <div></div>
        );
    }

}
function Logging(item){
    console.log(item)
}

function HomeComponent(props) {
    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish} />
                    {Logging(props.dish)}
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion} />
                    {Logging(props.promotion)}
                    
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader} />
                    
                </div>
            </div>
        </div>
    );
}
export default HomeComponent
