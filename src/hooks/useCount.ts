import React, { useState } from 'react'

const useCount = () => {
  const [data, setData] = useState(20)

  const InCrement = (num: number) => {
    setData((pre) => pre + num)
  }

  const DiCrement = (num: number) => {
    setData((pre) => pre - num)
  }


  return { data, InCrement, DiCrement }
}

export default useCount