import { useContext } from 'react'
import Modal from 'react-modal'
import { DetailsFruitModalContext } from '../../context/DetailsFruitModal'
import closeImg from '../../assets/close.svg'
import { Container, Description} from './style'


export const DetailsFruitModal = () => {
    const { isDetailsFruitModalOpen, closeDetailsFruitModal, fruitDetails } = useContext(DetailsFruitModalContext)

    return(
        <Modal
                isOpen={isDetailsFruitModalOpen}
                onRequestClose={closeDetailsFruitModal}
                contentLabel="Details Fruit Modal"
                overlayClassName='react-modal-overlay'
                className='react-modal-content'
            >
                <Container>
                    <button 
                        type='button' 
                        onClick={closeDetailsFruitModal}
                        className='react-modal-close'
                    >
                        <img src={closeImg} />
                    
                    </button>

                    <h1>{fruitDetails.name}</h1>
                    <h2>{fruitDetails.portion}</h2>
                    <img src={fruitDetails.photo} className='fruit-image'/>
                    <Description>
                        <div>
                            <span>Calorie: {fruitDetails.calories}</span>
                            <span>Carbohydrates: {fruitDetails.carbohydrates} </span>
                        </div>
                        <div>
                            <span>Fiber: {fruitDetails.fiber}</span>
                            <span>Protein: {fruitDetails.protein} </span>
                        </div>
                        <span>Blubber: {fruitDetails.blubber}</span>
                    </Description>

                </Container>
            
        
        </Modal>
     
        
    )
}