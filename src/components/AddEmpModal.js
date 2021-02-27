import react, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Row, Col, Form } from "react-bootstrap";

export class AddEmpModal extends Component{

    constructor(props){
        super(props);
    }

    handlSubmit(event){
        event.preventDefault();

        fetch('https://localhost:44319/api/employee',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                EmployeeID:null,
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
          Add New Employee
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
            <Row>
                <Col sm={6}>
                    <Form onSubmit={this.handlSubmit}>
                        <Form.Group controlId="EmployeeName">
                            <Form.Label>EmployeeName</Form.Label>
                            <Form.Control
                                type="text"
                                name="EmployeeName"
                                required
                                placeholder="EmployeeName"
                            />
                        </Form.Group>
                        <Form.Group controlId="Department">
                            <Form.Label>Department</Form.Label>
                            <Form.Control
                                type="text"
                                name="Department"
                                required
                                placeholder="Department"
                            />
                        </Form.Group>
                        <Form.Group controlId="MailID">
                            <Form.Label>MailID</Form.Label>
                            <Form.Control
                                type="mail"
                                name="MailID"
                                required
                                placeholder="MailID"
                            />
                        </Form.Group>
                        <Form.Group controlId="DOJ">
                            <Form.Label>DOJ</Form.Label>
                            <Form.Control
                                type="date"
                                name="DOJ"
                                required
                                placeholder="Date of joining"
                            />
                        </Form.Group>

                        <Form.Group>
                            <Button variant="primary" type="submit">
                                Add Employee
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