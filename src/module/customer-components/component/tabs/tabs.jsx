import React from "react";
import SVG from "./tab-svg";
import "./index.less";

export default function TabComponent() {
    return (
        <div className="ro-header-tabs-container">
            <div className="ro-tabs-container">
                <ChromeTab tabs={[1, 2]} active={2} />
            </div>
            <div className="ro-tabs-container-bottom-bar" />
        </div>
    );
}

function ChromeTab({ tabs, active }) {

    return tabs.map((item) => (
        <div key={item} className="ro-tab-item">
            <div className="ro-tab-item-dividers" />
            <div className="ro-tab-item-background" {...(active === item ? { active: "true" } : {})}>
                <SVG />
            </div>
            <div className="ro-tab-item-content">
                <div className="ro-tab-item-favicon chrome-google" />
                <div className="ro-tab-item-title">Google</div>
                <div className="ro-tab-item-drag-handle" />
                <div className="ro-tab-item-close" />
            </div>
        </div>
    ));
}
