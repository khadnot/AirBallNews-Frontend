import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function SignupForm({ signup }) {
    const history = useHistory();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        email: "",
    });
    const [formErrors, setFormErrors] = useState([]);

    async function handleSubmit(e) {
        e.preventDefault();
        let result = await signup(formData);
        if (result.success) {
            history.push('/teams');
        } else {
            setFormData(result.errors);
        }
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(data => ({ ...data, [name]: value }));
    }

    return (
        <div className='Signup'>
            <h1>This is the Signup Page! Welcome and GO RIP CITY!!</h1>
            <br />
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>First Name:</label>
                    <input
                        name='firstName'
                        className='form-control'
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                </div>
                <div className='form-group'>
                    <label>Last Name:</label>
                    <input
                        name='lastName'
                        className='form-control'
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </div>
                <div className='form-group'>
                    <label>Username:</label>
                    <input
                        name='username'
                        className='form-control'
                        value={formData.username}
                        onChange={handleChange}
                    />
                </div>
                <div className='form-group'>
                    <label>Password:</label>
                    <input
                        type='password'
                        name='password'
                        className='form-control'
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <div className='form-group'>
                    <label>Email</label>
                    <input
                        type='email'
                        name='email'
                        className='form-control'
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <button tpye='submit' onSubmit={handleSubmit}>
                    Submit
                </button>
            </form>
        </div>)
}

export default SignupForm;