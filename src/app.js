import {React} from "react";
import { Routes,Route } from "react-router-dom"
import { Welcome } from "./Welcome";
import { Container } from "./Container";
import {Counter } from "./Counter"
import { ShowGithubUser } from "./ShowGithubUser";

export function App() {
  
  return (
    <div>
      <Container>
        <Routes>
          <Route path="/" element={<Welcome name="Peppino" age={75} />} />
          <Route path="counter" element={<Counter initialValue={0}/>} />
          <Route path="users/:username" element={<ShowGithubUser  />} />
        </Routes>
      </Container>
    </div>
  );
}
