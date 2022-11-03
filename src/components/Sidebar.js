import React, { useState, useEffect } from "react";

export default function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="sidebar-header">   
                <button className="add-note">Add new note</button>
            </div>
            <div className="sidebar-notes-list">
                <div className="note"></div>
                <div className="note"></div>
                <div className="note"></div>
                <div className="note"></div>
                <div className="note"></div>
                <div className="note"></div>
                <div className="note"></div>
            </div>
        </aside>
    )
}