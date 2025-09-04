import React, { useState } from 'react'

const ContactUs = () => {

    const [formErrors, setFormErrors] = useState<{ name?: string; email?: string; message?: string; age?: string }>({});

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let valid = true;

        const formData = new FormData(event.currentTarget);
        const name = formData.get('name');
        const age = formData.get('age');
        const email = formData.get('email');
        const message = formData.get('message');

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
        <div>
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", width: "300px", gap: "10px" }}>
                <div>
                    <label>
                        Name:
                        <input type="text" name="name" />
                        {formErrors.name && <span style={{ color: "red" }}>{formErrors.name}</span>}
                    </label>
                </div>
                <div>
                    <label>
                        Age:
                        <input type="number" name="age" />
                        {formErrors.age && <span style={{ color: "red" }}>{formErrors.age}</span>}
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input type="email" name="email" />
                        {formErrors.email && <span style={{ color: "red" }}>{formErrors.email}</span>}
                    </label>
                </div>
                <div>
                    <label>
                        Message:
                        <textarea name="message" />
                        {formErrors.message && <span style={{ color: "red" }}>{formErrors.message}</span>}
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ContactUs
