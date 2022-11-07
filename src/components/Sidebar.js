import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import dayjs from "dayjs";
import "../index.css"

export default function Sidebar() {
    const [notes, setNotes] = useState(
        JSON.parse(localStorage.getItem("notes")) || []
    )

    function createNote() {
        // getting all previously created notes OR an empty string
        const prevNotes = JSON.parse(localStorage.getItem("notes")) || "";

        let now = dayjs()
        const newNote = {
            id: nanoid(12),
            title: "New Note",
            textSnippet: "No additional text",
            text: "",
            date: `${now.date()}`
        };

        // adding to "notes" state && to localStorage
        setNotes(prevState => [...prevState, newNote])
        localStorage.setItem(
            "notes", JSON.stringify([
                ...prevNotes,
                newNote
            ])
        )
    }

    function selectNote(ev, id) {
        setNotes(prevState => {
            const prevSelected = document.querySelectorAll(".selected");
            if(prevSelected.length > 0) {
                document.querySelectorAll(".selected").classList.remove("selected");
                document.querySelectorAll(".above-selected").classList.remove("above-selected");
            }
            else {
                console.log(prevSelected.length);
            }
            const clickedElem = prevState.find(item => item.id === id);
            const clickedElemIndex = prevState.indexOf(clickedElem);
            return prevState;
        })
    }

    const notesElements = notes.map((item, index) => {
        return (
            <div
                className="note"
                onClick={ev => {selectNote(ev, item.id)}}
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