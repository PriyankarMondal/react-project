import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams, useRoutes } from 'react-router-dom'

const AboutUs = () => {
  const { details }: any = useParams();
  const [count, setCount] = useState(1)

  let data = JSON.parse(details)

  const navigate = useNavigate();

  useEffect(() => {
    setCount(count + 1)
  }, [])

  console.log(details, "details")

  return (
    <div>AboutUs
      <Link to={"/"} >Home</Link>
      {/* <div onClick={() => navigate("/")}>home</div> */}
      <p>name: {data?.name}</p>
      <p>age: {data?.age}</p>
      <p>gender: {data?.gender}</p>
    </div>
  )
}

export default AboutUs