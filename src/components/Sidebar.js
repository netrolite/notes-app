import React, { useState, useEffect } from "react";
import "../index.css"

export default function Sidebar() {
    // find a way to determine if a note is above the selected note
    
    function selectNote() {

    }
    
    return (
        <aside className="sidebar">
            <div className="sidebar-header">   
                <button type="button" className="add-note">Create a note</button>
            </div>
            <hr className="sidebar-header-divider"></hr>
            <div className="sidebar-notes-list">

                <div className="note">
                    <div className="note-inside">
                        <div className="note-title">
                            Title
                        </div>
                        <div className="note-subtitle">
                            <div className="note-date">12/10/2022 </div>
                            <div className="note-snippet">lorem</div>
                        </div>
                    </div>
                </div>

                <div className="note above-selected">
                    <div className="note-inside">
                        <div className="note-title">
                            Title
                        </div>
                        <div className="note-subtitle">
                            <div className="note-date">12/10/2022 </div>
                            <div className="note-snippet">lorem</div>
                        </div>
                    </div>
                </div>

                <div className="note selected">
                    <div className="note-inside">
                        <div className="note-title">
                            Titlesdfasdfasdfsdfsdfa k k k k k 
                        </div>
                        <div className="note-subtitle">
                            <div className="note-date">12/10/2022</div>
                            <div className="note-snippet">loremsdfsdf dfdf kkkk</div>
                        </div>
                    </div>
                </div>

                <div className="note">
                    <div className="note-inside">
                        <div className="note-title">
                            Title
                        </div>
                        <div className="note-subtitle">
                            <div className="note-date">12/10/2022 </div>
                            <div className="note-snippet">lorem</div>
                        </div>
                    </div>
                </div>

                <div className="note">
                    <div className="note-inside">
                        <div className="note-title">
                            Title
                        </div>
                        <div className="note-subtitle">
                            <div className="note-date">12/10/2022 </div>
                            <div className="note-snippet">lorem</div>
                        </div>
                    </div>
                </div>

                <div className="note above-selected">
                    <div className="note-inside">
                        <div className="note-title">
                            Title
                        </div>
                        <div className="note-subtitle">
                            <div className="note-date">12/10/2022 </div>
                            <div className="note-snippet">lorem</div>
                        </div>
                    </div>
                </div>

                <div className="note selected">
                    <div className="note-inside">
                        <div className="note-title">
                            Titlesdfasdfasdfsdfsdfa k k k k k 
                        </div>
                        <div className="note-subtitle">
                            <div className="note-date">12/10/2022</div>
                            <div className="note-snippet">loremsdfsdf dfdf kkkk</div>
                        </div>
                    </div>
                </div>

                <div className="note">
                    <div className="note-inside">
                        <div className="note-title">
                            Title
                        </div>
                        <div className="note-subtitle">
                            <div className="note-date">12/10/2022 </div>
                            <div className="note-snippet">lorem</div>
                        </div>
                    </div>
                </div>

                <div className="note">
                    <div className="note-inside">
                        <div className="note-title">
                            Title
                        </div>
                        <div className="note-subtitle">
                            <div className="note-date">12/10/2022 </div>
                            <div className="note-snippet">lorem</div>
                        </div>
                    </div>
                </div>

                <div className="note above-selected">
                    <div className="note-inside">
                        <div className="note-title">
                            Title
                        </div>
                        <div className="note-subtitle">
                            <div className="note-date">12/10/2022 </div>
                            <div className="note-snippet">lorem</div>
                        </div>
                    </div>
                </div>

                <div className="note selected">
                    <div className="note-inside">
                        <div className="note-title">
                            Titlesdfasdfasdfsdfsdfa k k k k k 
                        </div>
                        <div className="note-subtitle">
                            <div className="note-date">12/10/2022</div>
                            <div className="note-snippet">loremsdfsdf dfdf kkkk</div>
                        </div>
                    </div>
                </div>

                <div className="note">
                    <div className="note-inside">
                        <div className="note-title">
                            Title
                        </div>
                        <div className="note-subtitle">
                            <div className="note-date">12/10/2022 </div>
                            <div className="note-snippet">lorem</div>
                        </div>
                    </div>
                </div>

                <div className="note">
                    <div className="note-inside">
                        <div className="note-title">
                            Title
                        </div>
                        <div className="note-subtitle">
                            <div className="note-date">12/10/2022 </div>
                            <div className="note-snippet">lorem</div>
                        </div>
                    </div>
                </div>

                <div className="note above-selected">
                    <div className="note-inside">
                        <div className="note-title">
                            Title
                        </div>
                        <div className="note-subtitle">
                            <div className="note-date">12/10/2022 </div>
                            <div className="note-snippet">lorem</div>
                        </div>
                    </div>
                </div>

                <div className="note selected">
                    <div className="note-inside">
                        <div className="note-title">
                            Titlesdfasdfasdfsdfsdfa k k k k k 
                        </div>
                        <div className="note-subtitle">
                            <div className="note-date">12/10/2022</div>
                            <div className="note-snippet">loremsdfsdf dfdf kkkk</div>
                        </div>
                    </div>
                </div>

                <div className="note">
                    <div className="note-inside">
                        <div className="note-title">
                            Title
                        </div>
                        <div className="note-subtitle">
                            <div className="note-date">12/10/2022 </div>
                            <div className="note-snippet">lorem</div>
                        </div>
                    </div>
                </div>
                
            </div>
        </aside>
    )
}