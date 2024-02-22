import {Navbar} from "./components/Navbar.tsx";
import {Main} from "./components/Main.tsx";
import {About} from "@/components/About.tsx";
import {Projects} from "@/components/Projects.tsx";
function App() {

  return (
    <>
        <header>
            <Navbar/>
        </header>
        <main className="">
            <Main/>
            <About/>
            <Projects/>
        </main>

    </>
  )
}

export default App
