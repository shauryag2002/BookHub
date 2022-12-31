import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { createBook } from './methods/find';

function Forms(props) {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Book Name:</Form.Label>
        <Form.Control type="text" placeholder="Enter Book Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="author">
        <Form.Label>Author:</Form.Label>
        <Form.Control type="text"  placeholder="Author" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="image">
        <Form.Label>image:</Form.Label>
        <Form.Control type="text"  placeholder="image" />
      </Form.Group>
      <Form.Group className="mb-3"  controlId="formBasicPassword">
        <Form.Label>price:</Form.Label>
        <Form.Control type="number" id='number' style={{width:'1000px'}} placeholder="price" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>desc:</Form.Label>
        <Form.Control type="text" id='desc' placeholder="desc" />
      </Form.Group>
      <Button variant="primary" onClick={createBook} type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Forms;