import Navbar from "./Navbar";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Home  from "./pages/Home";

function App() {
    let component
switch (window.location.pathname) {
    case"/":
    component = <Home />
    break 
    case "/pricing":
    Component = <Projects />
    break
    case "/about":
    component = <About />
    break
}    console.log(window.location)
    return(
        <>
        <Navbar />
        <div className="container">{component}</div>
        </>
    )
}
export default App