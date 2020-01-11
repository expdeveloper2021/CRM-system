import React, { Component } from 'react'
import './index.css'
import Sidebar from '../../Containers/Sidebar'
import DashboardIcon from '@material-ui/icons/Dashboard'
import firebase from '../../Config/Firebase'

export class Dashboard extends Component {

    constructor() {
        super()
        this.state = {
            sCode: '',
            panDet: '',
            adharDet: '',
            loader: false,
        }
    }

    async componentDidMount() {
        let uid = localStorage.getItem("uid")
        this.setState({ loader: true })
        await firebase.database().ref("AllSponsors/" + uid).on("value", (data) => {
            this.setState({ sCode: data.val().sCode2 })
        })
        await firebase.database().ref("users/" + uid).on("value", (data) => {
            let a = data.val()
            this.setState({ loader: false })
            if (!!a.pan) {
                this.setState({ panDet: a.pan })
            }
            if (!!a.adhar) {
                this.setState({ adharDet: a.adhar })
            }
        })
    }

    render() {
        return (
            <div>
                <Sidebar sCode={!!this.state.sCode && this.state.sCode}>
                    <div className="informative-content">
                        <DashboardIcon style={{ fill: "black" }} />
                        <span style={{ marginLeft: 10 }}>Dashboard</span>
                    </div>
                    {this.state.loader ? <div className="loader">
                        <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                    </div> : <div className="main-content-dashboard">
                            <div className="upper-portion-dashboard">
                                <div className="informative-dashboard">
                                    <p>ID Verification</p>
                                    <p>Verified</p>
                                </div>
                                <div className="informative-dashboard">
                                    <p>0.00</p>
                                    <p>ROI Income</p>
                                </div>
                                <div className="informative-dashboard">
                                    <p>0.00</p>
                                    <p>Binary Income</p>
                                </div>
                                <div className="informative-dashboard">
                                    <p>0.00</p>
                                    <p>Direct Income</p>
                                </div>
                            </div>
                            <div className="status-dashboard">
                                <p>Your Account Status</p>
                                <hr />
                                <p>Your account is a free account, please upgrade it to get more advantages.</p>
                            </div>
                            <div className="user-info-dash">
                                <h5 style={{ fontWeight: "bold", color: "black" }}>Pan Card:</h5>
                                {!!this.state.panDet ? !!this.state.panDet.verified ? <>
                                    <p>Number</p>
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Pan Card Number" value={this.state.panDet.panNumber} readOnly={true} />
                                    </div>
                                    <p>Image</p>
                                    <div style={{ width: "100%", textAlign: "center" }}><img src={this.state.panDet.img} width="320" height="180" style={{ borderRadius: 10 }} /></div>
                                </> : <p>Your pan card is in verifying by the admin. Please wait.</p> : <p>Sorry, we can't find your pan card. Please add it in the My Account Tab.</p>}
                                <h5 style={{ fontWeight: "bold", color: "black", marginTop: 20 }}>Adhar Card:</h5>
                                {!!this.state.adharDet ? !!this.state.adharDet.verified ? <>
                                    <p>Number</p>
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Adhar Card Number" value={this.state.adharDet.adharNumber} readOnly={true} />
                                    </div>
                                    <p>Image</p>
                                    <div style={{ width: "100%", textAlign: "center" }}><img src={this.state.adharDet.img} width="320" height="180" style={{ borderRadius: 10 }} /></div>
                                </> : <p>Your adhar card is in verifying by the admin. Please wait.</p> : <p>Sorry, we can't find your adhar card. Please add it in the My Account Tab.</p>}
                            </div>
                        </div>}
                </Sidebar>
            </div >
        )
    }
}

export default Dashboard


