import React, { Component } from 'react'
import AdminSidebar from '../../../Containers/AdminSidebar';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import firebase from '../../../Config/Firebase'

export class PlanDetails extends Component {

    constructor() {
        super()
        this.state = {
            allData: [],
            loader: false,
        }
    }

    componentDidMount() {
        this.setState({ loader: true })
        firebase.database().ref("users").on("value", (data) => {
            let a = Object.entries(data.val())
            this.setState({ allData: a })
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
                            <DashboardIcon style={{ fill: "black" }} />
                            <span style={{ marginLeft: 10 }}>Plans Sold</span>
                        </div>
                        <div>
                            <TableContainer component={Paper}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell style={{ fontWeight: "bold" }}>Price</TableCell>
                                            <TableCell align="right" style={{ fontWeight: "bold" }}>Sold Out</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>
                                                5000
                                                </TableCell>
                                            <TableCell align="right">3</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </div >}
            </AdminSidebar>
        )
    }
}

export default PlanDetails
