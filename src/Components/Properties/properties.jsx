export const properties = {
    version: "1.1",
    release: "1.0.0",
    endpoints: {
        SigIn: "/",
        Home: "/Home",
        Advance: "/Advance",
        Register: "/Register",
    }
};
localStorage.setItem("properties", JSON.stringify(properties));