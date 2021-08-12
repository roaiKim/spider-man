import React from "react";
import ChromeTab from "./ChromeTab";
import "./index.less";

export default function TabComponent() {
    return (
        <div className="ro-header-tabs-container">
            <div className="ro-scroll-tabs-container">
                <div className="ro-tabs-container">
                    <ChromeTab tabs={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]} active={2} />
                </div>
            </div>
            <div className="ro-tabs-container-bottom-bar" />
        </div>
    );
}
