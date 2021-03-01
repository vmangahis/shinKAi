import {useState} from 'react'
import {Button, Modal, ModalHeader, ModalFooter, ModalBody, Form, FormGroup, Input, Label} from 'reactstrap';


const ModalButton = () => {

    const [modalState, setModalState] = useState(false);
    const [searchState, setSearchState] = useState('');

    const toggleModal = () => setModalState(!modalState);

    const getSearchValue = (e) => {
        e.preventDefault();
        setSearchState(e.target.value);
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
                    <Input type= "text" name="anime" id="searchanime" placeholder="Search..." onChange={(e) => getSearchValue(e)} />
                </FormGroup>
            </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick = {() => {setModalState(false); console.log(`You searched for ${searchState}`)}}>Search</Button>
                <Button color="secondary" onClick = {() => setModalState(false)}>Cancel</Button>
            </ModalFooter>


            </Modal>
        </div>
    )
}

export default ModalButton
