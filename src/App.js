import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid"
import "./index.css"
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"

export default function App() {  
  const [darkMode, setDarkMode] = useState(
    // get current darkMode value from localStorage
    JSON.parse(localStorage.getItem("darkMode")) || false
  );
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  )
  const [currNoteID, setCurrNoteID] = useState("")
  let prevWindowWidth = window.innerWidth;

  window.onload = () => {
    // if in desktop mode on page load, select first note from "notes" or an empty string
    if(window.innerWidth > 550) {
      setCurrNoteID(notes[0] && notes[0].id || "");
    }
  }

  window.addEventListener("resize", () => {
    // if going from desktop to mobile 
    if(prevWindowWidth > 550 && window.innerWidth <= 550) {
      console.log("went from desktop to mobile");
    }
    else if(prevWindowWidth <= 550 && window.innerWidth > 550) {
      console.log("went from mobile to desktop");
    }

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
