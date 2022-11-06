import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import "../index.css"

export default function Sidebar() {
    // find a way to determine if a note is above the selected note
    const [notes, setNotes] = useState(
        JSON.parse(localStorage.getItem("notes")) || []
    )

    /*
    cosnt time = {
        weekDay = "Monday"
        ...
    }
    */
    function timeElapsed(date) {
        const seconds = (new Date().getTime() / 1000) - (date / 1000);
        // check all available date formats
        console.log(date.getFullYear())
    }

    const weekDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let pastDate = new Date();
    console.log(pastDate.getDate());

    

    function createNote() {
        const prevNotes = JSON.parse(localStorage.getItem("notes")) || "";
        let currentDate = new Date();
        currentDate = currentDate.getTime() / 1000;
        console.log(currentDate);
        const newNote = {
            id: nanoid(12),
            title: "New Note",
            textSnippet: "No additional text",
            text: "",
            date: currentDate
        };
        setNotes(prevState => [...prevState, newNote])
        localStorage.setItem(
            "notes", JSON.stringify([
                ...prevNotes,
                newNote
            ])
        )
    }

    function selectNote() {
        console.log("selected");
    }

    const notesElements = notes.map((item, index) => {
        return (
            <div
                className="note"
                onClick={selectNote}
                key={index}
            >
                <div className="note-inside">
                    <div className="note-title">
                        {item.title}
                    </div>
                    <div className="note-subtitle">
                        <div className="note-date">{item.date}</div>
                        <div className="note-snippet">
                            {item.textSnippet ? item.textSnippet : "No Additional Text"}
                        </div>
                    </div>
                </div>
            </div>
        ) 
    });
    
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
                    notesElements.length > 0 ?
                    notesElements :
                    <div className="no-notes">
                        No Notes
                    </div>
                }
                
            </div>
        </aside>
    )
}