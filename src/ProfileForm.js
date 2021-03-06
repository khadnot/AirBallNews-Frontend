import React, { useState, useContext } from "react";
import Alert from "./Alert";
import Api from "./api";
import UserContext from "./auth/UserContext";

// Form to edit user profile

function ProfileForm() {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const [formData, setFormData] = useState({
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        username: currentUser.username,
        password: '',
        email: currentUser.email
    });
    const [formErrors, setFormErrors] = useState([]);

    // update profile confirmation
    const [saveConfirmed, setSaveConfirmed] = useState(false);

    console.debug(
        'ProfileForm',
        'currentUser=', currentUser,
        'formData=', formData,
        'formErrors=', formErrors,
        'saveConfirmed=', saveConfirmed
    );

    /** Form on submit:
     * 
     * try: save info to backend & report any errors
     * - if successful:
     *  - clear previous error messages and password
     *  - show save confirmed message
     *  - set currentUser to updated info
     */

    async function handleSubmit(e) {
        e.preventDefault();

        let profileData = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            password: formData.password,
        };

        let username = formData.username;
        let updatedUser;

        try {
          updatedUser = await Api.saveProfile(username, profileData);
        } catch(err) {
            debugger;
            setFormErrors(err);
            return;
        }

        setFormData(f => ({ ...f, password: "" }));
        setFormErrors([]);
        setSaveConfirmed(true);

        // reloading user information throughout site
        setCurrentUser(updatedUser);
    }

    // Handles change in form data
    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(f => ({
            ...f,
            [name]: value,
        }));
        setFormErrors([]);
    }
    
    return(
        <div className="col-md-6 col-lg-4 offset-md-3 offset-lg-4">
        <div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <h3 className="form-control-plaintext">Edit User: {currentUser.username}</h3>
              </div>
              <div className="form-group">
                <label>First Name:</label>
                <input
                    name="firstName"
                    className="form-control"
                    value={formData.firstName}
                    onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Last Name:</label>
                <input
                    name="lastName"
                    className="form-control"
                    value={formData.lastName}
                    onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Confirm password to make changes:</label>
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    value={formData.password}
                    onChange={handleChange}
                />
              </div>

              {formErrors.length
                  ? <Alert type="danger" messages={["Incorrect Password Entered"]} />
                  : null}

              {saveConfirmed
                  ?
                  <Alert type="success" messages={["Updated successfully."]} />
                  : null}

              <button
                  className="btn btn-primary btn-block mt-4"
                  onClick={handleSubmit}
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    );
}

export default ProfileForm;
