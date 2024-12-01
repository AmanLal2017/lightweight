import { useState } from 'react'

const Login = () => {

    const [currentState, setCurrentState] = useState('login');

    const onSubmitHandler = async (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto pt-32 min-h-[55vh] gap-4 text-gray-800'>
            <div className='inline-flex items-center gap-2 mb-2 mt-10'>
                <p className='prata-regular text-3xl'>{currentState}.</p>
            </div>
            {currentState === 'login' ? null : <input className='w-full px-3 py-2 border border-gray-800' type="text" placeholder='Name' required />}
            <input className='w-full px-3 py-2 border border-gray-800' type="email" placeholder='Email' required />
            <input className='w-full px-3 py-2 border border-gray-800' type="password" placeholder='Password' required />
            <div className='w-full flex justify-between text-sm mt-[-8px]'>
                <p className='cursor-pointer'>forgot your password?</p>
                {
                    currentState === 'login'
                        ? <p onClick={() => setCurrentState('sign up')} className='cursor-pointer'>create account</p>
                        : <p onClick={() => setCurrentState('login')} className='cursor-pointer'>login here!</p>
                }
            </div>
            <button type='submit' className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState === 'login' ? 'Sign in' : 'Sign up'}</button>
        </form>
    )
}

export default Login
