import React,{Component} from "react";
import {Link} from "react-router-dom";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";
import Card from "../../node_modules/react-bootstrap/Card";
import Button from "../../node_modules/react-bootstrap/Button";

class ContactData extends Component{
    render(){
        let linking;
        if(this.props.backLink!==undefined){
            linking = <Link to={this.props.backLink.path}>
                <Button variant="outline-light" className="rounded-pill">
                    {this.props.backLink.name}
                </Button>
            </Link>;
        }
        return(        
            <Container fluid className="d-flex minh-50vh align-items-center py-5">
                <Row className="mx-0 w-100 mt-5">
                    <Col xs={{span:12,order:1}} md={{span:7,order:2}} className="minh-25vh"></Col>
                    <Col xs={{span:12,order:2}} md={{span:5,order:1}} className="minh-50vh d-flex align-items-center">
                        <Card className="w-100 text-center text-md-start bg-brown border border-dark p-4 opacity-9">
                            <h5 className="text-white">
                                Sed ut perspiciatis
                            </h5>
                            <h2 className="dispaly-6 fw-bold text-white opacity-7 text-shadow">
                                Unde omnis iste
                            </h2>
                            <p className="text-white">
                                Natus error sit voluptatem accusantium doloremque laudantium, 
                                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis 
                                et quasi architecto beatae vitae dicta sunt explicabo. 
                            </p>
                            <div className="w-100 text-center">
                                <Link to="#" className="btn btn-outline-light rounded-pill">
                                    Lorem ipsum <span className="fw-bold mx-1">dolor</span>
                                </Link>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>   
        );
    }
}

export default ContactData;




