import React, {useState} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb ,BreadcrumbItem, ModalBody, ModalHeader, Modal, FormGroup, Row, Input, Button, Label } from 'reactstrap';
import {Link} from 'react-router-dom'
import { LocalForm, Control, Errors } from 'react-redux-form'


    // function RenderDish(props){}
    function RenderDish({dish}) {
        if (dish != null) {
            return (
                <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle> {dish.name} </CardTitle>
                            <CardText> {dish.description} </CardText>
                        </CardBody>
                </Card>   
            );
        } else {
            return (
                <div></div>
            );
        }
    }

    // function RenderComments(props){}
    function RenderComments({comments}) {
        if (comments != null) {
            const cmnts = comments.map((commnts) => {
                return (
                    <ul key={commnts.id} className="list-unstyled">
                        <li>
                            <p> {commnts.comment} </p>
                            <p> -- {commnts.author},
                                &nbsp;
                                {new Intl.DateTimeFormat('en-US', {
                                    year: 'numeric',
                                    month: 'short',
                                    day: '2-digit'
                                }).format(new Date(Date.parse(commnts.date)))}
                            </p>
                        </li>
                    </ul>
                );
            });

            return (
                <div>
                    <h4> Comments </h4>
                    {cmnts}
                </div>
                
            );  
        // if comments is empty     
        } else {
            return (
                <div></div>
            );
        }
    }


    
    const DishDetail = (props) => {

        const [isModalOpen, setisModalOpen] = useState(false);
        // const [rating, setRating] = useState(1);
        // const [comment, setComment] = useState('');

        function toggleCommentModal(){
            setisModalOpen(!isModalOpen)
        }
        const required = (val) => val && val.length;
        const maxLength = (len) => (val) => !(val) || (val.length <= len);
        const minLength = (len) => (val) => val && (val.length >= len);
        
        return(
            <div>
                <Modal isOpen={isModalOpen} toggle={toggleCommentModal}>
                    <ModalHeader toggle={toggleCommentModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm>
                            <FormGroup>
                                <Label htmlFor="author">Your Name</Label>
                                <Control.text model=".author" id="author" name="author"
                                            placeholder="Your Name"
                                            className="form-control"
                                            validators={{
                                                required, minLength: minLength(3), maxLength: maxLength(20)
                                            }} />
                                <Errors 
                                    className="text-danger"
                                    model=".author"
                                    show="touched"
                                    messages={{
                                        
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                    }}/>

                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="rating">Rating</Label>
                                <Control.select model="rating" name="rating" className="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="comments">Comment</Label>
                                <Control.textarea model=".comment" name="comment" className="form-control" rows={6}/>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Submit</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>                
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={props.dish} />
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <RenderComments comments={props.comments} />
                            <Button outline onClick={toggleCommentModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
                        </div>
                        
                        
                        
                    </div>
                </div>
            </div>
        );
    }
    
export default DishDetail;