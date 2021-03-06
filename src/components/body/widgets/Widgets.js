import React from 'react'
import "./Widgets.css";

function Widgets() {
    return (
        <div className="widgets">
            <iframe 
                width="340" 
                height="360" 
                src="https://www.youtube.com/embed/B-kxUMHBxNo" 
                title="YouTube video player" 
                style={{border: "none", overflow: "hidden"}}
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                scrolling="no"
                frameborder="0"
                allowTransparency="true"
                </iframe>
        </div>
    )
}

export default Widgets
