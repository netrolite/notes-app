import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NotesList from "./NotesList";

export default function Sidebar() {
    const [notes, setNotes] = useState(
        JSON.parse(localStorage.getItem("notes")) || []
    )
    const [currSelected, setCurrSelected] = useState(
       (notes[0] && notes[0].id) || ""
    )

    function createNote() {
        const newNote = {
            text: "",
            date: new Date(),
            id: nanoid()
        }

        // adding "newNote" to "notes" state
        setNotes(prevState => [...prevState, newNote]);
        // adding "newNote" to localStorage
        const oldNotesLocalStorage = JSON.parse(localStorage.getItem("notes")) || [];
        localStorage.setItem(
            "notes",
            JSON.stringify([...oldNotesLocalStorage, newNote])
        );
    }
    
    return (
        <aside className="sidebar">
            <div className="sidebar-header">   
                <button 
                    type="button" 
                    className="add-note"
                    onClick={createNote}
                >
                    Create a note
                </button>
            </div>
            <div className="sidebar-notes-list">

                <NotesList 
                    data={notes}
                />
                
            </div>
        </aside>
    )
}
