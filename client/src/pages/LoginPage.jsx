import React from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext'
import { useNavigate, Link } from 'react-router-dom'

function LoginPage() {
    const StyleInput = 'w-full text-black px-4 py-2 bg-zinc-100 rounded-sm my-2 text-center'

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signIn, errors: signinErrors } = useAuth();

    const onSubmit = handleSubmit(async (data) => {
        signIn(data);
    })

    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='bg-white max-w-md p-10 rounded-sm'>
                <a href="/" className='hover:underline hover:text-blue-500 transition duration-300'>{`< Back`}</a>
                <h1 className='text-xl text-blue-500 text-center font-bold my-5'>Login</h1>
                {signinErrors?.map((error, i) => (
                    <div className='bg-red-500 p-2 text-white text-centerƒ my-2' key={i}>
                        {error}
                    </div>
                ))}
                <form onSubmit={onSubmit}>
                    <input type="email" {...register('email', { required: true })} className={StyleInput} placeholder='Email' />{
                        errors.email && (<p className='text-red-500'>Email is required</p>)
                    }
                    <input type="password" {...register('password', { required: true })} className={StyleInput} placeholder='Password' />{
                        errors.password && (<p className='text-red-500'>Password is required</p>)
                    }
                    <div className='flex w-full justify-center p-5'>
                        <button className='bg-slate-300 p-2 w-36 rounded-md hover:bg-blue-500 hover:text-white transition-colors duration-300' tyoe='submit'>Register</button>
                    </div>
                </form >
                <p className='text-end text-gray-500'>Don't have an account? <Link to="/register" className='underline text-blue-800 hover:text-blue-500'>Sign up</Link></p>
            </div>
        </div>
    )
}

export default LoginPage