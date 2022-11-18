import React, { useEffect, useRef, useState } from "react";
import { nanoid } from "nanoid"
import "./index.css"
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"

export default function App() {  
  window.scrollTo(0, 0);

  const [darkMode, setDarkMode] = useState(
    // get current darkMode value from localStorage
    JSON.parse(localStorage.getItem("darkMode")) || false
  );
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  )
  const currNoteID = useRef("")
  console.log(currNoteID.current);
  
  useEffect(() => {
    // if in desktop mode on page load, select first note from "notes" or an empty string
    if(window.innerWidth > 550) {
      setCurrNoteID(notes[0] && notes[0].id || "");
    }
  }, [])
  
  let prevWindowWidth = window.innerWidth;
  window.addEventListener("resize", () => {
    // if going from mobile to desktop
    if(prevWindowWidth <= 550 && window.innerWidth > 550) {
      if(currNoteID.length === 0) {
        currNoteID.current = (notes[0] && notes[0].id || "");
      }
      else {
        // it didn't work the other way
        const prevID = currNoteID
        currNoteID.current = (prevID);
      }
    }

    // update prevWindowWidth
    prevWindowWidth = window.innerWidth;
  })

  function updateNote(e) {
    const currNoteIndex = notes.indexOf(
      notes.find(item => item.id === currNoteID.current)
    )
    console.log(notes);
    console.log(currNoteID);

    // if there are no notes, create a new one
    if (notes.length === 0) {
        const newID = nanoid();

        // add new note to "notes" state
        setNotes(() => {
            return [{
                text: e.target.textContent,
                id: newID,
                date: new Date().getTime()
            }]
        })

        // set "currNoteID" to ID of the newly created note
        currNoteID.current = newID;
    }
    // if notes.length > 0
    else {
        const unchangedNotes = notes.filter(item => item.id !== currNoteID);
        // updated currently selected note
        const updatedNote = notes[currNoteIndex];
        updatedNote.text = e.target.innerText;
        // adding 1 second to make timer restart on 0, rather than 1
        updatedNote.date = new Date().getTime() + 1000;

        setNotes([updatedNote, ...unchangedNotes])

        // saving new thing to localStorage
        localStorage.setItem(
            "notes",
            JSON.stringify([updatedNote, ...unchangedNotes])
        )
    } 
  }

  console.log(notes);

  return (
    <div className={"page-wrapper" + (darkMode ? " dark" : "")}>
      <nav>
        <Topbar 
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          notes={notes}
          setNotes={setNotes}
          currNoteID={currNoteID}
        />
      </nav>
      <main className="main">
        <Sidebar
          notes={notes}
          setNotes={setNotes}
          currNoteID={currNoteID}
        />
        <Editor 
          currNoteID={currNoteID}
          notes={notes}
          setNotes={setNotes}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          updateNote={updateNote}
        />
      </main>
    </div>
  );
}
