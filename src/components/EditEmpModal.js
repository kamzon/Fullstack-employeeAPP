import react, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Row, Col, Form } from "react-bootstrap";


export class EditEmpModal extends Component{

    constructor(props){
        super(props);
    }

    handlSubmit(event){
        event.preventDefault();

        fetch('https://localhost:44319/api/department',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                EmployeeID:event.target.EmployeeID.value,
                EmployeeName: event.target.EmployeeName.value,
                Department: event.target.Department.value,
                MailID: event.target.MailID.value,
                DOJ: event.target.DOJ.value
            })
        })
        .then(res=>res.json())
        .then((result)=>
        {
            alert(result);
        },
        (error)=>{
            alert('Failed')
        }
        )
    }

    render(){

        return(
            <Modal
      {...this.props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Employee
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
            <Row>
                <Col sm={6}>
                    <Form onSubmit={this.handlSubmit}>
                    <Form.Group controlId="EmployeeID">
                            <Form.Label>EmployeeID</Form.Label>
                            <Form.Control
                                type="text"
                                name="EmployeeID"
                                required
                                disabled
                                defaultValue = {this.props.empid}
                                placeholder="EmployeeID"
                            />
                        </Form.Group>


                        <Form.Group controlId="EmployeeName">
                            <Form.Label>EmployeeName</Form.Label>
                            <Form.Control
                                type="text"
                                name="EmployeeName"
                                required
                                defaultValue = {this.props.empname}
                                placeholder="EmployeeName"
                            />
                        </Form.Group>

                        <Form.Group controlId="Department">
                            <Form.Label>Department</Form.Label>
                            <Form.Control
                                type="text"
                                name="Department"
                                required
                                defaultValue = {this.props.empdep}
                                placeholder="Department"
                            />
                        </Form.Group>
                        <Form.Group controlId="MailID">
                            <Form.Label>MailID</Form.Label>
                            <Form.Control
                                type="mail"
                                name="MailID"
                                required
                                defaultValue = {this.props.empmail}
                                placeholder="MailID"
                            />
                        </Form.Group>
                        <Form.Group controlId="DOJ">
                            <Form.Label>DOJ</Form.Label>
                            <Form.Control
                                type="date"
                                name="DOJ"
                                required
                                defaultValue = {this.props.empdate}
                                placeholder="Date of joining"
                            />
                        </Form.Group>

                        <Form.Group>
                            <Button variant="primary" type="submit">
                                Update
                            </Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>


        )
    }

}