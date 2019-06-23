import React, { Component, Fragment } from 'react'
import { getEmployeeSalaryPayment, saveEmployeeSalaryPayment, updateEmployeeSalaryPayment } from "../../service/employee-salary-payment.service"
import { alertService } from "../../service/alert.service"
import { Link } from 'react-router-dom'
import { Textbox, Select, Textarea, Radiobox } from 'react-inputs-validation'


class EmployeeSalaryPaymentAddEdit extends Component {

    state = {
        id: "",
        employee: null,
        year: "",
        month: "",
        amount: "",
        comments: ""
    }

    componentDidMount() {

        let id = this.props.match.params.id
        if (id)
            this.getEditData(id)
    }

    async getEditData(id) {

        try {
            let payment = await getEmployeeSalaryPayment(id)
            this.setState({
                id: payment.employee._id,
                employee: payment.employee,
                year: payment.year,
                month: payment.month,
                amount: payment.amount,
                comments: payment.comments
            })
            alertService.sendAlert({ type: "success", message: "Salary has been successfully updated" })
        } catch (error) {
            alertService.sendAlert({ type: "danger", message: error.message })
            console.log(error)
        }
    }

    async saveOrUpdate() {

        try {

            let reqBody = {
                employee: this.employee._id,
                year: this.state.year,
                month: this.state.month,
                amount: this.state.amount,
                comments: this.state.comments
            }

            if (this.state.id) {
                await saveEmployeeSalaryPayment(reqBody)
                alertService.sendAlert({ type: "success", message: "Salary payment has been successfully updated" })
            }

            else {
                await updateEmployeeSalaryPayment(this.state.id, reqBody)
                alertService.sendAlert({ type: "success", message: "Salary payment has been successfully saved" })
            }

        } catch (error) {
            alertService.sendAlert({ type: "danger", message: error.message })
            console.log(error)
        }
    }

    render() {
        return (
            <Fragment>
                <div className="row breadcrumb-row mt-1 mb-2">
                    <div className="col-md-6">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item active">
                                    <span>Add New Payment</span>
                                </li>
                            </ol>
                        </nav>
                    </div>

                    <div className="col-md-6 text-right action-col">
                        <button type="button" className="btn btn-secondary btn-sm" onClick={() => { this.saveOrUpdate() }}>Save</button>
                        &nbsp;
                                <button type="button" className="btn btn-warning btn-sm">
                            <Link to={"/module/employees/salary-payments"} className="breadcrumb-link">Cancel</Link>
                        </button>
                    </div>
                </div>

                <div className="row pb-3">
                    <div className="col-md-12 pb-1">
                        <span className="lead">Employee Details</span>
                        <hr />
                    </div>
                    <div className="col-md-4 pb-3">
                        <label>First Name</label>
                        <Textbox
                            tabIndex="1"
                            name="firstName"
                            type="text"
                            value={this.state.firstName}
                            placeholder="First Name"
                            onChange={(firstName, e) => { this.setState({ firstName }) }}
                            onBlur={(e) => {
                                console.log(e)
                            }}
                            validationOption={{
                                name: 'First Name',
                                check: true,
                                required: true
                            }} />
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default EmployeeSalaryPaymentAddEdit; 