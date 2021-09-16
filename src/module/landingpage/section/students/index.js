import "./style.css";
import { Table } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import useStudents from "./useStudents";
import List from "../../../../components/studentlist/list";


function Section() {

    const [students, name, setname, class1, setclass, cellno, setcellno, email, setemail, loading, setloading, ctahandler] = useStudents();
       

    return (

        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <h2>Students Data</h2>
                    <Table striped bordered hover variant="dark mt-4">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Student Name</th>
                                <th>Class</th>
                                <th>Cell No</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            
                             {
                                students.map((item,index)=>{
                                    return <List stu={item} index={index} />
                                                                            
                                })
                            }   
                            
                            



                        </tbody>
                    </Table>



                </div>
                <div className="col-lg-6 col-md-12">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Student Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Student Name" onChange={(e) => setname(e.target.value)} />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Class</Form.Label>
                            <Form.Control type="text" placeholder="Enter Class" onChange={(e) => setclass(e.target.value)} />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Cell No</Form.Label>
                            <Form.Control type="text" placeholder="Enter Cell No" onChange={(e) => setcellno(e.target.value)} />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={(e) => setemail(e.target.value)} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>



                        <Button variant="primary" type="submit" onClick={ctahandler}>
                            Submit
                        </Button>
                    </Form>

                </div>
            </div>



        </div>
    )
}
export default Section;