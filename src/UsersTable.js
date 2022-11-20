import { Table, Button } from 'react-bootstrap';
import { Link, use } from "react-router-dom";



const UsersTable = () => {
    const users = [
        {
            firstName: 'Shoshana',
            lastName: 'Abovich',
            dateHissun: '01/01/2020',
            adress: 'aaa 112 Bney-Brack'
        },
        {
            firstName: 'Yael',
            lastName: 'Israeli',
            dateHissun: '01/01/2020',
            adress: 'aaa 112 Petach-Tikva'
        }
    ];

    return <div>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Date</th>
                    <th>Adress</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => {
                    return <tr>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.dateHissun}</td>
                        <td>{user.adress}</td>
                        <td>
                            <Button variant="success">Delete</Button>
                            <Button variant="success">
                                <Link to="/details">details</Link>
                            </Button>
                        </td>
                    </tr>
                })}
            </tbody>
        </Table>

        <Button variant="success"><Link to="/details">Add +</Link></Button>
    </div>
}


export default UsersTable;