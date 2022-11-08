import React from "react";

export default function Note(props) {
    const title = props.text.split(/\n/)[0] || "New Note";
    const textSnippet = props.text.split(/\n/)[1] || "No Additional Text";

    let formattedDate = "";
    if(timeElapsed(props.date) === "Just now") {
        formattedDate = timeElapsed(props.date);
    }
    else {
        formattedDate = timeElapsed(props.date) + " ago";
    }

    function timeElapsed(pastDate) {
        // time right now
        const now = new Date().getTime();
        // amount of seconds since "pastDate" till now
        const seconds = (now - pastDate) / 1000;

        // unites of time elapsed (years || months || weeks || ...)
        const years = (seconds / 31536000).toFixed(1);
        if(years > 0) return years;

        const months = Math.floor(seconds / 2628288);
        if(months > 0) return months;

        const weeks = Math.floor(seconds / 604800);
        if(weeks > 0) return weeks;

        const days = Math.floor(seconds / 86400);
        if(days > 0) return days;

        const hours = Math.floor(seconds / 3600);
        if(hours > 0) return hours;

        const minutes = Math.floor(seconds / 60);
        if(minutes > 0) return minutes

        return "Just Now"
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