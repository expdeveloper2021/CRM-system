import React, { Component } from 'react'
import './index.css'
import Sidebar from '../../Containers/Sidebar'
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Button from '@material-ui/core/Button';
import firebase from '../../Config/Firebase'
import swal from 'sweetalert'

export class Account extends Component {
    constructor() {
        super()
        this.state = {
            aName: '',
            address: '',
            city: '',
            email: '',
            phone: '',
            pincode: '',
            sCode: '',
            sName: '',
            pan: '',
            state: '',
            adhar: '',
            loader: true,
            // Pan Card
            panNumber: '',
            loaderPan: false,
            panImage: '',
            // Adhar Card
            adharNumber: '',
            adharImage: '',
            loaderAdhar: false,
            // Bank Account Info
            // Password info
            oldPassword: '',
            newPassword: '',
            reEnter: '',
            loaderPassword: false,
        }
    }

    componentDidMount() {
        let uid = localStorage.getItem("uid")
        firebase.database().ref("users/" + uid).on("value", (data) => {
            const { aName, address, city, email, phone, pincode, sCode, sName, state, pan, adhar } = data.val()
            this.setState({ aName, address, city, email, phone, pincode, sCode, sName, state, uid, pan, loader: false, adhar })
        })
    }

    update() {
        this.setState({ loader: true })
        const { aName, address, city, email, phone, pincode, sCode, sName, state, uid } = this.state
        let userObj = {
            aName,
            address,
            city,
            email,
            phone,
            pincode,
            sCode,
            sName,
            state
        }
        setTimeout(() => {
            firebase.database().ref("users/" + uid).set(userObj).then(() => {
                this.setState({ loader: false })
                swal({
                    title: "Great!",
                    text: "Updated Successfully",
                    icon: "success",
                })
            })
        }, 1000);
    }

    updatePan() {
        const { panNumber, panImage, uid } = this.state
        if (!!panNumber && !!panImage) {
            this.setState({ loaderPan: true })
            let userObj = {
                panNumber,
                verified: false,
            }
            let storageRef = firebase.storage().ref().child(`PanCard/${panImage.name}`)
            storageRef.put(panImage)
                .then((snapshot) => {
                    snapshot.ref.getDownloadURL().then((snapUrl) => {
                        userObj.img = snapUrl
                        userObj.uid = uid
                        firebase.database().ref("users/" + uid + "/pan").set(userObj).then(() => {
                            firebase.database().ref("allActivations/pan").push(userObj).then(() => {
                                this.setState({ loaderPan: false, panNumber: '' })
                                swal({
                                    title: "Congratulations",
                                    text: "Pan Card added and is in approval progress by admin.",
                                    icon: "success"
                                })
                            })
                        }).catch((e) => {
                            this.setState({ loaderPan: false })
                            swal({
                                title: "Error Identified",
                                text: e.message,
                                icon: "error"
                            })
                        })
                    })
                })
        }
    }

    updateAdhar() {
        const { adharNumber, adharImage, uid } = this.state
        if (!!adharNumber && !!adharImage) {
            this.setState({ loaderAdhar: true })
            let userObj = {
                adharNumber,
                verified: false,
            }
            let storageRef = firebase.storage().ref().child(`Adhar/${adharImage.name}`)
            storageRef.put(adharImage)
                .then((snapshot) => {
                    snapshot.ref.getDownloadURL().then((snapUrl) => {
                        userObj.img = snapUrl
                        userObj.uid = uid
                        firebase.database().ref("users/" + uid + "/adhar").set(userObj).then(() => {
                            firebase.database().ref("allActivations/adhar").push(userObj).then(() => {
                                this.setState({ loaderAdhar: false, adharNumber: '' })
                                swal({
                                    title: "Congratulations",
                                    text: "Adhar Card added and is in approval progress by admin.",
                                    icon: "success"
                                })
                            })
                        }).catch((e) => {
                            this.setState({ loaderAdhar: false })
                            swal({
                                title: "Error Identified",
                                text: e.message,
                                icon: "error"
                            })
                        })
                    })
                })
        }
    }

    updateBankAccount() {

    }

    updatePassword() {
        const { oldPassword, newPassword, reEnter } = this.state
        this.setState({ loaderPassword: true })
        if (newPassword === reEnter) {
            firebase.auth()
                .signInWithEmailAndPassword(this.state.email, oldPassword)
                .then(() => {
                    firebase.auth().currentUser.updatePassword(newPassword).then(() => {
                        this.setState({ loaderPassword: false, oldPassword: '', newPassword: '', reEnter: '' })
                        swal({
                            title: "Congratulations",
                            text: "Password Added Successfully",
                            icon: "success"
                        })
                    }).catch((err) => {
                        this.setState({ loaderPassword: false })
                        swal({
                            title: "Error Identified",
                            text: err.message,
                            icon: "error"
                        })
                    });
                }).catch((eee) => {
                    this.setState({ loaderPassword: false })
                    swal({
                        title: "Error Identified",
                        text: eee.message,
                        icon: "error"
                    })
                });
        } else {
            this.setState({ loaderPassword: false })
            swal({
                title: "Error Identified",
                text: "Both Password doesn't match. Please enter that one in the 3rd field matching with the 2nd",
                icon: "error"
            })
        }
    }

    render() {
        return (
            <div>
                <Sidebar>
                    <div className="informative-content">
                        <AccountBoxIcon style={{ fill: "black" }} />
                        <span style={{ marginLeft: 10 }}>Account</span>
                    </div>
                    <div className="main-content-dashboard">
                        {this.state.loader ? <div className="loader">
                            <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                        </div> : <div className="all-inputs-forma">
                                <h5>Pan Card:</h5>
                                {this.state.loaderPan ? <div className="loader">
                                    <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                                </div> : <>
                                        {/* {this.state.pan && <div style={{ width: "100%", textAlign: "center" }}><img src={this.state.pan.img} width="320" height="180" style={{ borderRadius: 10 }} /></div>} */}
                                        <p>Number</p>
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Pan Card Number" value={this.state.panNumber} onChange={(e) => this.setState({ panNumber: e.target.value })} />
                                        </div>
                                        <p>Image</p>
                                        <div className="input-group">
                                            <input type="file" style={{ border: "1px solid #ced4da", padding: ".375rem .75rem", borderRadius: ".25rem" }} className="form-control-file" onChange={(e) => this.setState({ panImage: e.target.files[0] })} />
                                        </div>
                                        <div className="btn-registration">
                                            <Button variant="contained" style={{ backgroundColor: "#337ab7", color: "white", marginTop: 15 }} onClick={this.updatePan.bind(this)}>
                                                Update
                                            </Button>
                                        </div></>}
                                <h5 style={{ marginTop: 10 }}>Adhar Card:</h5>
                                {this.state.loaderAdhar ? <div className="loader">
                                    <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                                </div> : <><p>Number</p>
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Adhar Card Number" value={this.state.adharNumber} onChange={(e) => this.setState({ adharNumber: e.target.value })} />
                                        </div>
                                        <p>Image</p>
                                        <div className="input-group">
                                            <input type="file" style={{ border: "1px solid #ced4da", padding: ".375rem .75rem", borderRadius: ".25rem" }} className="form-control-file" onChange={(e) => this.setState({ adharImage: e.target.files[0] })} />
                                        </div>
                                        <div className="btn-registration">
                                            <Button variant="contained" style={{ backgroundColor: "#337ab7", color: "white", marginTop: 15 }} onClick={this.updateAdhar.bind(this)}>
                                                Update
                                            </Button>
                                        </div></>}
                                <h5 style={{ marginTop: 10 }}>Bank Account Details:</h5>
                                <p>Benificiary Name</p>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Benificiary Name" />
                                </div>
                                <p>Account Number</p>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Bank Account Number" />
                                </div>
                                <p>IFSC</p>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="IFSC" />
                                </div>
                                <p>Branch Name</p>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Bank Branch Name" />
                                </div>
                                <div className="btn-registration">
                                    <Button variant="contained" style={{ backgroundColor: "#337ab7", color: "white", marginTop: 15 }} onClick={this.update.bind(this)}>
                                        Update
                                </Button>
                                </div>
                                <h5 style={{ marginTop: 10 }}>Change Password:</h5>
                                {this.state.loaderPassword ? <div className="loader">
                                    <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                                </div> : <><p>Old Password</p>
                                        <div className="input-group">
                                            <input type="password" className="form-control" placeholder="Old Password" value={this.state.oldPassword} onChange={(e) => this.setState({ oldPassword: e.target.value })} />
                                        </div>
                                        <p>New Password</p>
                                        <div className="input-group">
                                            <input type="password" className="form-control" placeholder="New Password" value={this.state.newPassword} onChange={(e) => this.setState({ newPassword: e.target.value })} />
                                        </div>
                                        <p>Re-enter New Password</p>
                                        <div className="input-group">
                                            <input type="password" className="form-control" placeholder="Re-enter Password" value={this.state.reEnter} onChange={(e) => this.setState({ reEnter: e.target.value })} />
                                        </div>
                                        <div className="btn-registration">
                                            <Button variant="contained" style={{ backgroundColor: "#337ab7", color: "white", marginTop: 15 }} onClick={this.updatePassword.bind(this)}>
                                                Update
                                            </Button>
                                        </div>
                                    </>}
                            </div>}
                    </div>
                </Sidebar>
            </div>
        )
    }
}

export default Account