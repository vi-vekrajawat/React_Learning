

function Table({taskData,setTaskData,defaultSatus,setDefaultStatus,priorityOrder}) {
      const taskDeactive = (index) => {
        let updatedTask = [...taskData];
        updatedTask[index].taskStatus = "Deactive";
        setTaskData(updatedTask);
    };

    const taskActive = (index) => {
        let updatedTask = [...taskData]
        updatedTask[index].taskStatus = "Active"
        setTaskData(updatedTask)
    }
    return <>
        <table className="table mt-3">
            <thead className="table-dark">
                <tr>
                    <td>s.no</td>
                    <td>Title</td>
                    <td>Date</td>
                    <td>Priority</td>
                    <td>Operation</td>
                </tr>
            </thead>
            <tbody>
                {taskData.filter((task, index) => task.taskStatus == defaultSatus).sort((a, b) => { return priorityOrder[a.priority] - priorityOrder[b.priority] }).map((task, index) => {
                    const originalIndex = taskData.indexOf(task);
                    return <tr key={index} className={task.priority === "High" ? "bg-danger text-white" : task.priority === "Normal" ? "bg-warning text-white" : "bg-success text-white"}>
                        <td>{index + 1}</td>
                        <td>{task.Title}</td>
                        <td>{task.Date}</td>
                        <td>{task.priority}</td>
                        <td>{task.taskStatus === "Active" ? <button className="btn btn-secondary" onClick={() => taskDeactive(originalIndex)}  >Deactive</button> : <button className="btn btn-secondary" onClick={() => taskActive(originalIndex)}>Active</button>}</td>
                    </tr>
                })}
            </tbody>
        </table>    
    </>
}

    export default Table;