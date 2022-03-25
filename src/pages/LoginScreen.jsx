import React from 'react';
import {Form, Button} from 'react-bootstrap'

export const LoginScreen = () => {
  return (
    <>
      <Form className='w-25 mx-auto mt-5' >
        <Form.Group className="mb-3 " controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="d-block mb-3 mx-auto " controlId="radio">
          <Form.Check
            inline
            label="User"
            name="group1"
            type="radio"
            id='inline-radio-1'
          />
          <Form.Check
            inline
            label="Admin"
            name="group1"
            type="radio"
            id='inline-radio-2' />
        </Form.Group>
        
       

        <Button className='w-75 d-block mx-auto' variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}
