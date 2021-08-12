import React from "react";
import SVG from "./tab-svg";

export default function ChromeTab({ tabs, active }) {

    return tabs.map((item) => (
        <div key={item} className="ro-tab-item" {...(active === item ? { active: "true" } : {})}>
            <div className="ro-tab-item-dividers" />
            <div className="ro-tab-item-background">
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
