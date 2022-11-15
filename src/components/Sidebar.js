import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NotesList from "./NotesList";

export default function Sidebar(props) {
    return (
        <aside className="sidebar">
            {
                // if props.notes === 0, display "No Notes" message
                (props.notes.length === 0) 
                ?
                <div className="no-notes">No Notes</div>
                :
                <div className="sidebar-notes-list">
                    <NotesList 
                        notes={props.notes}
                        currNoteID={props.currNoteID}
                        setCurrNoteID={props.setCurrNoteID}
                    />
                </div>
            }
        </aside>
    )
}
