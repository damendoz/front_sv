export const properties = {
    version: "1.1",
    release: "1.0.0",
    Apis:{
        Login:"http://localhost:8000/api/User/Login",
        Users: "http://localhost:8000/api/User",
        Employers:"http://localhost:8000/api/Employee",
    },
    endpoints: {
        SigIn: "/",
        Home: "/Home",
        Advance: "/Advance",
        Register: "/Register",
    }
};
localStorage.setItem("properties", JSON.stringify(properties));