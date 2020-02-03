import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import VideoGame from './VideoGame';

const ReviewPage = (props) => {
    return (
        <Container className="auth-container">
            <Row>
                <Col md="6">
                    <VideoGame updateToken={props.updateToken} sessionToken={props.sessionToken} />
                </Col>
            </Row>
        </Container>
    )
}

export default ReviewPage;