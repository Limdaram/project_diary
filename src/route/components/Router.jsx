import {useRoutes} from "react-router-dom";
import Login from "../../components/Login/Login.jsx";

export default function Router() {
    return useRoutes([
        {
            path:"/",
            element:<Login/>,
        }
    ])
}