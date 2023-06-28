import { useEffect } from "react";
import { useAuth } from "../context/AuthContext"
import { useTasks } from "../context/TaskContext"

function TasksPage() {
    const { getTasks, tasks } = useTasks();

    useEffect(() => {
        getTasks()
    }, [])

    if (tasks.length === 0) {
        return (
            <div className="flex items-center justify-center w-screen h-screen">
                <h1>No Tasks Found...</h1>
            </div>
        )
    }


    return (
        <div className="flex items-center justify-center w-screen h-screen">
            <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ">
                {tasks.map(task => (
                    <div key={task._id} className=" bg-slate-50 px-3 py-5 rounded-md max-w-xl">
                        <div className="font-semibold text-xl text-slate-600">{task.title}</div>
                        <div className="text-slate-500">{task.description}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default TasksPage