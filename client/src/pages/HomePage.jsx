import React from 'react'
import { Icon } from '@iconify/react'
import { useNavigate } from 'react-router-dom'
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

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
                        MERN Stack CRUD with JWT
                    </p>
                    <p className='text-center  text-gray-600 my-2'>
                        This is a web application project using React, with a Nodejs Backend using Express and Mongodb as Database (MERN Stack)
                    </p>
                    <div className='block'>
                        <p className=' text-xl font-bold text-center text-gray-600 my-2 w-full h-fit'>
                            Key features:
                        </p>
                        <div className='w-full flex justify-center'>
                            <ul className='text-left w-fit text-gray-600'>
                                <li>➊ User Authentication</li>
                                <li>➋ Task Creation</li>
                                <li>➌ Task Listing</li>
                                <li>➍ Task Update</li>
                                <li>➎ Task Deletion</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='bg-slate-100 rounded-md p-2'>
                    <h2 className='text-center text-xl'>Frontend</h2>
                    <div className='flex w-full justify-around my-2'>
                        <a data-tooltip-id="tultip" data-tooltip-content="Vite" href="https://vitejs.dev/">
                            <Icon icon="logos:vitejs" width="80" height="80" />
                        </a>
                        <a data-tooltip-id="tultip" data-tooltip-content="HTML5" href="#" tooltip>
                            <Icon icon="vscode-icons:file-type-html" width="80" height="80" />
                        </a>
                        <a data-tooltip-id="tultip" data-tooltip-content="React" href="https://es.react.dev/">
                            <Icon icon="logos:react" width="80" height="80" />
                        </a>
                        <a data-tooltip-id="tultip" data-tooltip-content="Tailwind" href="https://tailwindcss.com/">
                            <Icon icon="logos:tailwindcss-icon" width="80" height="80" />
                        </a>
                        <a data-tooltip-id="tultip" data-tooltip-content="Axios" href="https://axios-http.com/">
                            <Icon icon="simple-icons:axios" width="80" height="80" />
                        </a>
                    </div>
                </div>
                <div className='bg-slate-100 rounded-md p-2 my-5'>
                    <h2 className='text-center text-xl'>Backend</h2>
                    <div className='flex w-full justify-around my-2'>
                        <a data-tooltip-id="tultip" data-tooltip-content="NodeJs" href="https://nodejs.org/es">
                            <Icon icon="logos:nodejs-icon" width="80" height="80" />
                        </a>
                        <a data-tooltip-id="tultip" data-tooltip-content="Express" href="https://expressjs.com/">
                            <Icon icon="devicon:express" width="80" height="80" />
                        </a>
                        <a data-tooltip-id="tultip" data-tooltip-content="MongoDB" href="https://www.mongodb.com/">
                            <Icon icon="devicon:mongodb-wordmark" width="80" height="80" />
                        </a>
                        <a data-tooltip-id="tultip" data-tooltip-content="Zod" href="https://zod.dev/">
                            <Icon icon="logos:zod" width="80" height="80" />
                        </a>
                        <a data-tooltip-id="tultip" data-tooltip-content="JSONWebToken" href="https://jwt.io/">
                            <Icon icon="simple-icons:jsonwebtokens" width="80" height="80" />
                        </a>
                    </div>
                </div>
                <div className='w-full flex justify-center items-center my-5'>
                    <button onClick={() => test()} className='w-44 rounded-sm bg-blue-600 text-white p-2 hover:bg-blue-900 hover:text-yellow-300 transition duration-3000' >
                        Test
                    </button>
                </div>
            </div>
            <Tooltip id="tultip" />
        </div>
    )
}

export default HomePage