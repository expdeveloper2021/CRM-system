import React, { Component } from 'react'
import AdminSidebar from '../../../Containers/AdminSidebar';
import ScheduleIcon from '@material-ui/icons/Schedule';
import CheckIcon from '@material-ui/icons/Check';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import firebase from '../../../Config/Firebase'

export class AdminDashboard extends Component {

    constructor() {
        super()
        this.state = {
            allData: [],
            loader: false,
            approved: [],
            pending: [],
        }
    }

    componentDidMount() {
        this.setState({ loader: true })
        firebase.database().ref("users").on("value", (data) => {
            let a = Object.entries(data.val())
            let approved = a.filter((e) => {
                return e[1].verified === true
            })
            let pending = a.filter((e) => {
                return e[1].verified === false
            })
            this.setState({ allData: a, approved, pending })
            this.setState({ loader: false })

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
                            <span style={{ marginLeft: 10 }}>Pending</span>
                        </div>
                        <div>
                            <TableContainer component={Paper}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell style={{ fontWeight: "bold" }}>Email</TableCell>
                                            <TableCell align="right" style={{ fontWeight: "bold" }}>Associate Name</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {!!this.state.pending && this.state.pending.map((e) => {
                                            return !e[1].verified ? <TableRow key={e[1].email}>
                                                <TableCell>
                                                    {e[1].email}
                                                </TableCell>
                                                <TableCell align="right">{e[1].aName}</TableCell>
                                            </TableRow> : <p style={{ padding: "5px 20px" }}>No Pending Accounts</p>
                                        })}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                        <div className="informative-content" style={{ marginTop: 10 }}>
                            <CheckIcon style={{ fill: "black" }} />
                            <span style={{ marginLeft: 10 }}>Approved</span>
                        </div>
                        <div>
                            <TableContainer component={Paper}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell style={{ fontWeight: "bold" }}>Email</TableCell>
                                            <TableCell align="right" style={{ fontWeight: "bold" }}>Associate Name</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {!!this.state.approved && this.state.approved.map((e) => {
                                            return !!e[1].verified ? <TableRow key={e[1].email}>
                                                <TableCell>
                                                    {e[1].email}
                                                </TableCell>
                                                <TableCell align="right">{e[1].aName}</TableCell>
                                            </TableRow> : <p style={{ padding: "5px 20px" }}>No Verified Accounts.</p>
                                        })}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </div >}
            </AdminSidebar>
        )
    }
}

export default AdminDashboard
