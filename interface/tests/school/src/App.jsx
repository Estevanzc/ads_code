import { useState } from 'react'
import './App.css'
import SchoolHomePage from './components/SchoolHomePage'
import Classroom from './components/Classroom';
import StudentList from './components/StudentList';
import School from './components/School';

function App() {
  const turma = {
    nomeDaTurma: 'Turma A',
    estudantes: [
      { nome: 'João', nota: 8 },
      { nome: 'Maria', nota: 9 },
      { nome: 'Carlos', nota: 7 },
    ],
  };
  const div = {
    width: "100vw",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    flexFlow: "column",
    gap: "20px 0px"
  }
  return (
    <div style={div}>
      <SchoolHomePage />
      <Classroom turma={turma} />
      <StudentList />
      <School />
    </div>
  )
}

export default App
