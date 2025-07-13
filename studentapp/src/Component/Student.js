import { Component } from "react";
import Data from "../Data";

class Student extends Component {
    constructor() {
        super();
        this.state = {
            studentData: Data,
            stdBranch: ['cs', 'it', 'ec', 'mech'],
            defaultBranch: "All"
        };
    }


      chkName = () => {
        const name = this.nameInput.value.trim();
        const nameSms = document.getElementById("sName");

        if (name === "") {
            nameSms.innerHTML = "Name is required";
            nameSms.style.color="red"
            return false;
        } else if (name.length < 4) {
            nameSms.innerHTML = "Name should contain at least 4 characters";
            nameSms.style.color="red"
            return false;
        } else {
            nameSms.innerHTML = "";
            return true;
        }
    };

     userRollNumber = () => {
        let rollNumber = this.rollInput.value;
        let doc = document.getElementById("roll1")
        if (this.state.studentData.some((studen) => { return studen.rollNumber == rollNumber })) {
            doc.textContent = "Already Taken"
            doc.style.color = "red"
            return false
        }
        else if(isNaN(rollNumber)){
            doc.textContent = "Must be Number"
            doc.style.color = "red"
            return true
        }
        else if(rollNumber===""){
            doc.textContent = "required"
            doc.style.color = "red"
        }
        else {
            return doc.textContent = " "
        }
    }

    chkContact = () =>{
        let contact = this.contactInput.value
        let cSms = document.getElementById("sContact")
        if(contact===""){
            cSms.innerHTML="required *"
            cSms.style.color="red"
            return false
        }
        else if(contact.length!==10){
            cSms.innerHTML="Invalid Contact"
            cSms.style.color="red"
            return false
        }
        else {
            cSms.innerHTML=" "
            return true
        }
    }

    chkBranch = () =>{
        let brch = this.branchInput.value
        let bSms = document.getElementById("sBranch")
        if(brch===""){
            bSms.innerHTML="Required"
            bSms.style.color="red"
            return false
        }
        else{
            bSms.innerHTML=" "
            return true
        }
    }
    addStudent = () => {
        let rollchk = this.userRollNumber()
        let namechk = this.chkName()
        let contactchk = this.chkContact()
        let branchchk = this.chkBranch()

        if(rollchk && namechk && contactchk && branchchk){
            let rollNumber = this.rollInput.value
            let name  = this.nameInput.value
            let contact = this.contactInput.value
            let branch = this.branchInput.value
            let newStudent = {rollNumber,name,contact,branch}
            this.setState({ studentData: [...this.state.studentData, newStudent] });
        }
    };
    removeStudent = (rollNumber) => {
        let index = this.state.studentData.findIndex(
            (studentData) => studentData.rollNumber == rollNumber
        );
        this.state.studentData.splice(index, 1);
        this.setState({ studentData: [...this.state.studentData] });
    };
   
    render() {
        return (
            <>
                <div className="bg-danger p-2 d-flex justify-content-center text-white">
                    <h4>Student App</h4>
                </div>

                <div className="container mt-3 mb-3">
                    {/* Input Fields */}
                    <div className="row mb-3 justify-content-center">
                        <div className="col-md-4 mb-2">
                            <input
                                ref={(rollObject) => (this.rollInput = rollObject)}id="roll"placeholder="Enter Roll Number"className="form-control" onKeyUp={this.userRollNumber}/>
                            <small id="roll1"></small>
                            <small className="sms"></small>
                        </div>
                        <div className="col-md-4 mb-2">
                            <input onKeyUp={this.chkName}
                                ref={(nameObject) => (this.nameInput = nameObject)}
                                placeholder="Enter Name"
                                id="name1"
                                className="form-control"
                            />
                            <small id="sName"></small>
                            <small className="sms"></small>
                        </div>
                    </div>
                    <div className="row mb-3 justify-content-center">
                        <div className="col-md-4 mb-2">
                            <input
                              onKeyUp={this.chkContact}  ref={(contactObject) => (this.contactInput = contactObject)}placeholder="Enter Contact"className="form-control"
                            />
                            <small id="sContact"></small>
                            <small className="sms"></small>

                        </div>
                        <div className="col-md-4 mb-2">
                            <select
                                onClick={this.chkBranch} ref={(branchObject) => (this.branchInput = branchObject)}className="form-control">
                                <option value="">Select Branch</option>
                                {this.state.stdBranch.map((branch, index) => (
                                    <option key={index} value={branch}>
                                        {branch}
                                    </option>
                                ))}
                            </select>
                            <small id="sBranch"></small>
                            <small className="sms"></small>

                        </div>
                    </div>
                    <div className="row ">
                        <div className="col text-center">
                            <button onClick={this.addStudent} className="btn btn-success w-30">
                                Add Student
                            </button>
                        </div>
                        <div className="row ">
                            <div className="col text-center">
                                <button
                                    className="btn btn-primary mr-5"
                                    onClick={() => this.setState({ defaultBranch: "cs" })}
                                >
                                    CS ({this.state.studentData.filter((s) => s.branch === "cs").length})
                                </button>
                                <button
                                    className="btn btn-secondary mr-5"
                                    onClick={() => this.setState({ defaultBranch: "it" })}
                                >
                                    IT ({this.state.studentData.filter((s) => s.branch === "it").length})
                                </button>
                                <button
                                    className="btn btn-dark mr-5"
                                    onClick={() => this.setState({ defaultBranch: "ec" })}
                                >
                                    EC ({this.state.studentData.filter((s) => s.branch === "ec").length})
                                </button>
                                <button
                                    className="btn btn-success  mr-5"
                                    onClick={() => this.setState({ defaultBranch: "mech" })}
                                >
                                    Mech ({this.state.studentData.filter((s) => s.branch === "mech").length})
                                </button>
                                <button
                                    className="btn btn-info mr-5 "
                                    onClick={() => this.setState({ defaultBranch: "All" })}
                                >
                                    Total ({this.state.studentData.length})
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Table */}
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
                            {this.state.studentData
                                .filter(
                                    (student) =>
                                        student.branch === this.state.defaultBranch ||
                                        this.state.defaultBranch === "All"
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
                                                onClick={() => this.removeStudent(student.rollNumber)}
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
}



export default Student;