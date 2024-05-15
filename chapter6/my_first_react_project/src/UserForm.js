import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

class UserForm extends Component {
  render() {
    return (
      <div>
        <h1>You better have a Valid Email!</h1> {/* Header */}
        <Formik
          initialValues={{ email: '', password: '' }} // Initial form values
          validate={values => { // Validation function
            const errors = {};
            if (!values.email) { // Check if email is empty
              errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) { // Check email format
              errors.email = 'Invalid email address';
            } else if (values.email.length < 10) { // Check minimum length of email
              errors.email = 'Email address too short';
            }
            
            if (!values.password) { // Check if password is empty
              errors.password = 'Required';
            } else if (values.password.length < 8) { // Check minimum length of password
              errors.password = 'Password too short';
            } 
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => { // Submission handler
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2)); // Alert with form values
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => ( // Form rendering function
           <Form>
           <Field type="email" name="email" /> {/* Email input field */}
           <span style={{ color:"red", fontWeight: "bold" }}>
           <ErrorMessage name="email" component="div" /> {/* Error message for email */}
           </span> 
           <Field type="password" name="password" /> {/* Password input field */}
           <span style={{ color:"red", fontWeight: "bold" }}>
           <ErrorMessage name="password" component="div" /> {/* Error message for password */}
           </span> 
           <button type="submit" disabled={isSubmitting}>
           Submit
           </button> {/* Submit button */}
           </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default UserForm;
