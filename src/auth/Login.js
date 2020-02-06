import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button, Row, Col } from 'reactstrap';
import APIURL from '../helpers/environment'

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(email, password);
        
        var emailValid = (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email))
        var passwordValid = (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password))
        console.log(emailValid, passwordValid);

        if (emailValid && passwordValid) {
            fetch(`${APIURL}/user/signin`, {
                method: 'POST',
                body: JSON.stringify({ email: email, password: password }),
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            }).then(
                (response) => response.json()
            ).then((data) => {
                props.updateToken(data.sessionToken)
            })
        } else {
            if (!emailValid)
                alert("Email invalid!")
            if (!passwordValid)
                alert("Password must contain at least 8 characters, 1 number, 1 uppercase, and 1 lowercase!")
        }
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input onChange={(e) => setEmail(e.target.value)} name="email" value={email} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input onChange={(e) => setPassword(e.target.value)} name="password" value={password} />
                </FormGroup>
                <Button type="submit">Login</Button>
            </Form>
        </div>
    )
}

export default Login;