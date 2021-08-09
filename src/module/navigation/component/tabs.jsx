import React from "react";

export default function tabs() {
    return (
        <div className="surface">
            <div className="chrome-tabs">
                <div className="chrome-tabs-content">
                    <div className="chrome-tab" active="trsue">
                        <div className="chrome-tab-dividers" />
                        <div className="chrome-tab-background">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <symbol id="chrome-tab-geometry-left" viewBox="0 0 214 36"><path d="M17 0h197v36H0v-2c4.5 0 9-3.5 9-8V8c0-4.5 3.5-8 8-8z" /></symbol>
                                    <symbol id="chrome-tab-geometry-right" viewBox="0 0 214 36"><use xlinkHref="#chrome-tab-geometry-left" /></symbol>
                                    <clipPath id="crop"><rect className="mask" width="100%" height="100%" x="0" /></clipPath>
                                </defs>
                                <svg width="52%" height="100%"><use xlinkHref="#chrome-tab-geometry-left" width="214" height="36" className="chrome-tab-geometry" /></svg>
                                <g transform="scale(-1, 1)"><svg width="52%" height="100%" x="-100%" y="0"><use xlinkHref="#chrome-tab-geometry-right" width="214" height="36" className="chrome-tab-geometry" /></svg></g>
                            </svg>
                        </div>
                        <div className="chrome-tab-content">
                            <div className="chrome-tab-favicon chrome-google" />
                            <div className="chrome-tab-title">Google</div>
                            <div className="chrome-tab-drag-handle" />
                            <div className="chrome-tab-close" />
                        </div>
                    </div>
                    <div className="chrome-tab">
                        <div className="chrome-tab-dividers" />
                        <div className="chrome-tab-background">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <symbol id="chrome-tab-geometry-left" viewBox="0 0 214 36"><path d="M17 0h197v36H0v-2c4.5 0 9-3.5 9-8V8c0-4.5 3.5-8 8-8z" /></symbol>
                                    <symbol id="chrome-tab-geometry-right" viewBox="0 0 214 36"><use xlinkHref="#chrome-tab-geometry-left" /></symbol>
                                    <clipPath id="crop"><rect className="mask" width="100%" height="100%" x="0" /></clipPath>
                                </defs>
                                <svg width="52%" height="100%"><use xlinkHref="#chrome-tab-geometry-left" width="214" height="36" className="chrome-tab-geometry" /></svg>
                                <g transform="scale(-1, 1)"><svg width="52%" height="100%" x="-100%" y="0"><use xlinkHref="#chrome-tab-geometry-right" width="214" height="36" className="chrome-tab-geometry" /></svg></g>
                            </svg>
                        </div>
                        <div className="chrome-tab-content">
                            <div className="chrome-tab-favicon chrome-facebook" />
                            <div className="chrome-tab-title">Facebook</div>
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
