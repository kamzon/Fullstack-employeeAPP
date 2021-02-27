import react,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from "react-bootstrap";

import {Button, ButtonToolbar } from "react-bootstrap";
import {AddEmpModal} from "./AddEmpModal";



export class Employee extends Component{

    constructor(props){
        super(props);
        this.state={deps:[], addModalShow : false}
    }

    componentDidMount(){
        this.refreshList();
    }
    
    refreshList(){
        fetch('https://localhost:44319/api/employee').
        then(Response => Response.json())
        .then(data => {
            this.setState({deps:data});

        });
    }

    componentDidUpdate(){
        this.refreshList();
    }


    render(){
        const {deps} = this.state;
        let addModelClose = () => this.setState({addModalShow:false});

        return(
            <div>
            <Table className="m-5" striped bordred hover size="sm">
                <thead>
                    <tr>
                        <th>EmployeeID</th>
                        <th>EmployeeName</th>
                        <th>Department</th>
                        <th>MailID</th>
                        <th>Date of joinin</th>
                    </tr>
                </thead>
                <tbody>
                    {deps.map(emp=>
                        <tr key = {emp.EmployeeID}> 
                            <td>{emp.EmployeeID}</td>
                            <td>{emp.EmployeeName}</td>
                            <td>{emp.Department}</td>
                            <td>{emp.MailID}</td>
                            <td>{emp.DOJ}</td>
                        </tr>
                        )}
                </tbody>
            </Table>

            <ButtonToolbar>
                <Button className="m-5" variant="primary"
                onClick={()=> this.setState({addModalShow:true})}
                > Add Employee</Button>

                <AddEmpModal
                show={this.state.addModalShow}
                onHide={addModelClose}
                />
            </ButtonToolbar>
            </div>  
        )
    }
}