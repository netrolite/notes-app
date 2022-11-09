import React, { useState } from "react"
import Note from "./Note"

export default function NotesList(props) {
    function selectNote(ev, id) {
        props.setCurrSelectedNoteID(id);
    }

    const notesElements = props.notes.map((note, index, array) => {
        let isAboveSelected = false;
        if(array[index + 1] && array[index + 1].id === props.currSelectedNoteID) {
            isAboveSelected = true;
        }
        
        return (
            <Note 
                currSelectedNoteID={props.currSelectedNoteID}
                selectNote={selectNote}
                isAboveSelected={isAboveSelected}
                text={note.text}
                id={note.id}
                key={note.id}
                date={note.date}
            />
        )
    })
    
    return (
        <div className="sidebar-notes-list">
            {notesElements}
        </div>
    )
}