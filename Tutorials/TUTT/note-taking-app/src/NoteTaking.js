import React, { useState, useEffect } from 'react';

const NoteTaking = () => {
  const [notes, setNotes] = useState([]);
  const [noteInput, setNoteInput] = useState('');

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(savedNotes);
  }, []);

  const addNote = () => {
    if (noteInput.trim() !== '') {
      const newNotes = [...notes, noteInput];
      setNotes(newNotes);
      localStorage.setItem('notes', JSON.stringify(newNotes));
      setNoteInput('');
    }
  };

  const deleteNote = (noteToDelete) => {
    const updatedNotes = notes.filter(note => note !== noteToDelete);
    setNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  return (
    <div className="container">
      <h1 className="heading">Note Taking App</h1>
      <textarea
        className="note-input"
        value={noteInput}
        onChange={(e) => setNoteInput(e.target.value)}
      />
      <button className="button" onClick={addNote}>Save Note</button>
      <ul className="note-list">
        {notes.map((note, index) => (
          <li key={index}>
            {note}
            <button className="delete-button" onClick={() => deleteNote(note)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoteTaking;
