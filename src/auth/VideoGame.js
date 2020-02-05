import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import APIURL from '../helpers/environment'

const VideoGame = (props) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState('');

    const [name2, updateName] = useState('');
    const [description2, updateDescription] = useState('');
    const [rating2, updateRating] = useState('');

    const [searchID, setSearchID] = useState('');
    const [searchName, setSearchName] = useState('');

    const [deleteID, setDeleteID] = useState('');
    const [deleteName, setDeleteName] = useState('');

    var submitText, updateText = useState('');

    let handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/videogames`, {
            method: 'POST',
            body: JSON.stringify({name: name, description: description, rating: rating}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            console.log(data)
            submitText = data;
            
        })
    }

    let handleUpdate = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/videogames/name/${name2}`, {
            method: 'PUT',
            body: JSON.stringify({name: name2, description: description2, rating: rating2}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            console.log(data)
            updateText = data;
            
        })
    }

    let handleSearchID = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/videogames/id/${searchID}`, {
            method: 'GET',
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
        fetch(`${APIURL}/videogames/name/${searchName}`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            console.log(data);
        })
    }

    let handleDeleteID = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/videogames/${deleteID}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            console.log(data);
        })
    }

    let handleDeleteName = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/videogames/${deleteName}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
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
                {submitText}
            </Form>
            <br/>
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
                {updateText}
            </Form>
            <br/>
            <h1>Get Review by ID</h1>
            <Form onSubmit={handleSearchID}>
                <FormGroup>
                    <Label htmlFor="searchID">ID</Label>
                    <Input onChange={(e) => setSearchID(e.target.value)} name="searchID" value={searchID} />
                </FormGroup>
                <Button type="submit">Submit</Button>
            </Form>
            <br/>
            <h1>Get Review by Name</h1>
            <Form onSubmit={handleSearchName}>
                <FormGroup>
                    <Label htmlFor="searchName">Name</Label>
                    <Input onChange={(e) => setSearchName(e.target.value)} name="searchName" value={searchName} />
                </FormGroup>
                <Button type="submit">Submit</Button>
            </Form>
            <br/>
            <h1>Delete Review by ID</h1>
            <Form onSubmit={handleDeleteID}>
                <FormGroup>
                    <Label htmlFor="deleteID">ID</Label>
                    <Input onChange={(e) => setDeleteID(e.target.value)} name="deleteID" value={deleteID} />
                </FormGroup>
                <Button type="submit">Submit</Button>
            </Form>
            <br/>
            <h1>Delete Review by Name</h1>
            <Form onSubmit={handleDeleteName}>
                <FormGroup>
                    <Label htmlFor="deleteName">Name</Label>
                    <Input onChange={(e) => setDeleteName(e.target.value)} name="deleteName" value={deleteName} />
                </FormGroup>
                <Button type="submit">Submit</Button>
            </Form>
            
        </div>
    )
}

export default VideoGame;