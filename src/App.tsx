import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Home from "./container/home"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AboutUs from './container/aboutUs'

function App() {
  // const [count, setCount] = useState(0)

  let homeData = [
    {
      name: "Amit",
      age: "19",
      gender: "Male",
      slug: "my-car1"
    },
    {
      name: "Amit",
      age: "25",
      gender: "Male",
      slug: "my-car2"
    },
    {
      name: "Amit",
      age: "27",
      gender: "Male",
      slug: "my-car1"
    },
    {
      name: "Amit",
      age: "39",
      gender: "Male",
      slug: "my-car2"
    }
  ]
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home homeData={homeData} />} />
          <Route path="/about-us/:details" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
