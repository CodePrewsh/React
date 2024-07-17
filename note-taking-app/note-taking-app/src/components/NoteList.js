// src/components/NoteList.js

import React, { useState, useEffect } from "react";
import { Container, Button, Form, ListGroup } from "react-bootstrap";
import { db } from "./firebase"; // Ensure this path is correct
import { collection, addDoc, getDocs, doc, deleteDoc } from "firebase/firestore";
import "../App.css";

const NoteList = () => {
  const [notes, setNotes] = useState([]);
  const [noteInput, setNoteInput] = useState("");

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    const fetchNotes = async () => {
      const notesCollection = collection(db, "notes");
      const notesSnapshot = await getDocs(notesCollection);
      const firestoreNotes = notesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      const allNotes = [...new Set([...savedNotes, ...firestoreNotes])];
      setNotes(allNotes);
      localStorage.setItem("notes", JSON.stringify(allNotes));
    };
    fetchNotes();
  }, []);

  const addNoteToList = async (noteText) => {
    const newNote = { text: noteText };

    // Add to Firestore
    const docRef = await addDoc(collection(db, "notes"), newNote);
    const firestoreNote = { id: docRef.id, ...newNote };

    // Add to localStorage
    setNotes((prevNotes) => {
      const updatedNotes = [...prevNotes, firestoreNote];
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
      return updatedNotes;
    });
  };

  const deleteNoteFromList = async (noteId) => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      // Delete from Firestore
      await deleteDoc(doc(db, "notes", noteId));

      // Delete from localStorage
      setNotes((prevNotes) => {
        const updatedNotes = prevNotes.filter((note) => note.id !== noteId);
        localStorage.setItem("notes", JSON.stringify(updatedNotes));
        return updatedNotes;
      });
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
