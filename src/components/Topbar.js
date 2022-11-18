import React from "react";
import NotesList from "./NotesList";
import { nanoid } from "nanoid";
import { IoTrashOutline } from "react-icons/io5"
import { MdArrowBackIos } from "react-icons/md"

export default function Topbar(props) {
    function toggleDarkMode() {
        props.setDarkMode(prevMode => !prevMode);
        JSON.stringify(localStorage.setItem("darkMode", !props.darkMode));
    };

    function createNote() {
        const newID = nanoid();
        // if on desktop, select the newly create note
        if(window.innerWidth > 550) {
            props.setCurrNoteID(newID)
        }
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

    function deleteNoteMobile() {
        props.setNotes(notes => {
            // filters out the curretly selected note
            notes = notes.filter(note => note.id !== props.currNoteID);
            // saving filtered notes to localStorage
            localStorage.setItem("notes", JSON.stringify(notes));
            return notes;
        });

        props.setCurrNoteID("");
    }

    function resetCurrNoteID() {
        // removing the class first makes it so the user can still see the contents of the note when going back to the list of all notes
        document.querySelector(".menu-slider").classList.remove("out-of-view");
        document.querySelector(".selected").classList.remove("selected");
        
        if(document.querySelector(".above-selected")) {
            document.querySelector(".above-selected").classList.remove("above-selected");
        };

        setTimeout(() => {
            props.setCurrNoteID("");
        }, 400);
    }

    return (
        <div className="topbar">
            <div className="desktop-menu">
                <div id="topbar-create-note-section">   
                    <button 
                        type="button" 
                        className="topbar-create-note-button"
                        onClick={createNote}
                    >
                        Create a note
                    </button>
                </div>
                
                <div id="topbar-buttons-section">
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
            </div>

            {/* mobile menu (hidden if window width > 550px) */}
            <div className="mobile-topbar">
                <div 
                    className="go-back-icon"
                    onClick={resetCurrNoteID}
                >
                    <MdArrowBackIos /> 
                    Notes
                </div>
                
                
                <IoTrashOutline 
                    className="topbar-icon" 
                    title="Delete note"
                    onClick={deleteNoteMobile}
                />

                <div 
                    className={
                    // if there's a selected note, hide the slider
                    "menu-slider" + (props.currNoteID ? " out-of-view" : "")
                    }
                >
                        <button 
                            type="button" 
                            className="topbar-create-note-button"
                            id="slider-create-note-button"
                            onClick={createNote}
                        >
                            Create a note
                        </button>

                        <div className="slider-notes-list">
                            <NotesList
                                notes={props.notes}
                                currNoteID={props.currNoteID}
                                setCurrNoteID={props.setCurrNoteID}
                            />
                        </div>
                </div>
            </div>
        </div>
    )
}