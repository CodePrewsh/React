import React, { Component } from 'react'
// Import Formik components for form management
import { Formik, Form, Field, ErrorMessage } from 'formik';
// Import Firebase modules for database operations
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'

class UserForm extends Component {
   title; // Variable to store form title
   id; // Variable to store user ID

   constructor(props) {
      super(props)
      // Get user ID from URL params
      this.id = this.props.match.params.id;
      // Set default form title
      this.title = 'New user';
      // Initialize form state
      this.state = {
         username: '',
         email: ''
      };

      // If user ID exists, change form title
      if (this.id) {
         this.title = 'Edit user';
      }
   }

   componentDidMount() {
      // Check if user ID exists
      if (this.id) {
         // Fetch user data from Firebase database
         firebase.database().ref("/" + this.id)
            .on("value", snapshot => {
               // Update form state with fetched user data
               this.setState({
                  username: snapshot.val().username,
                  email: snapshot.val().email
               })
            });
      }
   }

   render() {
      return (
         <div>
            {/* Display form title */}
            <h1>{this.title}</h1>

            {/* Formik form for form management */}
            <Formik
               enableReinitialize={true}
               // Set initial form values from component state
               initialValues={{
                  username: this.state.username,
                  email: this.state.email
               }}
               // Form validation logic
               validate={values => {
                  let errors = {}
                  if (!values.email) {
                     errors.email = 'Required';
                  } else if (
                     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                  ) {
                     errors.email = 'Invalid email address';
                  } else if (values.email.length < 10) {
                     errors.email = 'Email is too short'
                  }

                  if (!values.username) {
                     errors.username = 'Username is required'
                  } else if (values.username.length < 3) {
                     errors.username = 'Username too short';
                  }

                  return errors
               }}
               // Form submission logic
               onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                     // Push form data to Firebase database
                     firebase.database().ref('/').push({
                        username: values.username,
                        email: values.email
                     }).then(() => this.props.history.push("/"));
                     // Reset submit button state
                     setSubmitting(false)
                  }, 400);
               }}
            >
               {({ isSubmitting }) => (
                  <Form>
                     {/* Email field */}
                     <Field type="email" name="email" />
                     {/* Display email field errors */}
                     <span style={{ color: 'red', fontWeight: 'bold' }}>
                        <ErrorMessage name='email' component="div" />
                     </span>

                     {/* Username field */}
                     <Field type="text" name="username" />
                     {/* Display username field errors */}
                     <span style={{ color: 'red', fontWeight: 'bold' }}>
                        <ErrorMessage name='username' component="div" />
                     </span>

                     {/* Submit button */}
                     <button type='submit' disabled={isSubmitting}>
                        Submit
                     </button>
                  </Form>
               )}
            </Formik>
         </div>
      )
   }
}

export default UserForm;
