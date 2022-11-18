import { nanoid } from "nanoid";
import React, { useState, useEffect, useRef } from "react";
import { IoLogOut, IoTrashOutline } from "react-icons/io5"

export default function Editor(props) { 
    // index of currently selected note
    const currNoteIndex = props.notes.indexOf(
        props.notes.find(item => item.id === props.currNoteID)
    )
    const [selection, setSelection] = useState(window.getSelection());
    const newSelection = useRef(selection);
    console.log(newSelection.current);
    
    useEffect(() => {
        console.log(newSelection.current);
    }, [props.notes])
    

    // runs when user updates text inside "editor"
    function updateNote(e) {
        console.log(e.target.innerText);
        // if there are no notes
        if(props.notes.length === 0) {
            const newID = nanoid();

            // add new note to "notes" state
            props.setNotes(() => {
                return [{
                    text: e.target.innerText,
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
            updatedNote.text = e.target.innerText;
            // adding 1 second to make timer restart on 0, rather than 1
            updatedNote.date = new Date().getTime() + 1000;

            props.setNotes([updatedNote, ...unchangedNotes])

            // saving new thing to localStorage
            localStorage.setItem(
                "notes",
                JSON.stringify([updatedNote, ...unchangedNotes])
            )
        }

        setSelection(window.getSelection());
    }

    document.addEventListener("scroll", () => {
        document.documentElement.scrollTo(0, 0);
    })

    let editorValue = ""

    if(props.notes.length > 0) {
        if(currNoteIndex > -1) {
            editorValue = props.notes[currNoteIndex].text;
        }
    }
    else {
        editorValue = "";
    }

    return (
        <div 
            className="editor"
            onInput={e => updateNote(e)} 
            contentEditable="true"
        >
            {editorValue}
        </div> 
    )
}