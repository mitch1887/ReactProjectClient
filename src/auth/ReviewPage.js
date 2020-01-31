import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import VideoGame from './VideoGame';

const Auth = (props) => {
    return (
        <Container className="auth-container">
            <Row>
                <Col md="6">
                    <VideoGame updateToken={props.updateToken} />
                </Col>
            </Row>
        </Container>
    )
}

export default Auth;