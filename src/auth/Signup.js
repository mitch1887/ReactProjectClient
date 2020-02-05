import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import APIURL from '../helpers/environment'

const Signup = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(firstName, lastName, email, password);

        var firstNameValid = (/^[\w'\-,.]*[^_!¡?÷?¿\/\\+=@#$%ˆ&*(){}|~<>;:[\]]*$/.test(firstName))
        var lastNameValid = (/^[\w'\-,.]*[^_!¡?÷?¿\/\\+=@#$%ˆ&*(){}|~<>;:[\]]*$/.test(lastName))
        var emailValid = (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email))
        var passwordValid = (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password))
        console.log(firstNameValid, lastNameValid, emailValid, passwordValid);

        if (firstNameValid && lastNameValid && emailValid && passwordValid) {
            fetch(`${APIURL}/user/signup`, {
                method: 'POST',
                body: JSON.stringify({ firstName: firstName, lastName: lastName, email: email, password: password }),
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            }).then(
                (response) => response.json()
            ).then((data) => {
                props.updateToken(data.sessionToken)
            })
        } else {
            if (!firstNameValid)
                console.log("First name invalid!")
            if (!lastNameValid)
                console.log("Last name invalid!")
            if (!emailValid)
                console.log("Email invalid!")
            if (!passwordValid)
                console.log("Password must contain at least 8 characters, 1 number, 1 uppercase, and 1 lowercase!")
        }

    }

    return (
        <div>
            <h1>Sign Up</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input onChange={(e) => setFirstName(e.target.value)} name="firstName" value={firstName} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input onChange={(e) => setLastName(e.target.value)} name="lastName" value={lastName} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input onChange={(e) => setEmail(e.target.value)} name="email" value={email} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input onChange={(e) => setPassword(e.target.value)} name="password" value={password} />
                </FormGroup>
                <Button type="submit">Signup</Button>
            </Form>
        </div>
    )
}

export default Signup;