import React, { Component } from 'react';
import axios from 'axios';
import {
  Container, Row, Col, Button, Card, CardImg, CardText, CardBody,
  CardTitle
} from 'reactstrap';

class Products extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [
      ]
    }
  }

  componentDidMount() {
    axios.get('https://vxw7e.sse.codesandbox.io/products')
    .then(res => {
      this.setState({
        products: res.data
      });
    });
  }

  render() {

    const { products } = this.state;

    return (
      <Container>
        <Row>
          {products.map(product => (
            <Col sm="4">
              <Card>
                <CardImg
                  top
                  width="100%"
                  src={product.imageUrl} />
                <CardBody>
                  <CardTitle tag="h5">{product.name}</CardTitle>
                  <CardText>{product.description}</CardText>
                  <Button>Add to cart</Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Products