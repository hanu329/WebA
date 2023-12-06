import { useState } from "react"
import {QuePage} from './components/QuePage'
import { Route, Routes } from "react-router-dom"
import { Que } from "./components/Que"
import { EditQue } from "./components/EditQue"
import { Demo } from "./components/Demo"

const App=()=>{

  return (
    <>
 {/* <Demo /> */}
     <Routes>
     <Route path="/" element={<Que  />} />
      <Route path="/quepage" element={<QuePage />} />
      <Route path="/editque" element={<EditQue />} />
     </Routes>
    </>
  )
}

export default App

