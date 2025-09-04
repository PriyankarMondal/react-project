import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams, useRoutes } from 'react-router-dom'
import useCount from '../../hooks/useCount';
import { useSelector } from 'react-redux';

const AboutUs = () => {
  const { details }: any = useParams();
  const [count, setCount] = useState(1)

  const countData = useSelector((state:any)=> state.countReducer.countNum)

  console.log(countData, "countData")

  // let data = JSON.parse(details)
  let data = {name: "", age: "", gender: ""}

  const navigate = useNavigate();

  useEffect(() => {
    setCount(count + 1)
  }, [])

  console.log(data, "details")

  return (
    <div>AboutUs&nbsp;{countData}&nbsp;
      <Link to={"/"}>Home</Link>
      {/* <div onClick={() => navigate("/")}>home</div> */}
      <p>name: {data?.name}</p>
      <p>age: {data?.age}</p>
      <p>gender: {data?.gender}</p>
    </div>
  )
}

export default AboutUs