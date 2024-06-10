import Router from "./route/components/Router.jsx";
import Signup from "./components/Signup/Signup.jsx";
import {Route, Routes} from "react-router-dom";
import Login from "./components/Login/Login.jsx";


export default function App() {
    return (
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>} />
        </Routes>
    )
}