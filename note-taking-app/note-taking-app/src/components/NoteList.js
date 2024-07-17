import React, { useState, useEffect } from "react";
import { Container, Button, Form, ListGroup } from "react-bootstrap";
import { db } from "./firebase"; // Updated path to match the location of firebase.js
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import "../App.css";

const NoteList = () => {
  const [notes, setNotes] = useState([]);
  const [noteInput, setNoteInput] = useState("");

  // Load notes from session storage first, then Firestore
  useEffect(() => {
    const loadNotesFromSession = () => {
      const sessionNotes = JSON.parse(sessionStorage.getItem("notes")) || [];
      setNotes(sessionNotes);
    };

    const loadNotesFromFirestore = async () => {
      const notesCollection = collection(db, "notes");
      const notesSnapshot = await getDocs(notesCollection);
      const notesList = notesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setNotes(notesList);
      // local storage and session storage with Firestore notes
      localStorage.setItem("notes", JSON.stringify(notesList));
      sessionStorage.setItem("notes", JSON.stringify(notesList));
    };

    loadNotesFromSession();
    loadNotesFromFirestore();
  }, []);

  const addNoteToList = async (noteText) => {
    const newNote = { text: noteText };
    try {
      const docRef = await addDoc(collection(db, "notes"), newNote);
      const noteWithId = { id: docRef.id, ...newNote };
      setNotes((prevNotes) => {
        const updatedNotes = [...prevNotes, noteWithId];
        // Update local and session storage
        localStorage.setItem("notes", JSON.stringify(updatedNotes));
        sessionStorage.setItem("notes", JSON.stringify(updatedNotes));
        return updatedNotes;
      });
    } catch (e) {
      console.error("Error adding note: ", e);
    }
  };

  const deleteNoteFromList = async (noteId) => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      try {
        await deleteDoc(doc(db, "notes", noteId));
        setNotes((prevNotes) => {
          const updatedNotes = prevNotes.filter((note) => note.id !== noteId);
          // Update local and session storage
          localStorage.setItem("notes", JSON.stringify(updatedNotes));
          sessionStorage.setItem("notes", JSON.stringify(updatedNotes));
          return updatedNotes;
        });
      } catch (e) {
        console.error("Error deleting note: ", e);
      }
    }
  };

  const handleSaveNote = () => {
    if (noteInput.trim()) {
      addNoteToList(noteInput.trim());
      setNoteInput("");
    }
  };

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
