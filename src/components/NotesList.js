import React, { useState } from "react"
import Note from "./Note"

export default function NotesList(props) {
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
                currNoteID={props.currNoteID}
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
        <>
            {
                (notesElements.length > 0) 
                ?
                notesElements
                :
                <div className="no-notes">No Notes</div>
                
            }
        </>
    )
}