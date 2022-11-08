import React, { useState } from "react"
import Note from "./Note"

export default function NotesList(props) {
    const [currSelectedNoteID, setCurrSelectedNoteID] = useState(
        (props.notes[0] && props.notes[0].id) || ""
    )

    const notesElements = props.notes.map(note => {

        return (
            // add isSelected, isAboveSelected
            <Note 
                currSelectedNoteID={currSelectedNoteID}
                setCurrSelectedNoteID={setCurrSelectedNoteID}
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