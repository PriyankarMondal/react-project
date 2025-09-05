import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';

const ContactUs = () => {

    const [formErrors, setFormErrors] = useState<{ name?: string; email?: string; message?: string; age?: string }>({});

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let valid = true;
        let name = ""
        let age = ""
        let email = ""
        let message = ""

        const formData: any = new FormData(event.currentTarget);
        name = formData.get('name');
        age = formData.get('age');
        email = formData.get('email');
        message = formData.get('message');

        if (name === "") {
            setFormErrors(prev => ({ ...prev, name: "Name is required" }))
            valid = false;
        } else {
            setFormErrors(prev => ({ ...prev, name: undefined }))
            valid = true;
        }

        if (age === "") {
            setFormErrors(prev => ({ ...prev, age: "Age is required" }))
            valid = false;
        } else {
            setFormErrors(prev => ({ ...prev, age: undefined }))
            valid = true;
        }

        if (email === "") {
            setFormErrors(prev => ({ ...prev, email: "Email is required" }))
            valid = false;
        } else {
            setFormErrors(prev => ({ ...prev, email: undefined }))
            valid = true;
        }

        if (message === "") {
            setFormErrors(prev => ({ ...prev, message: "Message is required" }))
            valid = false;
        } else {
            setFormErrors(prev => ({ ...prev, message: undefined }))
            valid = true;
        }

        if (valid) {
            // Submit the form
        }
    };

    return (
        <div className='d-flex flex-column align-items-center justify-content-center'>
            <h1 className='pb-5'>Contact Us</h1>
            <Form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", width: "300px", gap: "10px" }}>
                <Form.Group>
                    <Form.Control type="text" name='name' placeholder="Name" />
                    {formErrors.name && <span style={{ color: "red" }}>{formErrors.name}</span>}
                </Form.Group>
                <Form.Group>
                    <Form.Control type="text" name='age' placeholder="Age" />
                    {formErrors.age && <span style={{ color: "red" }}>{formErrors.age}</span>}
                </Form.Group>
                <Form.Group>
                    <Form.Control type="email" name='email' placeholder="Email" />
                    {formErrors.email && <span style={{ color: "red" }}>{formErrors.email}</span>}
                </Form.Group>
                <Form.Group>
                    <Form.Control as={"textarea"} name='message' placeholder="Message" />
                    {formErrors.message && <span style={{ color: "red" }}>{formErrors.message}</span>}
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </div>
    )
}

export default ContactUs
