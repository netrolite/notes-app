import React, { useState, useEffect } from "react";

export default function Editor(props) {
    function toggleDarkMode() {
        props.setDarkMode(prevMode => !prevMode);
    }
    
    return (
        <div className="editor">
            <div className="top-bar" role="controls-bar">
                <div 
                    className="dark-mode"
                    onClick={toggleDarkMode}
                >
                    <div className="dark-mode-switch">
                        <div className="dark-mode-switch-circle"></div>
                    </div>
                    <div className="dark-mode-label">Dark Mode</div>
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