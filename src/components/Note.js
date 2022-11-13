import React, { useEffect, useMemo, useState ,useRef } from "react";

export default function Note(props) {
    // first line of "props.text"
    const title = props.text.split(/\n/)[0] || "New Note";
    // second line of "props.text"
    const textSnippet = props.text.split(/\n/)[1] || "No Additional Text";

    const [formattedDate, setFormattedDate] = useState(
        timeElapsed(props.date) + " ago"
    );
    const isMounted = useRef(false);
    const timesUpdated = useRef(0);

    // update formattedDate every minute
    // when note is updated, "setInterval" get stacked up and shit happens

    let initialInterval = setInterval(() => {
        setFormattedDate(
            timeElapsed(props.date) + " ago"
        )
    }, 1000);

    useEffect(() => {
        console.log(initialInterval);
        console.log(isMounted.current);
        if(isMounted.current) {
            clearInterval(initialInterval);
            const interval = setInterval(() => {
                setFormattedDate(
                    timeElapsed(props.date) + " ago"
                )
            }, 1000);
        }
        else {
            isMounted.current = true;
        }
    }, [props.text]);


    function timeElapsed(pastDate) {
        // time right now
        const now = new Date().getTime();
        // amount of seconds since "pastDate" till now
        const seconds = (now - pastDate) / 1000;
        
        // units of time elapsed (years || months || weeks || ...)
        // if unit of time > 1, then add "s" to the end to make it plural
        const years = Math.floor(seconds / 31536000);
        if(years > 0) return years + " year" + (years > 1 ? "s" : "");

        const months = Math.floor(seconds / 2628288);
        if(months > 0) return months + " month" + (months > 1 ? "s" : "");

        const weeks = Math.floor(seconds / 604800);
        if(weeks > 0) return weeks + " week" + (weeks > 1 ? "s" : "");

        const days = Math.floor(seconds / 86400);
        if(days > 0) return days + " day" + (days > 1 ? "s" : "");

        const hours = Math.floor(seconds / 3600);
        if(hours > 0) return hours + " hour" + (hours > 1 ? "s" : "");

        const minutes = Math.floor(seconds / 60);
        if(minutes > 0) return minutes + " minute" + (minutes > 1 ? "s" : "");

        const secondsFloored = Math.floor(seconds)
        if(secondsFloored > 1 || secondsFloored === 0) {
            return secondsFloored + " seconds"
        }
        else return secondsFloored + " second"
    }

    return (
        <div className={
                "note" + (props.id === props.currNoteID ? " selected" : "") 
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