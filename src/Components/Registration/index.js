import React, { Component } from 'react'
import './index.css'
import Button from '@material-ui/core/Button';
import firebase from '../../Config/Firebase'
import swal from 'sweetalert'

const generateRandomCode = (() => {
    const USABLE_CHARACTERS = "fats0123456789".split("");

    return length => {
        return new Array(length).fill(null).map(() => {
            return USABLE_CHARACTERS[Math.floor(Math.random() * USABLE_CHARACTERS.length)];
        }).join("");
    }
})();

class Registration extends Component {

    constructor() {
        super()
        this.state = {
            sCode: '',
            sName: '',
            aName: '',
            phone: '',
            email: '',
            address: '',
            state: '',
            city: '',
            pincode: '',
            password: '',
        }
    }

    signUp() {
        const { sCode, sName, aName, phone, email, address, state, city, pincode, password } = this.state
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                let uid = firebase.auth().currentUser.uid;
                let userObj = ""
                userObj = {
                    sCode,
                    sName,
                    aName,
                    phone,
                    email,
                    address,
                    state,
                    city,
                    pincode,
                } // userObj closes here
                firebase.database().ref("users/" + uid).set(userObj)
                    .then(() => {
                        let sCode = generateRandomCode(8)
                        let userObj2 = {
                            sCode,
                            sName: aName,
                            uid
                        }
                        firebase.database().ref("AllSponsors").push(userObj2).then(() => {
                            swal({
                                title: "Great!",
                                text: "User Created Successfully",
                                icon: "success",
                            }).then(() => {
                                this.setState({ sCode: '', sName: '', aName: '', phone: '', email: '', address: '', state: '', city: '', pincode: '', password: '' })
                            })
                        })
                    })
            }).catch((err) => {
                swal({
                    title: "Error Identified",
                    text: err.message,
                    icon: "error",
                });
            })
    }

    render() {
        return (
            <div className="main">
                <div className="btn-container">
                    <Button variant="contained" style={{ backgroundColor: "#5bc0de", color: "white", marginTop: 40 }} onClick={() => window.location.href = "https://futuretrades.in"}>
                        Back Home
                    </Button>
                </div>
                <div className="content-container">
                    <div className="container-work">
                        <h1 style={{ color: "#5bc0de", textAlign: "center" }}>Register</h1>
                        <div style={{ width: "90%", height: 2, backgroundColor: "gray", display: "flex", margin: "0px auto" }}></div>
                        <div className="all-inputs-form">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Sponsor Code" value={this.state.sCode} onChange={(e) => this.setState({ sCode: e.target.value })} />
                            </div>
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Sponsor Name" value={this.state.sName} onChange={(e) => this.setState({ sName: e.target.value })} />
                            </div>
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Associate Name" value={this.state.aName} onChange={(e) => this.setState({ aName: e.target.value })} />
                            </div>
                            <div className="input-group">
                                <input type="number" className="form-control" placeholder="Phone" value={this.state.phone} onChange={(e) => this.setState({ phone: e.target.value })} />
                            </div>
                            <div className="input-group">
                                <input type="email" className="form-control" placeholder="Email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                            </div>
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Address" value={this.state.address} onChange={(e) => this.setState({ address: e.target.value })} />
                            </div>
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="State" value={this.state.state} onChange={(e) => this.setState({ state: e.target.value })} />
                            </div>
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="City" value={this.state.city} onChange={(e) => this.setState({ city: e.target.value })} />
                            </div>
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Pin Code" value={this.state.pincode} onChange={(e) => this.setState({ pincode: e.target.value })} />
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

export default Registration
