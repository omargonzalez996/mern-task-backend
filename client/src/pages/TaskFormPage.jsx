import { useForm } from 'react-hook-form'
import { useTasks } from '../context/TaskContext'

function TaskFormPage() {
    const { register, setValue, handleSubmit } = useForm()
    const { tasks, createTask } = useTasks()

    const onSubmit = handleSubmit((data) => {
        createTask(data)
    })

    return (
        <div className='w-screen h-screen flex items-center justify-center'>
            <div
                className='bg-white border-2 max-w-md w-full p-10 rounded-md'
            >
                <form onSubmit={onSubmit}>
                    <input
                        type="text"
                        placeholder="Title"
                        {...register('title')}
                        className='w-full bg-zinc-50 text-gray-800 px-4 py-2 rounded-md border-2'
                        autoFocus
                    />
                    <textarea
                        rows="3"
                        placeholder="Description"
                        {...register("description")}
                        className='w-full bg-zinc-50 text-gray-800 px-4 py-2 rounded-md border-2 my-2 resize-none'
                    ></textarea>
                    <button
                        className='p-2 bg-blue-800 hover:bg-blue-500 text-white transition-all rounded-md w-36'
                    >
                        Save
                    </button>
                </form>
            </div>
        </div>
    )
}

export default TaskFormPage