import React from "react";
import Row from "./Row";
import employees from "../employees.json";

class Table extends React.Component {

    state = {
        employees
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

    

    render() {
        return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <table className="w-100">
                        <thead>
                            <tr className="border-bottom">
                                <th>First Name <span onClick={this.ascFirstName}>ASC</span> <span onClick={this.descFirstName}>DESC</span></th>
                                <th>Last Name <span onClick={this.ascLastName}>ASC</span> <span onClick={this.descLastName}>DESC</span></th>
                                <th>Role <span onClick={this.ascRole}>ASC</span> <span onClick={this.descRole}>DESC</span></th>
                                <th>Department <span onClick={this.ascDepartment}>ASC</span> <span onClick={this.descDepartment}>DESC</span></th>
                            </tr>
                        </thead>
                        <tbody>
                            <Row employees={employees} />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        );
    }
}

export default Table;