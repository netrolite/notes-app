import React, { useState, useEffect } from "react";
import { IoLogOut, IoTrashOutline } from "react-icons/io5"

export default function Editor(props) { 
    function toggleDarkMode() {
        props.setDarkMode(prevMode => !prevMode);
        JSON.stringify(localStorage.setItem("darkMode", !props.darkMode));
    }

    // runs when user updates text inside "editor-textarea"
    function updateNote() {
        const unchangedNotes = props.notes.filter(item => item.id !== props.currNoteID);
        // updated currently selected note
        const updatedNote = props.notes[currNoteIndex];
        updatedNote.text = document.querySelector(".editor-textarea").value;
        // adding 1 second to make timer restart on 0, rather than 1
        updatedNote.date = new Date().getTime() + 1000;

        props.setNotes([updatedNote, ...unchangedNotes])

        // saving new thing to localStorage
        localStorage.setItem(
            "notes",
            JSON.stringify([updatedNote, ...unchangedNotes])
        )
    }

    // index of currently selected note
    const currNoteIndex = props.notes.indexOf(
        props.notes.find(item => item.id === props.currNoteID)
    )

    function deleteNote() {
        props.setNotes(notes => {
            // filters out the curretly selected note
            return notes.filter(note => note.id !== props.currNoteID)
        });

        // if next note in the array exists, use it as current
        if(props.notes[currNoteIndex + 1]) {
            props.setCurrNoteID(() => {
                return props.notes[currNoteIndex + 1].id
            });
        }
        // if previous note in the array exists, use it as current
        else if(props.notes[currNoteIndex - 1]) {
            props.setCurrNoteID(() => {
                return props.notes[currNoteIndex - 1].id
            });
        }
        // if the array is empty
        else {
            props.setCurrNoteID("");
        }
    }
    
    return (
        <div className="editor">
            <div className="top-bar" role="controls-bar">
                <IoTrashOutline 
                    className="topbar-icon" 
                    title="Delete note"
                    onClick={deleteNote}
                />
                <div 
                    className="dark-mode"
                    onClick={toggleDarkMode}
                    title="Toggle dark theme"
                >
                    <div className="dark-mode-label">Dark Mode</div>
                    <div className="dark-mode-switch">
                        <div className="dark-mode-switch-circle"></div>
                    </div>
                </div>
            </div>

            <div className="editor">
                <textarea 
                    className="editor-textarea"
                    onChange={updateNote}               
                    value={props.notes.length ? props.notes[currNoteIndex].text : ""}
                /> 
            </div>
        </div>
    )
}