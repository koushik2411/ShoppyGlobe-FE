import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
])