import react,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from "react-bootstrap";



export class Employee extends Component{

    constructor(props){
        super(props);
        this.state={deps:[]}
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


    render(){
        const {deps} = this.state;

        return(
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
            
        )
    }
}