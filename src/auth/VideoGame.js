import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const VideoGame = (props) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState('');

    const [name2, updateName] = useState('');
    const [description2, updateDescription] = useState('');
    const [rating2, updateRating] = useState('');

    const [searchID, setSearchID] = useState('');
    const [searchName, setSearchName] = useState('');

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

    let handleUpdate = (event) => {
        event.preventDefault();
        fetch("http://localhost:3005/videogames/name", {
            method: 'PUT',
            body: JSON.stringify({name: name2, description: description2, rating: rating2}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken)
        })
    }

    let handleSearchID = (event) => {
        event.preventDefault();
        fetch("http://localhost:3005/videogames/id/" + searchID, {
            method: 'GET',
            //body: JSON.stringify({id: searchID}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            console.log(data);
        })
    }

    let handleSearchName = (event) => {
        event.preventDefault();
        fetch("http://localhost:3005/videogames/name/" + searchName, {
            method: 'GET',
            //body: JSON.stringify({id: searchID}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            console.log(data);
        })
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
            <h1>Update Review</h1>
            <Form onSubmit={handleUpdate}>
                <FormGroup>
                    <Label htmlFor="name2">Name</Label>
                    <Input onChange={(e) => updateName(e.target.value)} name="name2" value={name2} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="description2">Review</Label>
                    <Input onChange={(e) => updateDescription(e.target.value)} name="description2" value={description2} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="rating2">Rating</Label>
                    <Input onChange={(e) => updateRating(e.target.value)} name="rating2" value={rating2} />
                </FormGroup>
                <Button type="submit">Submit</Button>
            </Form>
            <h1>Get Review by ID</h1>
            <Form onSubmit={handleSearchID}>
                <FormGroup>
                    <Label htmlFor="searchID">ID</Label>
                    <Input onChange={(e) => setSearchID(e.target.value)} name="searchID" value={searchID} />
                </FormGroup>
                <Button type="submit">Submit</Button>
            </Form>
            <h1>Get Review by Name</h1>
            <Form onSubmit={handleSearchName}>
                <FormGroup>
                    <Label htmlFor="searchName">Name</Label>
                    <Input onChange={(e) => setSearchName(e.target.value)} name="searchName" value={searchName} />
                </FormGroup>
                <Button type="submit">Submit</Button>
            </Form>
            
        </div>
    )
}

export default VideoGame;