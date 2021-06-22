import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Alert from './Alert'

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
        <div className="LoginForm">
        <div className="col-md-6 offset-md-3 col-lg-4 offset-lg-4">
          <h3 className="mb-3">Log In to Air Ball News</h3>

          <div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Username</label>
                  <input
                      name="username"
                      className="form-control"
                      value={formData.username}
                      onChange={handleChange}
                      autoComplete="username"
                      required
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                      type="password"
                      name="password"
                      className="form-control"
                      value={formData.password}
                      onChange={handleChange}
                      autoComplete="current-password"
                      required
                  />
                </div>

                {formErrors.length
                    ? <Alert type="danger" messages={formErrors} />
                    : null}
                    
                <br />
                <button
                    className="btn btn-primary float-right"
                    onSubmit={handleSubmit}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
}

export default LoginForm;