import React, { useState, useEffect } from "react";
import { IoLogOut, IoTrashOutline } from "react-icons/io5"

export default function Editor(props) { 
    function toggleDarkMode() {
        props.setDarkMode(prevMode => !prevMode);
    }

    // update current note's text
    function updateNote() {
        const newText = document.querySelector(".editor-textarea").value;
        props.setCurrNote(prevState => {
            return {
                ...prevState,
                text: newText
            }
        })

        props.setNotes(prevState => {
            return prevState.forEach(note => {
                if(note.id === props.currNote.id) {
                    note.text = newText;
                }
            })
        })

        console.log(props.notes);
    }
    
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
                    value={props.currNote.text}
                /> 
            </div>
        </div>
    )
}