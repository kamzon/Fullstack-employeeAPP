import react,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from "react-bootstrap";

import {Button, ButtonToolbar } from "react-bootstrap";
import {AddDepModal} from "./AddDepModal";


export class Department extends Component{

    constructor(props){
        super(props);
        this.state={deps:[], addModalShow : false}
    }

    componentDidMount(){
        this.refreshList();
    }

    refreshList(){
        fetch('https://localhost:44319/api/department').
        then(Response => Response.json())
        .then(data => {
            this.setState({deps:data});

        });
    }

    render(){

        const {deps} = this.state;
        let addModelClose = () => this.setState({addModalShow:false});

        return(
            <div>
            <Table className="m-5" striped bordred hover size="sm">
                <thead>
                    <tr>
                        <th>DepartmentID</th>
                        <th>DepartmentName</th>
                    </tr>
                </thead>
                <tbody>
                    {deps.map(dep=>
                        <tr key = {dep.DepartmentID}> 
                            <td>{dep.DepartmentID}</td>
                            <td>{dep.DepartmentName}</td>
                        </tr>
                        )}
                </tbody>
            </Table>

            <ButtonToolbar>
                <Button className="m-5" variant="primary"
                onClick={()=> this.setState({addModalShow:true})}
                > Add Department</Button>

                <AddDepModal
                show={this.state.addModalShow}
                onHide={addModelClose}
                />
            </ButtonToolbar>
            </div>
        )
    }
}