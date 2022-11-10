import React, { useState, useEffect } from "react";
import { IoLogOut, IoTrashOutline } from "react-icons/io5"

export default function Editor(props) { 
    console.log(props);

    function toggleDarkMode() {
        props.setDarkMode(prevMode => !prevMode);
    }

    function updateNote() {
        props.setNotes(prevState => {
            prevState.forEach(item => {
                if(item.id === props.currSelectedNoteID) {
                    item.text = document.querySelector(".editor-textarea").value;
                }
            });
            return prevState;
        })
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
                /> 
            </div>
        </div>
    )
}