import Navbar from "./Navbar";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Home  from "./pages/Home";
import { Route, Routes} from "react-router-dom"


function App() {

    return(
        <>
        <Navbar />
        <div className="container">
        <Routes>
        <Route path='/' element={< Home />} />
        <Route path='/pricing' element={< Projects />} />
        <Route path='/about' element={< About />} />

            </Routes>
        </div>
        </>
    )
}
export default App