const http = {
    dev: "http://119.29.53.45",
    test: "",
    uat: "",
    pro: "",
};

export function completePath(path: string, type = "dev") {
    /* if (process.env.NODE_ENV !== "production") {
        return path;
    } */
    if (path && (path.startsWith("http://") || path.startsWith("https://"))) {
        return path;
    }
    return (http[type] || "") + path;
}
