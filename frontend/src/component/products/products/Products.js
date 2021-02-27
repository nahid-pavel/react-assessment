import React, { useEffect } from 'react';
import { Container, Col, Row, Card, Button } from 'react-bootstrap';
import { getProducts } from './helper';
import { useHistory } from 'react-router-dom';

import './products.css';
import Loading from '../../../_helper/Loading';



export default function Products() {
    const [products, setProducts] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const history = useHistory();

    useEffect(() => {
        getProducts(setProducts, setLoading)

    }, [setProducts])


    return (

        <Container style={{ marginTop: '120px' }}>

            <div className="m-3">
                <h3>All Products</h3>
            </div>
            { loading && <Loading />}
            <Row>
                {products?.map(item => {
                    return (
                        <Col md={3} lg={3} className="m-3">
                            <Card className="item-card" style={{ minHeight: '400px', maxHeight: '400px' }}>
                                <Card.Img style={{
                                    width: '100%',
                                    height: '40vh',
                                    objectFit: 'cover'
                                }} variant="top" src={`./assets${item?.image}`} />
                                <Card.Body>
                                    <Card.Title>{item?.name}</Card.Title>
                                    <Card.Text>
                                        {item?.price}
                                    </Card.Text>
                                    <Button variant="success" className="view" onClick={() => history.push(`/products/${item?._id}`)}>View Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}

            </Row>

        </Container>
    )
}
