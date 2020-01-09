import React, { Component } from 'react'
import './index.css'
import Button from '@material-ui/core/Button';
import firebase from '../../Config/Firebase'
import swal from 'sweetalert'

class Login extends Component {

    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
        }
    }

    signUp() {
        const { email, password } = this.state
        if (email === "admin@ft.com" && password === "admin") {
            this.props.history.push("/AdminPanel")
        } else {
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then((succ) => {
                    localStorage.setItem("uid", succ.user.uid)
                    swal({
                        title: "Great!",
                        text: "Sign In Successfully",
                        icon: "success",
                    }).then(() => {
                        this.setState({ email: '', password: '' })

                        this.props.history.push("/MemberPanel")
                    })
                }).catch((err) => {
                    swal({
                        title: "Error Identified",
                        text: err.message,
                        icon: "error",
                    });
                })
        }
    }

    render() {
        return (
            <div className="main">
                <div className="btn-container">
                    <Button variant="contained" style={{ backgroundColor: "#5bc0de", color: "white", marginTop: 40 }} onClick={() => window.location.href = "https://futuretrades.in"}>
                        Back Home
                    </Button>
                </div>
                <div className="content-containerl">
                    <div className="container-workl">
                        <h1 style={{ color: "#5bc0de", textAlign: "center" }}>Log In</h1>
                        <div style={{ width: "90%", height: 2, backgroundColor: "gray", display: "flex", margin: "0px auto" }}></div>
                        <div className="all-inputs-form">
                            <div className="input-group">
                                <input type="email" className="form-control" placeholder="Email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                            </div>
                            <div className="input-group">
                                <input type="password" className="form-control" placeholder="Password" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />
                            </div>
                            <div className="btn-registration">
                                <Button variant="contained" style={{ backgroundColor: "#337ab7", color: "white", marginTop: 15 }} onClick={this.signUp.bind(this)}>
                                    Submit
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
