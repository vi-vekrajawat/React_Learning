import { useRef } from "react";
function AddTask({taskData,setTaskData,taskpriorty}) {
    let taskRef = useRef(null)
    let priorityRef = useRef(null)

    const addTask = () => {
        const date = new Date();
        let Title = taskRef.current.value
        let priority = priorityRef.current.value
        let taskdate = date.toLocaleDateString()
        if (Title && priority) {
            let newTask = { Title, priority, Date: taskdate, taskStatus: "Active" }

            setTaskData([...taskData, newTask])
        }
        else {
            let tasksms = document.getElementById("sTask")
            tasksms.innerHTML = "Required"
            tasksms.style.color = "red"

        }

    }
    return <>
        <div className="row ml-5">
            <div className="col-md-4 mt-3">
                <input ref={taskRef} placeholder="Create Task" className="form-control"></input>
                <small id="sTask"></small>
            </div>
            <div className="col-md-4 mt-3">
                <select className="form-control" ref={priorityRef}>
                    {taskpriorty.map((task, index) => { return <option key={index}>{task}</option> })}
                </select>
                <small id="sPriority"></small>
            </div>
            <div className="row ml-5 mt-3">
                <div className="ml-3">
                    <button className="btn btn-success" onClick={addTask}>ADD</button>
                </div>
            </div>
        </div>
    </>
}

export default AddTask;
