import { useRef, useState } from "react";
import Data from "./Data";
import Header from "./Component/Header";
import AddTask from "./Component/AddTask";
import Buttons from "./Component/Buttons";
import Table from "./Component/Table";


function App() {
  let [taskData, setTaskData] = useState(Data)
  let [taskpriorty] = useState(['Normal', "High", "Low"]);
  let [defaultSatus, setDefaultStatus] = useState("Active");

  const priorityOrder = { High: 1, Normal: 2, Low: 3 };

 

  
  return <>
  <Header />
  <AddTask taskData={taskData} setTaskData={setTaskData} taskpriorty={taskpriorty}/>
  <Buttons taskData={taskData} setTaskData={setTaskData} defaultSatus={defaultSatus} setDefaultStatus={setDefaultStatus} />
  <Table taskData={taskData} setTaskData={setTaskData} defaultSatus={defaultSatus} setDefaultStatus={setDefaultStatus} priorityOrder={priorityOrder} />
  </>
}
export default App;
