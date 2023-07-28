import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import Error from "./Error";
import Login from "./Login";


export default function App(){
    
    return(
        <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />}/>
            <Route path="/*" element={<Error/>}/>
        </Routes>
        </BrowserRouter>
    )
}