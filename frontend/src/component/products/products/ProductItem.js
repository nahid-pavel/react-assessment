import React, { useEffect } from 'react';
import { Container, Col, Row, Card, Button, Image, ListGroup } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { getProductById, getProducts } from './helper';
import { useParams } from 'react-router-dom';
import Loading from '../../../_helper/Loading';
import './products.css';



export default function ProductItem() {
    const [product, setProduct] = React.useState({});
    const [loading, setLoading] = React.useState(false);
    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        getProductById(id, setProduct, setLoading)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id, setProduct])


    return (
        <Container style={{ marginTop: '120px' }}>

            <Button className="btn btn-light my-3" onClick={() => history.push('/')}>Go Back</Button>
            { loading && <Loading />}
            <Row>
                {product &&
                    <Container>
                        <Row>
                            <Col md={4} >
                                <Image style={{ height: '50vh', width: '90%' }} src={`/assets${product?.image}`} />

                            </Col>
                            <Col md={4}>

                                <ListGroup variant="flush">
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>
                                                Name:
                                        </Col>
                                            <Col>
                                                {product?.name}
                                            </Col>
                                        </Row>

                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>
                                                Description:
                                        </Col>
                                            <Col>
                                                {product?.description}
                                            </Col>
                                        </Row>

                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>
                                                Price:
                                        </Col>
                                            <Col>
                                                {product?.price}
                                            </Col>
                                        </Row>

                                    </ListGroup.Item>
                                </ListGroup>





                            </Col>

                        </Row>

                    </Container>
                }

            </Row>

        </Container>
    )
}
