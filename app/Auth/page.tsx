import { LoginButton } from '@/components'
import React from 'react'


const Login = () => {
    

  return (
    <div className='flex flex-col items-center justify-center gap-4'>
        <h1 className='text-4xl font-bold mt-52'>Login</h1>
        <p className='text-lg'>Login to your account to access all features</p>
        <div className='flex flex-col gap-4 mb-5'>
            <input className='border border-gray-400 rounded-md px-4 py-2' placeholder='Username' />
            <input className='border border-gray-400 rounded-md px-4 py-2' placeholder='Password' />
            <LoginButton />
        </div>
    </div>
  )
}

export default Login