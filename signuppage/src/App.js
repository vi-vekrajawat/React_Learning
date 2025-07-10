import { Component } from "react";

class App extends Component {
    checkName = () => {
        const name = this.nameInput.value.trim();
        const nameSms = document.getElementById("sName");

        if (name === "") {
            nameSms.innerHTML = "Name is required";
            return false;
        } else if (name.length < 4) {
            nameSms.innerHTML = "Name should contain at least 4 characters";
            return false;
        } else {
            nameSms.innerHTML = "";
            return true;
        }
    };

    chkEmail = () => {
        const email = this.emailInput.value.trim();
        const emailSms = document.getElementById("sEmail");
        const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === "") {
            emailSms.innerHTML = "Email is required";
            return false;
        } else if (!valid.test(email)) {
            emailSms.innerHTML = "Invalid Email";
            return false;
        } else {
            emailSms.innerHTML = "";
            return true;
        }
    };

    chkAddress = () => {
        const address = this.addressInput.value.trim();
        const addressSms = document.getElementById("sAddress");

        if (address === "") {
            addressSms.innerHTML = "Address is required";
            return false;
        } else {
            addressSms.innerHTML = "";
            return true;
        }
    };

    chkPassword = () => {
        const password = this.passwordInput.value.trim();
        const passwordSms = document.getElementById("sPassword");

        if (password === "") {
            passwordSms.innerHTML = "Password is required";
            return false;
        } else if (password.length < 4) {
            passwordSms.innerHTML = "Password must be at least 4 characters";
            return false;
        } else {
            passwordSms.innerHTML = "";
            return true;
        }
    };

    chkRepeatPassword = () => {
        const password = this.passwordInput.value.trim();
        const rPassword = this.rPInput.value.trim();
        const rPasswordSms = document.getElementById("sRepeatPassword");

        if (rPassword === "") {
            rPasswordSms.innerHTML = "Please re-enter password";
            return false;
        } else if (rPassword !== password) {
            rPasswordSms.innerHTML = "Passwords do not match";
            return false;
        } else {
            rPasswordSms.innerHTML = "";
            return true;
        }
    };

    chkCheckbox = () => {
        const checkbox = this.checkboxInput.checked;
        const checkboxSms = document.getElementById("cSmall");

        if (!checkbox) {
            checkboxSms.innerHTML = "Please accept terms";
            checkboxSms.style.color = "red";
            return false;
        } else {
            checkboxSms.innerHTML = "";
            return true;
        }
    };
    



    
    sendForm = (e) => {
        e.preventDefault();

        const namechk = this.checkName();
        const emailchk = this.chkEmail();
        const addresschk = this.chkAddress();
        const passchk = this.chkPassword();
        const rpasschk = this.chkRepeatPassword();
        const chkchkbox = this.chkCheckbox();

        if (namechk && emailchk && addresschk && passchk && rpasschk && chkchkbox) {
            document.getElementById("para").innerHTML = `
                Name: ${this.nameInput.value}<br>
                Email: ${this.emailInput.value}<br>
                Address: ${this.addressInput.value}<br>
                Password: ${this.passwordInput.value}
            `;
        }
    };

    render() {
        return <>
            <div style={{ display: "flex", justifyContent: "center", gap: "50px", boxShadow: "10px 10px 10px grey", width: "1150px", height: "900px" }} className="mt-5 ml-5">
                <div style={{ position: "relative", height: "auto" }}>
                    <div style={{ position: "absolute", width: "100%", height: "66.5%", backgroundColor: "rgba(252, 125, 233, 0.5)", }}
                    ></div>
                    <img src="https://thumbs.dreamstime.com/b/baby-girl-year-old-posing-room-over-christmas-tree-decorations-looking-camera-merry-christmas-wearing-stylish-dr-baby-102871074.jpg" style={{ width: "auto", height: "600PX", display: "block" }} alt="Signup" />
                </div>
                <div>
                    <h3>Sign Up</h3>
                    <form className="form mt-3">
                        <div className="form-group m-2">
                            <label className="ml-2">Full Name</label>
                            <input onKeyUp={this.checkName} ref={(branchObject) => (this.nameInput = branchObject)} placeholder="Full Name" className="form-control-sm form-control border-top-0 border-left-0 border-right-0" />
                            <small id="sName" className="form-text text-danger ml-3"></small>
                        </div>

                        <div className="form-group m-2">
                            <label className="ml-2">Email Address</label>
                            <input onKeyUp={this.chkEmail} ref={(emailObject) => (this.emailInput = emailObject)} placeholder="Enter Email" className="form-control-sm form-control border-top-0 border-left-0 border-right-0" />
                            <small id="sEmail" className="form-text text-danger ml-3"></small>
                        </div>

                        <div className="form-group m-2">
                            <label className="ml-2">Address</label>
                            <input ref={(addressObject) => (this.addressInput = addressObject)} placeholder="Enter Address" className="form-control border-top-0 border-left-0 border-right-0" />
                            <small id="sAddress" className="form-text text-danger ml-3"></small>
                        </div>

                        <div className="form-group m-2">
                            <label className="ml-2">Password</label>
                            <input type="password" onKeyUp={this.chkPassword} ref={(passObj) => (this.passwordInput = passObj)} placeholder="Password" className="form-control border-left-0 border-right-0 border-top-0" />
                            <small id="sPassword" className="form-text text-danger ml-3"></small>
                        </div>

                        <div className="form-group m-2">
                            <label className="ml-2">Repeat Password</label>
                            <input type="password" onKeyUp={this.validateRepeatPassword} ref={(repeatPassObj) => (this.rPInput = repeatPassObj)} placeholder="Repeat Password" className="form-control border-left-0 border-right-0 border-top-0" />
                            <small id="sRepeatPassword" className="form-text text-danger ml-3"></small>
                        </div>

                        <div className="form-group m-2">
                            <input type="checkbox" ref={(chkObj) => (this.checkboxInput = chkObj)} />
                            <label className="ml-2">I agree to the terms of User</label>
                            <small className="ml-2" id="cSmall"></small>
                        </div>

                        <div className="form-group m-2 text-center">
                            <button onClick={this.sendForm} style={{ borderRadius: "20px", width: "150px", backgroundColor: "rgb(205, 97, 164)", color: "white", borderBlockStyle: "none", height: "35px", }} className="mt-3 border-rounded" type="submit"> Sign Up
                            </button>
                            <small className="ml-3">Sign in →</small>
                        </div>
                    </form>
                    <p id="para" className="ml-3 text-success"></p>
                </div>
            </div>
        </>

    }

}

export default App;
