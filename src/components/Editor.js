import React, { useState, useEffect } from "react";
import { IoTrashOutline } from "react-icons/io5"

export default function Editor(props) {
    function toggleDarkMode() {
        props.setDarkMode(prevMode => !prevMode);
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
                    rows="10"
                /> 
            </div>
        </div>
    )
}