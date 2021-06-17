import React from 'react'
import { Button,Modal } from 'react-bootstrap';


export default function AppWarn({Show,ondelete,onhide,id}) {
    return (
        <Modal show={Show}>
        
        <Modal.Header >
          <Modal.Title>WARNING !!!!</Modal.Title>
        </Modal.Header>
      
        <Modal.Body>
          <p>Sure...You want to delete student data</p>
        </Modal.Body>
      
        <Modal.Footer>
          <Button variant="primary" onClick={onhide}>CANCEL</Button>
          <Button variant="danger" onClick={()=>ondelete(id)}>DELETE</Button>
        </Modal.Footer>
      
      </Modal>
    )
}
