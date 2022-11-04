import React, { useState, useEffect } from "react";
import "../index.css"

export default function Sidebar() {
    // find a way to determine if a note is above the selected note
    
    function selectNote() {

    }
    
    return (
        <aside className="sidebar">
            <div className="sidebar-header">   
                <button type="button" className="add-note">Create a note</button>
            </div>
            <hr className="sidebar-header-divider"></hr>
            <div className="sidebar-notes-list">

                <div className="note">
                    <div className="note-inside">
                        <div className="note-title">
                            Title
                        </div>
                    </div>
                </div>

                <div className="note above-selected">
                    <div className="note-inside">
                        <div className="note-title">
                            Title
                        </div>
                    </div>
                </div>

                <div className="note selected">
                    <div className="note-inside">
                        <div className="note-title">
                            Title
                        </div>
                    </div>
                </div>

                <div className="note">
                    <div className="note-inside">
                        <div className="note-title">
                            Title
                        </div>
                    </div>
                </div>
                
            </div>
        </aside>
    )
}