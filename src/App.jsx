import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./components/Home/Home"
import Container from "./components/Reusables/Container"
import Menu from "./components/Menu/Menu"

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route element={<Menu />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Container>
  )
}

export default App
