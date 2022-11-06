import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import "../index.css"

export default function Sidebar() {
    // find a way to determine if a note is above the selected note
    const [notes, setNotes] = useState(
        JSON.parse(localStorage.getItem("notes")) || []
    )
    console.log(notes, "notes");

    function createNote() {
        const prevNotes = JSON.parse(localStorage.getItem("notes")) || "";
        const newNote = {
            id: nanoid(12),
            title: "New Note",
            textSnippet: "No additional text",
            text: ""
        };
        setNotes(prevState => [...prevState, newNote])
        localStorage.setItem(
            "notes", JSON.stringify([
                ...prevNotes,
                newNote
            ])
        )
    }

    const notesElements = notes.map((item, index) => {
        return (
            <div
                className="note"
                key={index}
            >
                <div className="note-inside">
                    <div className="note-title">
                        Title
                    </div>
                    <div className="note-subtitle">
                        <div className="note-date">12/10/2022 </div>
                        <div className="note-snippet">lorem</div>
                    </div>
                </div>
            </div>
        ) 
    });
    console.log(notesElements, "notesElements");
    
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

                {
                    notesElements.length === 0 ?
                    "no notes" :
                    notesElements
                }
                
            </div>
        </aside>
    )
}