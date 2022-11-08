import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import dayjs from "dayjs";
import "../index.css"

export default function Sidebar() {
    const [notes, setNotes] = useState(
        JSON.parse(localStorage.getItem("notes")) || []
    )

    const [currSelected, setcurrSelected] = useState(
       (notes[0] && notes[0].id) || ""
    )

        
    
    return (
        <aside className="sidebar">
            <div className="sidebar-header">   
                <button 
                    type="button" 
                    className="add-note"
                    onClick={createNote}
                >
                    Create a note
                </button>
            </div>
            <div className="sidebar-notes-list">

                {/* NotesList */}
                
            </div>
        </aside>
    )
}
