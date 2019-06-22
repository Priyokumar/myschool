import React, { Component, Fragment } from 'react'
import { getEmployees } from "../../service/employee.service"

class EmployeeSearch extends Component {
    state = {
        employees: [],
        isLoading: false,
        hasError: false,
        hasSucceeded: false
    }

    componentDidMount() {
        this.getEmployees()
    }

    async getEmployees() {
        try {
            this.setState({
                hasError: false,
                isLoading: true
            })
            let employees = await getEmployees()
            this.setState({
                isLoading: false,
                employees: employees
            })
        } catch (error) {
            this.setState({
                hasError: true,
                isLoading: false
            })
            console.log(error)
        }
    }

    close() {
        this.props.close()
    }

    select(employee) {

        let data = {
            type: "search_employee",
            employee: employee
        }

        this.props.close(data)
    }

    render() {
        return (

            <Fragment>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Employee Name</th>
                            <th>Gender</th>
                            <th>Status</th>
                            <th>Employee Type</th>
                            <th>Designation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.employees.map((employee, index) => {
                                return (
                                    <tr key={index} onClick={() => { this.select(employee) }}>
                                        <td>{employee.firstName} {employee.middleName} {employee.lastName}</td>
                                        <td>{employee.gender}</td>
                                        <td>{employee.status}</td>
                                        <td>{employee.employeeType}</td>
                                        <td>{employee.designation}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </Fragment>
        );
    }
}

export default EmployeeSearch;