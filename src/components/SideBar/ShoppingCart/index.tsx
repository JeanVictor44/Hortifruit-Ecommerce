import { useContext } from 'react'
import { ShoppingCartContext } from '../../../context/ShoppingCart'
import { 
    Container,
    FruitsContainer
} from './style'
import formatCurrency from '../../../utils/format-currency'

export const ShoppingCart = () => {
    const { shoppingCart, deleteFruitInShoppingCart} = useContext(ShoppingCartContext)
    return (
        <>
            <h1>Carrinho de compras</h1>
            <Container>
            <FruitsContainer>
                {
                    shoppingCart.map((props) => (
                        <li>
                            <img src={props.photo}/>
                            <span>{props.amount} X </span>
                            <span>{props.name}</span>
                            <span>{formatCurrency(props.price * props.amount)}</span>
                            <button onClick={() => deleteFruitInShoppingCart(props)}>Delete</button>
                        </li>
                    ))
                }
            </FruitsContainer>
            
            </Container>
        </>
        
    )
} 