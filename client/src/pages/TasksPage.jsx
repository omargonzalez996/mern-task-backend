import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
function TasksPage() {
    const { register, setValue, handleSubmit } = useForm()
    const navigate = useNavigate()

    const onSubmit = async (data) => {
        try {
            if (params.id) {
                updateTask(params.id, {
                    ...data,
                    date: dayjs.utc(data.date).format(),
                });
            } else {
                createTask({
                    ...data,
                    date: dayjs.utc(data.date).format(),
                });
            }

            // navigate("/tasks");
        } catch (error) {
            console.log(error);
            // window.location.href = "/";
        }
    };

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