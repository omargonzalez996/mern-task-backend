import { useForm } from 'react-hook-form'
function TasksPage() {
    const { register, handleSubmit } = useForm()
    return (
        <div>
            <form action="">
                <input type="text" placeholder="Title"
                    {...register('title')}
                    autoFocus />
                <textarea rows="3" placeholder="Description"></textarea>
                <button>
                    Save
                </button>
            </form>
        </div>
    )
}

export default TasksPage

const link = "https://www.youtube.com/watch?v=NmkY4JgS21A" //3h:35m