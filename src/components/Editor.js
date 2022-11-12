import React, { useState, useEffect } from "react";
import { IoLogOut, IoTrashOutline } from "react-icons/io5"

export default function Editor(props) { 
    function toggleDarkMode() {
        props.setDarkMode(prevMode => !prevMode);
        JSON.stringify(localStorage.setItem("darkMode", !props.darkMode));
    }

    function updateNote() {

    }

    // Index of currently selected note
    const currNoteIndex = props.notes.indexOf(
        props.notes.find(item => item.id === props.currNoteID)
    )
    
    return (
        <div className="editor">
            <div className="top-bar" role="controls-bar">
                <IoTrashOutline 
                    className="topbar-icon" 
                    title="Delete note"
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
                    value={props.notes[currNoteIndex].text}
                /> 
            </div>
        </div>
    )
}