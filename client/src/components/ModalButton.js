import {useState} from 'react'
import {Button, Modal, ModalHeader, ModalFooter, ModalBody, Form, FormGroup, Input, Label} from 'reactstrap';


const ModalButton = () => {

    const [modalState, setModalState] = useState(false);

    const toggleModal = () => setModalState(!modalState);

    const getValue = (e) => {
        console.log(e.target.value);
    }
    

    return (
        <div>
            <Button color = "primary" onClick = {() => setModalState(!modalState)}>Search Anime</Button>
            <Modal isOpen ={modalState} toggle = {toggleModal}>
            <ModalHeader toggle = {toggleModal}>Search Anime</ModalHeader>
            <ModalBody>
            <Form>
                <FormGroup>
                    <Label for="searchanime">Anime Title</Label>
                    <Input type= "text" name="anime" id="searchanime" placeholder="Search..."  onChange = {(e) => getValue(e)}/>
                </FormGroup>
            </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick = {() => setModalState(false)}>Search</Button>
                <Button color="secondary" onClick = {() => setModalState(false)}>Cancel</Button>
            </ModalFooter>


            </Modal>
        </div>
    )
}

export default ModalButton
