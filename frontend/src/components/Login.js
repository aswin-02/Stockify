import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Login.css";

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        // Perform authentication logic here
        // For example, you can check if the username and password are valid 

        // Check if username or password is empty
        if(username.length <= 0 || password.length <= 0){ 
                document.getElementById("message").innerHTML =
                "fill out all fields";
        }else{
            // Check if username and password are correct
            if (username === "admin" && password === "password") {
                navigate("/home"); // Redirect to home page
            } else {
                document.getElementById("message").innerHTML =
                    "invalid user name or password";
                // alert("Invalid username or password");
            }
        }
    };

    return (
        <div className="container-fluid newbg">
            <div className="container">
                <div className="d-flex justify-content-center">
                    <div id="form" className="p-5 rounded border border-light">
                        <form>
                            <h2 className="text-center mb-4">Login</h2>
                            <label className="col-form-label">Username</label>

                            <input
                                className="form-control"
                                type="text"
                                placeholder="Username"
                                name="name"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required={true} // Add the required attribute
                            />

                            <label className="col-form-label">Password</label>

                            <div className="text-center">
                                <input
                                    className="form-control"
                                    type="password"
                                    placeholder="Password"
                                    name="name"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required={true} // Add the required attribute
                                />
                            </div>
                            <small id="message" className="form-text mt-0 text-danger"></small>
                        </form>
                        <button className="btn btn-primary mt-4" onClick={handleLogin}>
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
