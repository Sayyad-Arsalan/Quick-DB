import { Routes, Route } from "react-router-dom";
import Ldata from "./LRdata/Logindata";
import index from "./index";





function App() {
   
    return (
        <div>
       
            
            
            <Routes>
                <Route path="Logindata" element={<Ldata />} />
                <Route path="/" element={<index />} />
            </Routes>

        </div>
       

    );
}
export default App