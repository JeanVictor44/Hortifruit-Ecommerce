import { useContext, useEffect, useState } from 'react';
import { Container, DescribeContainer, ButtonsContainer } from './style'
import describeImg from '../../../assets/describe.svg'
import plusImg from '../../../assets/plus.svg'
import minusImg from '../../../assets/minus.svg'
import { ShoppingCartContext } from '../../../context/ShoppingCart';
import { DetailsFruitModalContext } from '../../../context/DetailsFruitModal';
import formatCurrency from '../../../utils/format-currency' 
import { FruitApi as FruitCardProps } from '../../../types';

export function FruitCard(props: FruitCardProps) {
    const { addFruitInShoppingCart, subtractFruitInShoppingCart, shoppingCart} = useContext(ShoppingCartContext)
    const { openDetailsFruitModal,setFruitDetails } = useContext(DetailsFruitModalContext)
    const [ amount, setAmount ] = useState(0)

    useEffect(() => {

        /* 
            Se o usuário tiver adicionado no carrinho através do card ele verifica se essa fruta ainda 
            está no carrinho, caso não esteja, zera a quantidade 
        */
        if(amount > 0){
            const isInShoppingCart = shoppingCart.some((item => item.name === props.name))
            if(!isInShoppingCart){
                setAmount(0)
            }
        }
        
    },[shoppingCart])
    
  return(
      <Container>
          <img src={props.photo} alt={`${props.name} Image`}/>
          <DescribeContainer>
              <div>
                <span>{props.name}</span>
                <span>{props.portion}</span>
              </div>
              <span>
                  { 
                    
                    formatCurrency(props.price)
                  
                  }
              </span>
          </DescribeContainer>
          
          <ButtonsContainer>
              <div>
                <button 
                    disabled={amount === 0} 
                    onClick={() => {
                        setAmount((oldAmount) => oldAmount - 1)
                        subtractFruitInShoppingCart(props)
                    }}
                >    
                    <img src={minusImg} />

                </button>
                <span>{amount}</span>
                <button onClick={() => {
                        setAmount((oldAmount) => oldAmount + 1)
                        addFruitInShoppingCart(props)
                    }}>
                    <img src={plusImg} />
                </button>
              </div>
              
              <button onClick={() => {
                  openDetailsFruitModal()
                  setFruitDetails(props)

              }}>
                <img src={describeImg} />
              </button>
              
          </ButtonsContainer>
      
      </Container>
  );
}
