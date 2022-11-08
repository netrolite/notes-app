import React, { useState } from "react";

export default function Note(props) {
    const title = props.text.split(/\n/)[0] || "New Note";
    const textSnippet = props.text.split(/\n/)[1] || "No Additional Text";

    const [formattedDate, setFormattedDate] = useState(
        timeElapsed(props.date) + " ago"
    )

    // update formattedDate every minute
    setInterval(() => {
        setFormattedDate(timeElapsed(props.date) + " ago")
    }, 60000)

    function timeElapsed(pastDate) {
        // time right now
        const now = new Date().getTime();
        // amount of seconds since "pastDate" till now
        const seconds = (now - pastDate) / 1000;

        // units of time elapsed (years || months || weeks || ...)
        const years = (seconds / 31536000).toFixed(1);
        if(years > 0) return years + " years";

        const months = Math.floor(seconds / 2628288);
        if(months > 0) return months + " months";

        const weeks = Math.floor(seconds / 604800);
        if(weeks > 0) return weeks + " weeks";

        const days = Math.floor(seconds / 86400);
        if(days > 0) return days + " days";

        const hours = Math.floor(seconds / 3600);
        if(hours > 0) return hours + " hours";

        const minutes = Math.floor(seconds / 60);
        if(minutes > 0) return minutes + " minutes";

        return "Less than a minute"
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