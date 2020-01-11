import React, { Component } from 'react'
import AdminSidebar from '../../../Containers/AdminSidebar';
import ScheduleIcon from '@material-ui/icons/Schedule';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import firebase from '../../../Config/Firebase'
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/Check';
import swal from 'sweetalert';

export class Activation extends Component {

    constructor() {
        super()
        this.state = {
            panActivation: "",
            adharActivation: "",
            loader: false,
        }
    }

    componentDidMount() {
        this.setState({ loader: true })
        firebase.database().ref("allActivations/pan").on("value", (data) => {
            if (!!data.val()) {
                let a = Object.entries(data.val())
                this.setState({ panActivation: a })
            } else {
                this.setState({ panActivation: "" })
            }
            this.setState({ loader: false })
        })
        firebase.database().ref("allActivations/adhar").on("value", (data) => {
            if (!!data.val()) {
                let a = Object.entries(data.val())
                this.setState({ adharActivation: a })
            } else {
                this.setState({ adharActivation: "" })
            }
            this.setState({ loader: false })
        })
        setTimeout(() => {
            this.setState({ loader: false })
        }, 3000);
    }

    deletePan(push, uid) {
        firebase.database().ref("allActivations/pan/" + push).remove().then(() => {
            firebase.database().ref("users/" + uid + "/pan").remove().then(() => {
                swal({
                    title: "Great",
                    text: "Pan Card Removed Successfully",
                    icon: "success"
                })
            })
        })
    }

    approvePan(push, uid) {
        firebase.database().ref("allActivations/pan/" + push).remove().then(() => {
            firebase.database().ref("users/" + uid + "/pan/verified").set(true).then(() => {
                swal({
                    title: "Great",
                    text: "Pan Card Approved Successfully",
                    icon: "success"
                })
            })
        })
    }

    deleteAdhar(push, uid) {
        console.log(push, uid)
        firebase.database().ref("allActivations/adhar/" + push).remove().then(() => {
            firebase.database().ref("users/" + uid + "/adhar").remove().then(() => {
                swal({
                    title: "Great",
                    text: "Adhar Card Removed Successfully",
                    icon: "success"
                })
            })
        })
    }

    approveAdhar(push, uid) {
        firebase.database().ref("allActivations/adhar/" + push).remove().then(() => {
            firebase.database().ref("users/" + uid + "/adhar/verified").set(true).then(() => {
                swal({
                    title: "Great",
                    text: "Adhar Card Approved Successfully",
                    icon: "success"
                })
            })
        })
    }

    render() {
        return (
            <AdminSidebar>
                {this.state.loader ? <div className="loader">
                    <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </div> : <div className="main-content-dashboard" >
                        <div className="informative-content">
                            <ScheduleIcon style={{ fill: "black" }} />
                            <span style={{ marginLeft: 10 }}>Pan Card</span>
                        </div>
                        <div>
                            <TableContainer component={Paper}>
                                {!!this.state.panActivation ? <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell style={{ fontWeight: "bold" }}>Pan Number</TableCell>
                                            <TableCell align="right" style={{ fontWeight: "bold" }}>Actions</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {this.state.panActivation.map((e) => {
                                            return <TableRow key={e[1].panNumber}>
                                                <TableCell>
                                                    {e[1].panNumber}
                                                </TableCell>
                                                <TableCell align="right">
                                                    <DeleteIcon style={{ fill: "black", cursor: "pointer" }} onClick={this.deletePan.bind(this, e[0], e[1].uid)} />
                                                    <CheckIcon style={{ fill: "black", cursor: "pointer", margin: "0px 10px" }} onClick={this.approvePan.bind(this, e[0], e[1].uid)} />
                                                </TableCell>
                                            </TableRow>
                                        })}
                                    </TableBody>
                                </Table> : <p style={{ padding: "5px 20px" }}>No Activations Yet.</p>}
                            </TableContainer>
                        </div>
                        <div className="informative-content">
                            <ScheduleIcon style={{ fill: "black" }} />
                            <span style={{ marginLeft: 10 }}>Adhar Card</span>
                        </div>
                        <div>
                            <TableContainer component={Paper}>
                                {!!this.state.adharActivation ? <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell style={{ fontWeight: "bold" }}>Pan Number</TableCell>
                                            <TableCell align="right" style={{ fontWeight: "bold" }}>Actions</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {this.state.adharActivation.map((e) => {
                                            return <TableRow key={e[1].adharNumber}>
                                                <TableCell>
                                                    {e[1].adharNumber}
                                                </TableCell>
                                                <TableCell align="right">
                                                    <DeleteIcon style={{ fill: "black", cursor: "pointer" }} onClick={this.deleteAdhar.bind(this, e[0], e[1].uid)} />
                                                    <CheckIcon style={{ fill: "black", cursor: "pointer", margin: "0px 10px" }} onClick={this.approveAdhar.bind(this, e[0], e[1].uid)} />
                                                </TableCell>
                                            </TableRow>
                                        })}
                                    </TableBody>
                                </Table> : <p style={{ padding: "5px 20px" }}>No Activations Yet.</p>}
                            </TableContainer>
                        </div>
                    </div>}
            </AdminSidebar>
        )
    }
}

export default Activation
