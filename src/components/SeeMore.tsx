"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const SeeMore = ({id}:{id:number}) => {
    const router = useRouter()
  return (
    <button onClick={()=> router.push(`/product/${id}`)}>SeeMore</button>
  )
}

export default SeeMore