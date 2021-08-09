import React from "react";
import SVG from "./tab-svg";

export default function TabComponent() {
    return (
        <div className="surface">
            <div className="chrome-tabs">
                <div className="chrome-tabs-content">
                    <ChromeTab tabs={[1, 2, 3]} active={2} />
                </div>
                <div className="chrome-tabs-bottom-bar" />
            </div>
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
