
import {Form, Button} from 'react-bootstrap';

const UserDetailsComp = (props) => {
    const mode = props.user ? true : false;
    return <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>First name</Form.Label>
            <Form.Control type="text" placeholder="Enter first name" defaultValue={mode? props.user.firstName: ''}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>last name</Form.Label>
            <Form.Control type="text" placeholder="enter your last name" defaultValue={mode? props.user.lastName: ''}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>date hissun</Form.Label>
            <Form.Control type="date" placeholder="enter date of hissun" defaultValue={mode? props.user.dateHissun: ''}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>adress</Form.Label>
            <Form.Control type="text" placeholder="enter your adress" defaultValue={mode? props.user.adress: ''}/>
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
    </Form>
}

export default UserDetailsComp;