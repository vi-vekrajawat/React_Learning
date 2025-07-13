
import { useState, useRef } from "react";
import Data from "../Data";

function StudentFunction() {
    const [studentData, setStudentData] = useState(Data);
    const [defaultBranch, setDefaultBranch] = useState("All");
    const stdBranch = ["cs", "it", "ec", "mech"];

    const rollRef = useRef(null);
    const nameRef = useRef(null);
    const contactRef = useRef(null);
    const branchRef = useRef(null);

    const chkName = () => {
        const name = nameRef.current.value.trim();
        const nameSms = document.getElementById("sName");

        if (name === "") {
            nameSms.innerHTML = "Name is required";
            nameSms.style.color = "red";
            return false;
        } else if (name.length < 4) {
            nameSms.innerHTML = "Name should contain at least 4 characters";
            nameSms.style.color = "red";
            return false;
        } else {
            nameSms.innerHTML = "";
            return true;
        }
    };

    const userRollNumber = () => {
        const rollNumber = rollRef.current.value;
        const doc = document.getElementById("roll1");

        if (studentData.filter((s) => s.rollNumber === rollNumber)) {
            doc.innerHTML = "Already Taken";
            doc.style.color = "red";
            return false;
        } else if (rollNumber === "") {
            doc.innerHTML = "Required";
            doc.style.color = "red";
            return false;
        } else if (isNaN(rollNumber)) {
            doc.innerHTML = "Must be a number";
            doc.style.color = "red";
            return false;
        } else {
            doc.innerHTML = "";
            return true;
        }
    };

    const chkContact = () => {
        const contact = contactRef.current.value.trim();
        const cSms = document.getElementById("sContact");

        if (contact === "") {
            cSms.innerHTML = "Required";
            cSms.style.color = "red";
            return false;
        } else if (contact.length !== 10 || !/^\d+$/.test(contact)) {
            cSms.innerHTML = "Invalid Contact";
            cSms.style.color = "red";
            return false;
        } else {
            cSms.innerHTML = "";
            return true;
        }
    };

    const chkBranch = () => {
        const branch = branchRef.current.value.trim();
        const bSms = document.getElementById("sBranch");

        if (branch === "") {
            bSms.innerHTML = "Required";
            bSms.style.color = "red";
            return false;
        } else {
            bSms.innerHTML = "";
            return true;
        }
    };

    const addStudent = () => {
        const rollchk = userRollNumber();
        const namechk = chkName();
        const contactchk = chkContact();
        const branchchk = chkBranch();

        if (rollchk && namechk && contactchk && branchchk) {
            const rollNumber = rollRef.current.value;
            const name = nameRef.current.value;
            const contact = contactRef.current.value;
            const branch = branchRef.current.value;

            const newStudent = { rollNumber, name, contact, branch };
            setStudentData([...studentData, newStudent]);

            rollRef.current.value = "";
            nameRef.current.value = "";
            contactRef.current.value = "";
            branchRef.current.value = "";
        }
    };

    const removeStudent = (rollNumber) => {
        const updatedList = studentData.filter((student) => student.rollNumber !== rollNumber);
        setStudentData(updatedList);
    };

    return (
        <>
            <div className="bg-danger p-2 d-flex justify-content-center text-white">
                <h4>Student App</h4>
            </div>

            <div className="container mt-3 mb-3">
                <div className="row mb-3 justify-content-center">
                    <div className="col-md-4 mb-2">
                        <input
                            ref={rollRef}
                            id="roll"
                            placeholder="Enter Roll Number"
                            className="form-control"
                            onKeyUp={userRollNumber}
                        />
                        <small id="roll1"></small>
                    </div>
                    <div className="col-md-4 mb-2">
                        <input
                            onKeyUp={chkName}
                            ref={nameRef}
                            placeholder="Enter Name"
                            className="form-control"
                        />
                        <small id="sName"></small>
                    </div>
                </div>

                <div className="row mb-3 justify-content-center">
                    <div className="col-md-4 mb-2">
                        <input
                            onKeyUp={chkContact}
                            ref={contactRef}
                            placeholder="Enter Contact"
                            className="form-control"
                        />
                        <small id="sContact"></small>
                    </div>
                    <div className="col-md-4 mb-2">
                        <select onClick={chkBranch} ref={branchRef} className="form-control">
                            <option value="">Select Branch</option>
                            {stdBranch.map((branch, index) => (
                                <option key={index} value={branch}>
                                    {branch}
                                </option>
                            ))}
                        </select>
                        <small id="sBranch"></small>
                    </div>
                </div>

                <div className="row mr-5">
                    <div className="col-md-6  text-center">
                        <button onClick={addStudent} className="btn btn-success w-30">
                            Add Student
                        </button>
                    </div>
                    <div className="row ">
                        <div className="col text-center">
                            {stdBranch.map((branch) => (
                                <button
                                    key={branch}
                                    className="btn btn-outline-dark m-1"
                                    onClick={() => setDefaultBranch(branch)}
                                >
                                    {branch.toUpperCase()} ({studentData.filter((s) => s.branch === branch).length})
                                </button>
                            ))}
                            <button
                                className="btn btn-info m-1"
                                onClick={() => setDefaultBranch("All")}
                            >
                                Total ({studentData.length})
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-3">
                <table className="table table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Branch</th>
                            <th>Contact</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentData
                            .filter(
                                (student) =>
                                    defaultBranch === "All" || student.branch === defaultBranch
                            )
                            .map((student, index) => (
                                <tr key={index}>
                                    <td>{student.rollNumber}</td>
                                    <td>{student.name}</td>
                                    <td>{student.branch}</td>
                                    <td>{student.contact}</td>
                                    <td>
                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() => removeStudent(student.rollNumber)}
                                        >
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default StudentFunction;
