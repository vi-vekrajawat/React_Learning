function Buttons({taskData,setTaskData,defaultSatus,setDefaultStatus}) {
  return <>
    <div className="row ml-5 mt-3">
        <div className="ml-3">
            <button className="btn btn-primary" disabled={defaultSatus == "Active" ? true : false} onClick={() => setDefaultStatus("Active")}>Active({taskData.filter((task) => { return task.taskStatus === "Active" }).length})</button>
            <button className="btn btn-info ml-3" disabled={defaultSatus == 'Deactive' ? true : false} onClick={() => setDefaultStatus("Deactive")}>Deactive({taskData.filter((task) => { return task.taskStatus === "Deactive" }).length})</button>
        </div>
    </div>

</>
}
export default Buttons;