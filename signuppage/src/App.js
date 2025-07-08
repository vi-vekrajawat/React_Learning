import { Component } from "react";

class App extends Component {
    checkName = () => {
        const name = this.nameInput.value.trim();
        const nameSms = document.getElementById("sName");

        if (name === "") {
            nameSms.innerHTML = " ";
            return false;
        } else if (name.length < 4) {
            nameSms.innerHTML = "Name should contain at least 4 character";
            return false;
        } else {
            nameSms.innerHTML = "";
            return true;
        }
    };

    checkEmail = () => {
        const email = this.emailInput.value.trim();
        const emailSms = document.getElementById('sEmail');
        const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === "") {
            emailSms.innerHTML = " ";
            return false;
        } else if (valid.test(email)) {
            emailSms.innerHTML = "";
            return true;
        } else {
            emailSms.innerHTML = "Invalid Email Id";
            return false;
        }
    };

    checkPassword = () => {
        const password = this.passwordInput.value.trim();
        const passwordSms = document.getElementById("sPassword");

        if (password === "") {
            passwordSms.innerHTML = " ";
            return false;
        } else if (password.length < 4) {
            passwordSms.innerHTML = "Password should be greater than 4 character or digit";
            return false;
        } else {
            passwordSms.innerHTML = "";
            return true;
        }
    };

    checkrepeatPassword = () => {
        const password = this.passwordInput.value.trim();
        const rPassword = this.rPInput.value.trim();
        const rPasswordSms = document.getElementById("sRepeatPassword");

        if (rPassword === "") {
            rPasswordSms.innerHTML = " ";
            return false;
        } else if (rPassword.length < 4 || rPassword !== password) {
            rPasswordSms.innerHTML = "Password should be greater than 4 character or digit || Password Should be Same ";
            return false;
        } else {
            rPasswordSms.innerHTML = "";
            return true;
        }
    };

    formSubmit = (e) => {
        e.preventDefault();
        const checkName = this.checkName();
        const checkEmail = this.checkEmail();
        const checkPassword = this.checkPassword();
        const checkrepeatPassword = this.checkrepeatPassword();
        const chkBox = document.getElementById("checkBox");
        const chkVal = chkBox.checked;

        const name = this.nameInput.value;
        const email = this.emailInput.value;
        const address = this.addressInput.value;
        const password = this.passwordInput.value;
        const rPassword = this.rPInput.value;
        const data = document.getElementById('para');

        if (checkName && checkEmail && checkPassword && checkrepeatPassword && chkVal) {
            data.innerHTML = `Name: ${name}<br> Email: ${email}<br> Address: ${address}<br> Password: ${password}<br> Confirm Password: ${rPassword}`;
            document.getElementById("cSmall").innerHTML = "";
        } else {
            document.getElementById("sName").innerHTML = "required";
            document.getElementById("sName").style.color = "red";

            document.getElementById("sEmail").innerHTML = "required";
            document.getElementById("sEmail").style.color = "red";

            document.getElementById("sPassword").innerHTML = "required";
            document.getElementById("sPassword").style.color = "red";

            document.getElementById("sRepeatPassword").innerHTML = "required";
            document.getElementById("sRepeatPassword").style.color = "red";

            document.getElementById("cSmall").innerHTML = "required";
            document.getElementById("cSmall").style.color = "red";
        }
    };

    render() {
        return (
            <>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "50px",
                        boxShadow: "10px 10px 10px grey",
                        width: "1150px",
                        height: "900px",
                    }}
                    className="mt-5 ml-5"
                >
                    <div style={{ position: "relative", height: "auto" }}>
                        <div
                            style={{
                                position: "absolute",
                                width: "100%",
                                height: "66.5%",
                                backgroundColor: "rgba(252, 125, 233, 0.5)",
                            }}
                        ></div>
                        <img
                            src="https://thumbs.dreamstime.com/b/baby-girl-year-old-posing-room-over-christmas-tree-decorations-looking-camera-merry-christmas-wearing-stylish-dr-baby-102871074.jpg"
                            style={{ width: "auto", height: "600PX", display: "block" }}
                            alt="Signup"
                        />
                    </div>
                    <div>
                        <h3>Sign Up</h3>
                        <form className="form mt-3">
                            <div className="form-group m-2">
                                <label className="ml-2">Full Name</label>
                                <input
                                    onKeyUp={this.checkName}
                                    ref={(el) => (this.nameInput = el)}
                                    placeholder="Full Name"
                                    className="form-control-sm form-control border-top-0 border-left-0 border-right-0"
                                    required
                                />
                                <small id="sName" className="form-text text-danger ml-3"></small>
                            </div>

                            <div className="form-group m-2">
                                <label className="ml-2">Email Address</label>
                                <input
                                    onKeyUp={this.checkEmail}
                                    ref={(el) => (this.emailInput = el)}
                                    placeholder="Enter Email"
                                    className="form-control-sm form-control border-top-0 border-left-0 border-right-0"
                                    required
                                />
                                <small id="sEmail" className="form-text text-danger ml-3"></small>
                            </div>

                            <div className="form-group m-2">
                                <label className="ml-2">Address</label>
                                <input
                                    ref={(el) => (this.addressInput = el)}
                                    placeholder="Enter Address"
                                    className="form-control border-top-0 border-left-0 border-right-0"
                                    required
                                />
                                <small id="sAddress" className="form-text text-danger ml-3"></small>
                            </div>

                            <div className="form-group m-2">
                                <label className="ml-2">Password</label>
                                <input
                                    type="password"
                                    onKeyUp={this.checkPassword}
                                    ref={(el) => (this.passwordInput = el)}
                                    placeholder="Password"
                                    className="form-control border-top-0 border-left-0 border-right-0"
                                    required
                                />
                                <small id="sPassword" className="form-text text-danger ml-3"></small>
                            </div>

                            <div className="form-group m-2">
                                <label className="ml-2">Repeat Password</label>
                                <input
                                    type="password"
                                    onKeyUp={this.checkrepeatPassword}
                                    ref={(el) => (this.rPInput = el)}
                                    placeholder="Repeat Password"
                                    className="form-control border-left-0 border-right-0 border-top-0"
                                    required
                                />
                                <small id="sRepeatPassword" className="form-text text-danger ml-3"></small>
                            </div>

                            <div className="form-group m-2">
                                <input id="checkBox" type="checkbox" />
                                <label className="ml-2">I agree to the terms of User </label>
                                <small className="ml-2" id="cSmall"></small>
                            </div>

                            <div className="form-group m-2 text-center">
                                <button
                                    onClick={this.formSubmit}
                                    style={{
                                        borderRadius: "20px",
                                        width: "150px",
                                        backgroundColor: "rgb(205, 97, 164)",
                                        color: "white",
                                        borderBlockStyle: "none",
                                        height: "35px",
                                    }}
                                    className="mt-3 border-rounded"
                                    type="submit"
                                >
                                    Sign Up
                                </button>
                                <small className="ml-3">Sign in →</small>
                            </div>
                        </form>
                        <p id="para"></p>
                    </div>
                </div>
            </>
        );
    }
}

export default App;

