import React from "react";

export default function Note(props) {
    const title = props.text.split(/\n/)[0] || "New Note"
    const textSnippet = props.text.split(/\n/)[1] || "No Additional Text"

    return (
        <div
            className={
                "note" + (props.isSelected ? " selected" : "") 
                + (props.isAboveSelected ? " above-selected" : "")
            }
            onClick={ev => {props.selectNote(ev, props.id)}}
            key={props.id}
        >
            <div className="note-inside">
                <div className="note-title">
                    {title}
                </div>
                <div className="note-subtitle">
                    <div className="note-date">{props.date}</div>
                    <div className="note-snippet">
                        {textSnippet}
                    </div>
                </div>
            </div>
        </div>
    )
}