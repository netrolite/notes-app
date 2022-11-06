import React, { useState, useEffect } from "react";

export default function Editor(props) {
    
    console.log(props);
    function toggleDarkMode() {
        props.setDarkMode(prevMode => !prevMode);
        // saving chosen mode into localStorage
        localStorage.setItem("darkMode", !props.isDark)

        // changing color-scheme
        // removing scrollbar
        document.documentElement.style.overflow = "hidden";
        // triggering reflow so that overflow style (line above) is applied
        let varToTriggerReflow = document.body.offsetHeight;
        // changing theme
        document.documentElement.setAttribute(
            "data-color-scheme",
            props.isDark ? "light" : "dark"
        )
    }

    window.addEventListener("resize", () => {
        console.log("resized");
    });

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