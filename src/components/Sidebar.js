import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NotesList from "./NotesList";

export default function Sidebar(props) {
    return (
        <aside className="sidebar">
            {
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
