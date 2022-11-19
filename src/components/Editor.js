import { nanoid } from "nanoid";
import React, { useEffect } from "react";

export default function Editor(props) { 
    // index of currently selected note
    const currNoteIndex = props.notes.indexOf(
        props.notes.find(item => item.id === props.currNoteID)
    )

    // automatically focus on editor on page load and when currNoteID changes
    useEffect(() => {
        document.querySelector(".editor").focus();
    }, [props.currNoteID])

    // runs when user updates text inside "editor"
    function updateNote() {
        // if there are no notes
        if(props.notes.length === 0) {
            const newID = nanoid();

            // add new note to "notes" state
            props.setNotes(() => {
                return [{
                    text: document.querySelector(".editor").value,
                    id: newID,
                    date: new Date().getTime()
                }]
            })

            // set "currNoteID" to ID of the newly created note
            props.setCurrNoteID(newID);
        }
        // if notes.length > 0
        else {
            const unchangedNotes = props.notes.filter(item => item.id !== props.currNoteID);
            // updated currently selected note
            const updatedNote = props.notes[currNoteIndex];
            updatedNote.text = document.querySelector(".editor").value;
            // adding 1 second to make timer restart on 0, rather than 1
            updatedNote.date = new Date().getTime() + 1000;

            props.setNotes([updatedNote, ...unchangedNotes])

            // saving new thing to localStorage
            localStorage.setItem(
                "notes",
                JSON.stringify([updatedNote, ...unchangedNotes])
            )
        }
    }

    let textareaValue = ""

    if(props.notes.length > 0) {
        if(currNoteIndex > -1) {
            textareaValue = props.notes[currNoteIndex].text;
        }
    }
    else {
        textareaValue = "";
    }

    return (
        <textarea 
            className="editor"
            onChange={updateNote}               
            value={textareaValue}
        /> 
    )
}