import react,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from "react-router-dom";
import {Navbar, Nav} from "react-bootstrap";



export class Navigation extends Component{

    render(){
        return(
            <Navbar className = "m-5 d-flex justify-content-left" bg="dark" expend="lg">

                <Navbar.Toggle aria-controls="basic-navbar-nav"/>

                <Navbar.Collapse id="basic-navbar-nav">
                    <nav>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/">Home</NavLink>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/department">Department</NavLink>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/employee">Employee</NavLink>
                    </nav>
                </Navbar.Collapse>


            </Navbar>
        )
    }
}