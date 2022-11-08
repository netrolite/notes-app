import React from "react"
import Note from "./Note"

export default function NotesList(props) {

    const notesElements = props.data.map(note => {
        return (
            <Note 
                currSelectedNoteID={props.currSelectedNoteID}
                setCurrSelectedNoteID={props.setCurrSelectedNoteID}
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