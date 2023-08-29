export const properties = {
    version: "1.1",
    release: "1.0.0",
    endpoints: {
        Home: "/Home",
        Advance: "/Advance",
    }
};
localStorage.setItem("properties", JSON.stringify(properties));