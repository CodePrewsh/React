import React, { useState, useEffect } from "react";
import { Container, Button, Form, ListGroup } from "react-bootstrap";
import { doc, setDoc, getDocs, collection, deleteDoc } from "firebase/firestore";
import { db, auth } from "./firebase"; // Ensure you import your Firebase config
import "../App.css";

const NoteList = () => {
  const [notes, setNotes] = useState([]);
  const [noteInput, setNoteInput] = useState("");

  useEffect(() => {
    const fetchNotes = async () => {
      if (auth.currentUser) {
        const userNotesRef = collection(db, `users/${auth.currentUser.uid}/notes`);
        const noteDocs = await getDocs(userNotesRef);
        const fetchedNotes = noteDocs.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setNotes(fetchedNotes);
      }
    };
    fetchNotes();
  }, []);

  const addNoteToList = async (noteText) => {
    if (!auth.currentUser) return; // Ensure user is logged in

    const noteData = {
      text: noteText,
      createdAt: new Date(),
    };
    
    const userNotesRef = collection(db, `users/${auth.currentUser.uid}/notes`);
    const newNoteRef = doc(userNotesRef);
    await setDoc(newNoteRef, noteData);
    
    setNotes((prevNotes) => [...prevNotes, { id: newNoteRef.id, ...noteData }]);
    localStorage.setItem("notes", JSON.stringify([...notes, { id: newNoteRef.id, ...noteData }]));
  };

  const deleteNoteFromList = async (noteId) => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      if (!auth.currentUser) return; // Ensure user is logged in

      await deleteDoc(doc(db, `users/${auth.currentUser.uid}/notes`, noteId));

      setNotes((prevNotes) => prevNotes.filter(note => note.id !== noteId));
      const updatedNotes = notes.filter(note => note.id !== noteId);
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
    }
  };

  const handleSaveNote = () => {
    if (noteInput.trim()) {
      addNoteToList(noteInput.trim());
      setNoteInput("");
    }
  };

  return (
    <div className="body-background">
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
