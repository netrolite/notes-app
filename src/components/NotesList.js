import React, { useState } from "react"
import Note from "./Note"

export default function NotesList(props) {
    const [currNoteID, setCurrNoteID] = useState(
        (props.notes[0] && props.notes[0].id) || ""
    )

    function selectNote(ev, id) {
        setCurrNoteID(id);
    }

    const notesElements = props.notes.map((note, index, array) => {
        let isAboveSelected = false;
        console.log(index);
        
        return (
            <Note 
                currSelectedNoteID={currNoteID}
                selectNote={selectNote}
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