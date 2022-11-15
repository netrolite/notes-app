import { nanoid } from "nanoid";
import React, { useState, useEffect } from "react";
import { IoLogOut, IoTrashOutline } from "react-icons/io5"

export default function Editor(props) { 
    // index of currently selected note
    const currNoteIndex = props.notes.indexOf(
        props.notes.find(item => item.id === props.currNoteID)
    )

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

    function deleteNote() {
        props.setNotes(notes => {
            // filters out the curretly selected note
            notes = notes.filter(note => note.id !== props.currNoteID);
            // saving filtered notes to localStorage
            localStorage.setItem("notes", JSON.stringify(notes));
            return notes;
        });

        // if next note in the array exists, use it as current
        if(props.notes[currNoteIndex + 1]) {
            props.setCurrNoteID(() => {
                return props.notes[currNoteIndex + 1].id
            });
        }
        // if previous note in the array exists, use it as current
        else if(props.notes[currNoteIndex - 1]) {
            props.setCurrNoteID(() => {
                return props.notes[currNoteIndex - 1].id
            });
        }
        // if the array is empty
        else {
            props.setCurrNoteID("");
        }
    }

    return (
            <textarea 
                className="editor"
                onChange={updateNote}               
                value={props.notes.length ? props.notes[currNoteIndex].text : ""}
            /> 
    )
}