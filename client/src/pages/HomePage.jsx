import React from 'react'
import { Icon } from '@iconify/react'
import { useNavigate } from 'react-router-dom'

function HomePage() {
    const navigate = useNavigate()

    const test = () => {
        navigate('/register')
    }

    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='bg-white p-10 rounded-sm w-3/4'>
                <h1 className='text-2xl text-center my-10 font-bold'>TaskApp (v0.1)</h1>
                <div className='m-5'>
                    <p className='text-center  text-gray-600 my-2'>
                        Fullstack web application for simple Task CRUD
                    </p>
                    <p className='text-center  text-gray-600 my-2'>
                        UsingReact as frontend application using modules like react-hook-form, react-router-dom, and axios to consume RESTful API.
                    </p>
                    <p className='text-center  text-gray-600 my-2'>
                        Also using NodeJs, MongoDB, ZOD, JSON Web Tokensa and cookies.
                    </p>
                </div>
                <div className='bg-slate-100 rounded-md p-2'>
                    <h2 className='text-center text-xl'>Frontend</h2>
                    <div className='flex w-full justify-around my-2'>
                        <Icon icon="logos:vitejs" width="80" height="80" />
                        <Icon icon="vscode-icons:file-type-html" width="80" height="80" />
                        <Icon icon="logos:react" width="80" height="80" />
                        <Icon icon="logos:tailwindcss-icon" width="80" height="80" />
                        <Icon icon="simple-icons:axios" width="80" height="80" />
                    </div>
                </div>
                <div className='bg-slate-100 rounded-md p-2 my-5'>
                    <h2 className='text-center text-xl'>Backend</h2>
                    <div className='flex w-full justify-around my-2'>
                        <Icon icon="logos:nodejs-icon" width="80" height="80" />
                        <Icon icon="devicon:express" width="80" height="80" />
                        <Icon icon="devicon:mongodb-wordmark" width="80" height="80" />
                        <Icon icon="logos:zod" width="80" height="80" />
                        <Icon icon="simple-icons:jsonwebtokens" width="80" height="80" />
                    </div>
                </div>
                <div className='w-full flex justify-center items-center my-5'>
                    <button onClick={() => test()} className='w-44 rounded-sm bg-blue-600 text-white p-2 hover:bg-blue-900 hover:text-yellow-300 transition duration-3000' >
                        Test
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HomePage