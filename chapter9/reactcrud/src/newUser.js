import React, { Component } from "react";
// Instead of importing the entire Firebase library, import only the specific modules you need for better performance and smaller bundle size
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import { Table, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

class User_ extends Component {
  constructor(props) {
    super(props);
    // Initialize state with users array, and flags for delete dialog and selected user
    this.state = {
      users: [],
      showDeleteDialog: false,
      selectedUser: {},
    };
    // Bind methods to the component instance
    this.add = this.add.bind(this);
    this.closeDeleteDialog = this.closeDeleteDialog.bind(this);
    this.delete = this.delete.bind(this);
  }

  componentDidMount() {
    // Fetch initial user data from Firebase database when component mounts
    firebase
      .database()
      .ref("/")
      .on("value", (snapshot) => {
        // Convert Firebase snapshot to array of users
        let returnArr = [];
        snapshot.forEach((data) => {
          var user = data.val();
          user["key"] = data.key;
          returnArr.push(user);
        });
        // Update state with fetched user data
        this.setState({
          users: returnArr,
        });
        // Log snapshot value for debugging
        console.log(snapshot.val());
      });
  }

  // Method to navigate to the add user page
  add(e) {
    this.props.history.push("/add");
  }

  // Method to open delete confirmation dialog
  openDeleteDialog(user) {
    this.setState({
      showDeleteDialog: true,
      selectedUser: user,
    });
  }

  // Method to delete user from Firebase database
  delete(e) {    
    firebase.database().ref('/'+this.state.selectedUser.key).remove()
    .then( x=> {
        // Log success message and close delete dialog
        console.log("SUCCESS");
        this.closeDeleteDialog();
    })
    .catch( error => {
        // Alert user if deletion fails and log error
        alert("Could not delete the user.");
        console.log("ERROR", error)
    });
  }

  // Method to close delete confirmation dialog
  closeDeleteDialog() {
    this.setState({ 
        showDeleteDialog: false,
        selectedUser: {}
    });
  }

  render() {
    // Map through users array and create table rows for each user
    const listUsers = this.state.users.map((user) => (
      <tr key={user.key}>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>
          <Link to={`/edit/${user.key}`}>Edit</Link>
        </td>
        <td>
          {/* Button to trigger delete confirmation dialog */}
          <Button onClick={this.openDeleteDialog.bind(this, user)}>
            Remove
          </Button>
        </td>
      </tr>
    ));

    return (
      <div>
        {/* Button to navigate to add user page */}
        <Button variant="primary" onClick={this.add}>
          Add
        </Button>
        {/* Table to display list of users */}
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{listUsers}</tbody>
        </Table>
        {/* Modal for delete confirmation dialog */}
        <Modal
          show={this.state.showDeleteDialog}
          onHide={this.closeDeleteDialog}
        >
          <Modal.Header closeButton>
            <Modal.Title>Delete User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Are you sure you want to delete
              {this.state.selectedUser.username}?
            </p>
            <hr />
          </Modal.Body>
          <Modal.Footer>
            {/* Button to delete user */}
            <Button onClick={this.delete}>Delete</Button>
            {/* Button to close delete confirmation dialog */}
            <Button onClick={this.closeDeleteDialog}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
export default User_;
