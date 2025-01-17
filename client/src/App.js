import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaskForm from "./components/TaskForm";
import  TaskList from "./components/TaskList";
import Menu from "./components/Navbar";
import  { Container } from "@mui/material";


export default function App() {
  return (
    <div>
      <BrowserRouter>
          <Menu />
          <Container>
            <Routes>

              <Route path='/' element={<TaskList />}  />
              <Route path='/tasks/new' element={<TaskForm />} />
              <Route path= '/tasks/:id_tarea/edit' element={<TaskForm />} />
            </Routes>
          </Container>
      </BrowserRouter>
    </div>
  )
}
