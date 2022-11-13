import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NotesList from "./NotesList";

export default function Sidebar(props) {
    function createNote() {
        const newID = nanoid();
        props.setCurrNoteID(newID)
        const newNote = {
            text: ``,
            date: new Date().getTime(),
            id: newID
        }

        // adding "newNote" to "notes" state
        props.setNotes(prevState => [newNote, ...prevState]);
        // adding "newNote" to localStorage
        // "oldNotesLocalStorage" is either parsed "notes" array from localStorage or an empty array
        const oldLocalStorage = JSON.parse(localStorage.getItem("notes")) || [];
        localStorage.setItem(
            "notes",
            JSON.stringify([newNote, ...oldLocalStorage])
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
            <NotesList 
                notes={props.notes}
                currNoteID={props.currNoteID}
                setCurrNoteID={props.setCurrNoteID}
            />
        </aside>
    )
}
