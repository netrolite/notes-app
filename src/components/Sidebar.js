import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Note from "./Note";

export default function Sidebar(props) {
    // sets currNoteID to id of note that the user clicked on
    function selectNote(ev, id) {
        props.setCurrNoteID(id)
    }

    // elements to be displayed on the page
    const notesElements = props.notes.map((note, index, array) => {
        let isAboveSelected = false;
        // if the next note exists, and if that note's id matches currNoteID.id,
        // then isAboveSelected = true
        if(array[index + 1] && array[index + 1].id === props.currNoteID) {
            isAboveSelected = true;
        }
        return (
            <Note
                text={note.text}
                date={note.date}
                currNoteID={props.currNoteID}
                selectNote={selectNote}
                isAboveSelected={isAboveSelected}
                id={note.id}
                key={note.id}
            />
        )
    })

    return (
        <aside className="sidebar">
            {
                <div className="sidebar-notes-list">
                    <NotesList 
                        notes={props.notes}
                        currNoteID={props.currNoteID}
                    />
                </div>
            }
        </aside>
    )
}
