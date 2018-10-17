const getMode = () => document.querySelector("meta[name='mode']").getAttribute("content");

export const getApiEndpoint = () => getMode() === "mocked" ? "http://localhost:8182/data" : "/data";