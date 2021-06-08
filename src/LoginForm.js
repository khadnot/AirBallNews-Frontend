import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function LoginForm({ login }) {
    const history = useHistory();
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });
    const [formErrors, setFormErrors] = useState([]);

    // Handle form submit
    async function handleSubmit(e) {
        e.preventDefault();
        let result = await login(formData);
        if (result.success) {
            history.push('/teams');
        } else {
            setFormErrors(result.errors);
        }
    }

    // Update form data field
    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(l => ({ ...l, [name]: value }));
    }

    return (
        <div className='Login'>
            <h1>This is the Login Page! Welcome and Have Fun!</h1>
            <br />
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>Username:</label>
                    <input 
                        name='username'
                        className='form-control'
                        value={formData.username}
                        onChange={handleChange}
                        autoComplete='username'
                        required
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
                        autoComplete='current-password'
                        required
                    />
                </div>

                <button onSubmit={handleSubmit}>
                    Submit
                </button>
            </form>
        </div>)
}

export default LoginForm;