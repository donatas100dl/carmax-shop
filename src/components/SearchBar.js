import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup'
import "../main.css"

function SearchBar({searchQuery, handleSearchQuery}) {
 const handleOnChange = (e) => {
    handleSearchQuery(e.target.value);
  }
    return (
      <div className='d-flex mx-auto' style={{minWidth:"60vw"}}>
            <InputGroup className="mb-3">
        <Form.Control
          placeholder="Enter car to search"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={handleOnChange}
          value={searchQuery}
        />
      </InputGroup>
      </div>
    )
  }
  
  export default SearchBar;
  