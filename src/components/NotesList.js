import React from "react"
import Note from "./Note"

export default function NotesList({data, currSelectedNoteID, setCurrSelectedNoteID}) {
    console.log(data);

    const notesElements = data.map(note => {
        return (
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