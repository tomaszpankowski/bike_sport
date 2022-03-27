import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Card from "../../node_modules/react-bootstrap/Card";
import Col from "../../node_modules/react-bootstrap/Col";

class GalleryS1 extends Component{
    render(){
        return(    
            <Container fluid className="gallery-s1 d-flex minh-50vh align-items-center py-5">
            <Row className="mx-0 w-100 mt-5">
                <Col xs={{span:12,order:1}} md={{span:7,order:2}} className="minh-25vh"></Col>
                <Col xs={{span:12,order:2}} md={{span:5,order:1}} className="minh-50vh d-flex align-items-center">
                    <Card className="w-100 text-center text-md-start bg-brown border border-dark p-4 opacity-9">
                        <h2 className="dispaly-6 fw-bold text-white opacity-7 text-shadow">
                            Unde omnis iste
                        </h2>
                        <p className="text-white">
                            Natus error sit voluptatem accusantium doloremque laudantium, 
                            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis 
                            et quasi architecto beatae vitae dicta sunt explicabo. 
                        </p>
                    </Card>
                </Col>
            </Row>
        </Container>
        );
    }
}

export default GalleryS1;