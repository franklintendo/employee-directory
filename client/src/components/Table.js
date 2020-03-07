import React from "react";
import Row from "./Row";
import employees from "../employees.json";

class Table extends React.Component {

    state = {
        employees: employees,
        origEmployees: employees
    }

    ascFirstName = () => {
        const employees = this.state.employees.sort(function(a, b) {
            var nameA = a.firstName.toUpperCase(); // ignore upper and lowercase
            var nameB = b.firstName.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
          
            // names must be equal
            return 0;
          });
        
          this.setState(employees);
    }

    descFirstName = () => {
        const employees = this.state.employees.sort(function(a, b) {
            var nameA = a.firstName.toUpperCase(); // ignore upper and lowercase
            var nameB = b.firstName.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return 1;
            }
            if (nameA > nameB) {
              return -1;
            }
          
            // names must be equal
            return 0;
          });
        
          this.setState(employees);
    }

    ascLastName = () => {
        const employees = this.state.employees.sort(function(a, b) {
            var nameA = a.lastName.toUpperCase(); // ignore upper and lowercase
            var nameB = b.lastName.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
          
            // names must be equal
            return 0;
          });
        
          this.setState(employees);
    }

    descLastName = () => {
        const employees = this.state.employees.sort(function(a, b) {
            var nameA = a.lastName.toUpperCase(); // ignore upper and lowercase
            var nameB = b.lastName.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return 1;
            }
            if (nameA > nameB) {
              return -1;
            }
          
            // names must be equal
            return 0;
          });
        
          this.setState(employees);
    }

    ascRole = () => {
        const employees = this.state.employees.sort(function(a, b) {
            var nameA = a.role.toUpperCase(); // ignore upper and lowercase
            var nameB = b.role.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
          
            // names must be equal
            return 0;
          });
        
          this.setState(employees);
    }

    descRole = () => {
        const employees = this.state.employees.sort(function(a, b) {
            var nameA = a.role.toUpperCase(); // ignore upper and lowercase
            var nameB = b.role.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return 1;
            }
            if (nameA > nameB) {
              return -1;
            }
          
            // names must be equal
            return 0;
          });
        
          this.setState(employees);
    }

    ascDepartment = () => {
        const employees = this.state.employees.sort(function(a, b) {
            var nameA = a.department.toUpperCase(); // ignore upper and lowercase
            var nameB = b.department.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
          
            // names must be equal
            return 0;
          });
        
          this.setState(employees);
    }

    descDepartment = () => {
        const employees = this.state.employees.sort(function(a, b) {
            var nameA = a.department.toUpperCase(); // ignore upper and lowercase
            var nameB = b.department.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return 1;
            }
            if (nameA > nameB) {
              return -1;
            }
          
            // names must be equal
            return 0;
          });
        
          this.setState(employees);
    }

    handleInputChange = event => {
      const value = event.target.value;
      const employees = this.state.origEmployees;
      const matchedEmployees = [];
      
      employees.forEach(employee => {
        const firstName = employee.firstName.toUpperCase();
        const lastName = employee.lastName.toUpperCase();
        const valueToMatch = value.toUpperCase();
        
        if (firstName.includes(valueToMatch) || lastName.includes(valueToMatch)){
          matchedEmployees.push(employee);
        };
      });

      // console.log(matchedEmployees);
      this.setState({ 
        employees: matchedEmployees
      });
      // console.log(this.state);
    }

    

    render() {
        return (
        <div className="container">
            {/* <Filters employees={employees} /> */}
            <div className="row">
              <div className="col-12 py-3">
              <input
                onChange={this.handleInputChange}
                value={this.value}
                name="search"
                type="text"
                className="form-control"
                placeholder="Search by name"
                id="search"
              />
                
              </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <table className="w-100">
                        <thead>
                            <tr className="border-bottom">
                                <th>
                                  <span className="d-none d-md-inline">First Name</span>
                                  <span className="d-block d-md-none">First</span>
                                  <span onClick={this.ascFirstName}><i class="fas fa-arrow-circle-up mx-1 mx-md-2"></i></span> 
                                  <span onClick={this.descFirstName}><i class="fas fa-arrow-circle-down"></i></span>
                                </th>
                                <th>
                                  <span className="d-none d-md-inline">Last Name</span>
                                  <span className="d-block d-md-none">Last</span>
                                  <span onClick={this.ascLastName}><i class="fas fa-arrow-circle-up mx-1 mx-md-2"></i></span> 
                                  <span onClick={this.descLastName}><i class="fas fa-arrow-circle-down"></i></span>
                                </th>
                                <th>
                                  <span className="d-block d-md-inline">Role</span> 
                                  <span onClick={this.ascRole}><i class="fas fa-arrow-circle-up mx-1 mx-md-2"></i></span> 
                                  <span onClick={this.descRole}><i class="fas fa-arrow-circle-down"></i></span>
                                </th>
                                <th>
                                  <span className="d-none d-md-inline">Department</span>
                                  <span className="d-block d-md-none">Dept.</span>
                                  <span onClick={this.ascDepartment}><i class="fas fa-arrow-circle-up mx-1 mx-md-2"></i></span> 
                                  <span onClick={this.descDepartment}><i class="fas fa-arrow-circle-down"></i></span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <Row employees={this.state.employees} />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        );
    }
}

export default Table;