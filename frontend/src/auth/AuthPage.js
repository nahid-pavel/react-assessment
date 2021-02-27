import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SignIn from './signin/SignIn';
import SignUp from './signup/SignUp';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';



export default function AuthPage() {
    const history = useHistory();
    const { profileData } = useSelector(state => {
        return state?.auth
    })



    useEffect(() => {
        if (profileData?.isAuth) {
            history.push('/')
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [profileData])
    return (
        <Container style={{ marginTop: '120px' }}>
            <Row>
                <Col md={6}>
                    <SignIn />
                </Col>
                <Col md={6}>
                    <SignUp />
                </Col>

            </Row>
        </Container>

    )
}

