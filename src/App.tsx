import {Navbar} from "./components/Navbar.tsx";
import {Main} from "./components/Main.tsx";
import {About} from "@/components/About.tsx";
function App() {

  return (
    <>
        <header>
            <Navbar/>
        </header>
        <main className="">
            <Main/>
            <About/>
        </main>

    </>
  )
}

export default App
