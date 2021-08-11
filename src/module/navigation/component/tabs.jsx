import React from "react";
import SVG from "./tab-svg";

export default function TabComponent() {
    return (
        <div className="ro-header-tabs-container">
            <div className="ro-tabs-container">
                <ChromeTab tabs={[1, 2, 3]} active={2} />
            </div>
            <div className="ro-tabs-container-bottom-bar" />
        </div>
    );
}

function ChromeTab({ tabs, active }) {

    return tabs.map((item) => (
        <div key={item} className="chrome-tab" {...(active === item ? { active: "true" } : {})}>
            <div className="chrome-tab-dividers" />
            <div className="chrome-tab-background">
                <SVG />
            </div>
            <div className="chrome-tab-content">
                <div className="chrome-tab-favicon chrome-google" />
                <div className="chrome-tab-title">Google</div>
                <div className="chrome-tab-drag-handle" />
                <div className="chrome-tab-close" />
            </div>
        </div>
    ));
}
