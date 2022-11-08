import React from "react";

export default function Note(props) {
    const title = props.text.split(/\n/)[0] || "New Note";
    const textSnippet = props.text.split(/\n/)[1] || "No Additional Text";
    const formattedDate = timeElapsed(props.date);

    function timeElapsed(pastDate) {
        const now = new Date().getTime();
        const seconds = (now - pastDate) / 1000;
        console.log(seconds);
        return seconds;
    }

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
                    <div className="note-date">{formattedDate}</div>
                    <div className="note-snippet">
                        {textSnippet}
                    </div>
                </div>
            </div>
        </div>
    )
}