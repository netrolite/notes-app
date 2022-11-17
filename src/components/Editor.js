import { nanoid } from "nanoid";
import React, { useState, useEffect, useRef } from "react";
import { IoLogOut, IoTrashOutline } from "react-icons/io5"

export default function Editor(props) { 
    // index of currently selected note
    const currNoteIndex = props.notes.indexOf(
        props.notes.find(item => item.id === props.currNoteID)
    )
    // for updating cursor position when typing in the editor (which is a contentEditable element)
    const selection = useRef(window.getSelection());

    // focus on editor on page load & move caret to the end of it
    useEffect(() => {
        const editor = document.querySelector(".editor");
        editor.focus();
    }, [props.currNoteID])

        

    // runs when user updates text inside "editor"
    function updateNote(e) {
        // if there are no notes
        if(props.notes.length === 0) {
            const newID = nanoid();

            // add new note to "notes" state
            props.setNotes(() => {
                return [{
                    text: e.target.textContent,
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

        // move cursor to previous position (by default when you type in contentEditable element, the cursor moves to the start of it because the input is controlled and it re-renders the component on every keystroke)

        // update selection
        selection.current = window.getSelection();
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
            suppressContentEditableWarning={true}
        >
            {editorValue}
        </div> 
    )
}