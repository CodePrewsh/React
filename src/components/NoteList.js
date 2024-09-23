import React, { useState, useEffect } from "react";
import { Container, Button, Form, ListGroup } from "react-bootstrap";
import { db, auth } from "./firebase"; // Import the Firestore database instance and auth instance
import { collection, addDoc, getDocs, deleteDoc, doc, query, where } from "firebase/firestore"; // Import Firestore functions
import "../App.css"; // Import custom CSS

const NoteList = () => {
  const [notes, setNotes] = useState([]); // State to hold notes
  const [noteInput, setNoteInput] = useState(""); // State to hold the current note input
  const currentUser = auth.currentUser; // Get the current authenticated user

  // useEffect hook to load notes from Firestore for the current user
  useEffect(() => {
    const loadNotesFromFirestore = async () => {
      if (currentUser) {
        const notesCollection = collection(db, "notes"); // Reference to the "notes" collection in Firestore
        const q = query(notesCollection, where("userId", "==", currentUser.uid)); // Only fetch notes where userId matches current user's uid
        const notesSnapshot = await getDocs(q); // Get all documents in the "notes" collection that match the query
        const notesList = notesSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })); // Map documents to an array of note objects
        setNotes(notesList); // Set the notes in the state
      }
    };

    loadNotesFromFirestore();
  }, [currentUser]); // Reload when the currentUser changes

  // Function to add a new note to Firestore and update state
  const addNoteToList = async (noteText) => {
    if (currentUser) {
      const newNote = { text: noteText, userId: currentUser.uid }; // Attach the current user's uid to the note
      try {
        const docRef = await addDoc(collection(db, "notes"), newNote); // Add new note to Firestore
        const noteWithId = { id: docRef.id, ...newNote }; // Add Firestore document ID to the note
        setNotes((prevNotes) => [...prevNotes, noteWithId]); // Update the state with the new note
      } catch (e) {
        console.error("Error adding note: ", e); // Log any errors
      }
    }
  };

  // Function to delete a note from Firestore and update state
  const deleteNoteFromList = async (noteId) => {
    if (window.confirm("Are you sure you want to delete this note?")) { // Confirm deletion
      try {
        await deleteDoc(doc(db, "notes", noteId)); // Delete note from Firestore
        setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteId)); // Update the state to remove the deleted note
      } catch (e) {
        console.error("Error deleting note: ", e); // Log any errors
      }
    }
  };

  // Function to handle saving a new note
  const handleSaveNote = () => {
    if (noteInput.trim()) { // Check if the input is not empty
      addNoteToList(noteInput.trim()); // Add the note
      setNoteInput(""); // Clear the input field
    }
  };

  // Inline CSS for the background image
  const divStyle = {
    backgroundImage: "url('/NoteTaking.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh"
    // Add more CSS properties as needed
  };

  return (
    <div style={divStyle} className="body-background">
      <Container className="container-custom">
        <h1 className="heading">My Notes</h1>
        <Form.Control
          as="textarea"
          rows={3}
          className="note-input"
          value={noteInput}
          onChange={(e) => setNoteInput(e.target.value)}
          placeholder="Write your note here..."
        />
        <Button className="button" onClick={handleSaveNote}>
          Save Note
        </Button>
        <ListGroup className="note-list">
          {notes.map((note) => (
            <ListGroup.Item key={note.id} className="note-item">
              {note.text}
              <Button
                variant="danger"
                className="delete-button"
                onClick={() => deleteNoteFromList(note.id)}
              >
                &times;
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
    </div>
  );
};

export default NoteList;
