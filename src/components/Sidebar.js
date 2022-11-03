import React, { useState, useEffect } from "react";

export default function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <h1 className="sidebar-title">Notes</h1>   
                <div className="add-note">+</div>
            </div>
        </aside>
    )
}