import React from "react";
import SVG from "./tab-svg";

export default function tabs() {
    return (
        <div className="surface">
            <div className="chrome-tabs">
                <div className="chrome-tabs-content">
                    <div className="chrome-tab" active="trsue">
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
                </div>
                <div className="chrome-tabs-bottom-bar" />
            </div>
        </div>
    );
}
