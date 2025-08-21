import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams, useRoutes } from 'react-router-dom'
import useCount from '../../hooks/useCount';

const AboutUs = () => {
  const { details }: any = useParams();
  const [count, setCount] = useState(1)

  

  let data = JSON.parse(details)

  const navigate = useNavigate();

  useEffect(() => {
    setCount(count + 1)
  }, [])

  console.log(data, "details")

  return (
    <div>AboutUs
      <Link to={"/"}>Home</Link>
      {/* <div onClick={() => navigate("/")}>home</div> */}
      <p>name: {data?.name}</p>
      <p>age: {data?.age}</p>
      <p>gender: {data?.gender}</p>
    </div>
  )
}

export default AboutUs