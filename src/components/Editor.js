import React, { useState, useEffect } from "react";

export default function Editor() {
    return (
        <div className="editor">
            <div className="top-bar">
                <div className="dark-mode">
                    <div className="dark-mode-switch">
                        <div className="dark-mode-switch-circle"></div>
                    </div>
                    <div className="dark-mode-label">Dark Mode</div>
                </div>
            </div>
        </div>
    )
}