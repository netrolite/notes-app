import React, { useEffect, useState } from "react";
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
  const [currNoteID, setCurrNoteID] = useState("")
  
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
        setCurrNoteID(notes[0] && notes[0].id || "");
      }
      else {
        // it didn't work the other way
        const prevID = currNoteID
        setCurrNoteID(prevID);
      }
    }

    // update prevWindowWidth
    prevWindowWidth = window.innerWidth;
  })

  return (
    <div className={"page-wrapper" + (darkMode ? " dark" : "")}>
      <nav>
        <Topbar 
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          notes={notes}
          setNotes={setNotes}
          currNoteID={currNoteID}
          setCurrNoteID={setCurrNoteID}
        />
      </nav>
      <main className="main">
        <Sidebar
          notes={notes}
          setNotes={setNotes}
          currNoteID={currNoteID}
          setCurrNoteID={setCurrNoteID}
        />
        <Editor 
          currNoteID={currNoteID}
          setCurrNoteID={setCurrNoteID}
          notes={notes}
          setNotes={setNotes}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      </main>
    </div>
  );
}
