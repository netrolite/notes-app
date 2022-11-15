import React from "react";
import { nanoid } from "nanoid";
import { IoTrashOutline } from "react-icons/io5"
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs"

export default function Topbar(props) {
    function toggleDarkMode() {
        props.setDarkMode(prevMode => !prevMode);
        JSON.stringify(localStorage.setItem("darkMode", !props.darkMode));
    };

    function createNote() {
        const newID = nanoid();
        props.setCurrNoteID(newID)
        const newNote = {
            text: ``,
            date: new Date().getTime(),
            id: newID
        }

        // adding "newNote" to "notes" state (at the start)
        props.setNotes(prevState => [newNote, ...prevState]);
        // adding "newNote" to localStorage
        // "oldLocalStorage" is either parsed "notes" array from localStorage or an empty array
        const oldLocalStorage = JSON.parse(localStorage.getItem("notes")) || [];
        localStorage.setItem(
            "notes",
            JSON.stringify([newNote, ...oldLocalStorage])
        );
    }

    function deleteNote() {
        const currNoteIndex = props.notes.indexOf(
            props.notes.find(item => item.id === props.currNoteID)
        );

        props.setNotes(notes => {
            // filters out the curretly selected note
            notes = notes.filter(note => note.id !== props.currNoteID);
            // saving filtered notes to localStorage
            localStorage.setItem("notes", JSON.stringify(notes));
            return notes;
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
        <div className="topbar" role="controls-bar">
            <div className="desktop">
                <div className="topbar-left-side">
                    <button 
                        type="button" 
                        className="topbar-create-note-button"
                        onClick={createNote}
                    >
                        Create a note
                    </button>
                </div>
                
                <div className="topbar-right-side">
                    <IoTrashOutline 
                        className="topbar-icon trash-icon" 
                        title="Delete note"
                        onClick={deleteNote}
                    />
                    <div 
                        className="dark-mode"
                        onClick={toggleDarkMode}
                        title="Toggle dark theme"
                    >
                        <div className="dark-mode-switch">
                            <div className="dark-mode-switch-circle"></div>
                        </div>
                        <div className="dark-mode-label">Dark Mode</div>
                    </div>
                </div>
            </div>

            <div className="mobile">

            </div>
        </div>
    )
}