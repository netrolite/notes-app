import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import dayjs from "dayjs";
import "../index.css"

export default function Sidebar() {
    const [notes, setNotes] = useState(
        JSON.parse(localStorage.getItem("notes")) || []
    )

    const [currSelected, setcurrSelected] = useState(
       (notes[0] && notes[0].id) || ""
    )


    function createNote() {
        // getting all previously created notes OR an empty string
        const prevNotes = JSON.parse(localStorage.getItem("notes")) || "";

        const newNote = {
            id: nanoid(12),
            title: "New Note",
            textSnippet: "No additional text",
            text: "",
            date: new Date().getSeconds(),
        };
        
    }

    function selectNote(ev, id) {
        // !!! compare current note id to id passed as an argument
        console.log("selected");
    }

    const notesElements = notes.map((item, index) => {
        return (
            <div
                className={
                    `note${item.isSelected ? " selected" : ""}`
                }
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

                {/* NotesList */}
                
            </div>
        </aside>
    )
}
