import { nanoid } from "nanoid";
import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { IoLogOut, IoTrashOutline } from "react-icons/io5"

export default function Editor(props) {
    // index of currently selected note
    const currNoteIndex = props.notes.indexOf(
        props.notes.find(item => item.id === props.currNoteID.current)
    )

    useEffect(() => {
        const editor = document.querySelector(".editor");
        const range = document.createRange();
        range.selectNodeContents(editor);
        range.collapse(false);

        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
    }, []);

    useEffect(() => {
        console.log("ran");
    }, [props.notes])

    let editorValue = ""
    if (props.notes.length > 0) {
        if (currNoteIndex > -1) {
            editorValue = props.notes[currNoteIndex].text;
        }
    }
    else {
        editorValue = "";
    }

    return (
        <div
            className="editor"

            contentEditable="true"
            suppressContentEditableWarning="true"
            onInput={props.updateNote}
        >
            {editorValue}
        </div>
    )
}