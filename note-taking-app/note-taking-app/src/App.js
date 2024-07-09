import React, { useState, useEffect } from 'react';
import { Container, Button, Form, ListGroup } from 'react-bootstrap';
import './App.css';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [noteInput, setNoteInput] = useState('');

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(savedNotes);
  }, []);

  const addNoteToList = (noteText) => {
    setNotes(prevNotes => {
      const updatedNotes = [...prevNotes, noteText];
      localStorage.setItem('notes', JSON.stringify(updatedNotes));
      return updatedNotes;
    });
  };


  const divStyle = {
    backgroundImage: "url('/NoteTaking.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    // Add more CSS properties as needed
};

  const deleteNoteFromList = (noteText) => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      setNotes(prevNotes => {
        const updatedNotes = prevNotes.filter(note => note !== noteText);
        localStorage.setItem('notes', JSON.stringify(updatedNotes));
        return updatedNotes;
      });
    }
  };

  const handleSaveNote = () => {
    if (noteInput.trim()) {
      addNoteToList(noteInput.trim());
      setNoteInput('');
    }
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
          {notes.map((note, index) => (
            <ListGroup.Item key={index} className="note-item">
              {note}
              <Button
                variant="danger"
                className="delete-button"
                onClick={() => deleteNoteFromList(note)}
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

export default App;
