import {useState} from 'react'
import {Button, Modal} from 'reactstrap';


const ModalButton = () => {

    const [modalState, setModalState] = useState(false);

    const toggle = () => setModalState(!modalState);
    

    return (
        <div>
            <Button color = "primary">List Anime</Button>
        </div>
    )
}

export default ModalButton
