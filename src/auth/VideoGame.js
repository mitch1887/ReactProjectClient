import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const VideoGame = (props) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState('');

    const [searchID, setSearchID] = useState('');

    let handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:3005/videogames", {
            method: 'POST',
            body: JSON.stringify({name: name, description: description, rating: rating}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken)
        })
    }

    let handleSearch = (event) => {
        event.preventDefault();
        fetch("http://localhost:3005/videogames/id", {
            method: 'POST',
            body: JSON.stringify({id: searchID}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        )//.then((data) => {
           // props.updateToken(data.sessionToken)
        //})
    }

    return (
        <div>
            <h1>Submit Review</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="name">Name</Label>
                    <Input onChange={(e) => setName(e.target.value)} name="name" value={name} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="description">Review</Label>
                    <Input onChange={(e) => setDescription(e.target.value)} name="description" value={description} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="rating">Rating</Label>
                    <Input onChange={(e) => setRating(e.target.value)} name="rating" value={rating} />
                </FormGroup>
                <Button type="submit">Submit</Button>
            </Form>
            <h1>Get Review</h1>
            <Form onSubmit={handleSearch}>
                <FormGroup>
                    <Label htmlFor="searchID">ID</Label>
                    <Input onChange={(e) => setSearchID(e.target.value)} name="searchID" value={searchID} />
                </FormGroup>
                <Button type="submit">Submit</Button>
            </Form>
        </div>
    )
}

export default VideoGame;