"use server"
import React from 'react'
import { cookies } from 'next/headers'

function token() {

    const cookieStore = cookies()
const token = cookieStore.get('token')
// useEffect(()=>{
    // const storeUser = data?.jwt;

    // Cookies.get('token');

console.log(token)

// })
  return (
    <div>
      
    </div>
  )
}

export default token
