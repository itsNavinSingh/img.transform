import type { RouteObject } from "react-router-dom";
import Page from "../mainpage";
import Home from "../components/Home";
import About from "../components/About";

export const MainRoutePath: RouteObject[] = [
    {
        path: "/",
        element: <Page/>,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "about",
                element: <About />
            }
        ]
    }
];