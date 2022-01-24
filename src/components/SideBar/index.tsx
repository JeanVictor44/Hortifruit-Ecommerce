import { ShoppingCart } from './ShoppingCart'
import { 
  Container, 
  Header, 
  Profile, 
  SignOutProfile,
  ProfileImage, 
  CountFruits, 
  CreditCard,
  PrincipalContent,
  ClearShoppingCartButton
} from './style'
import mastercardImg from '../../assets/mastercard.svg'
import { useContext, useEffect, useState } from 'react'
import { ShoppingCartContext} from '../../context/ShoppingCart'
import { UsernameContext } from '../../context/Username'
import formatCurrency from '../../utils/format-currency'
import { Link } from 'react-router-dom'

export function Sidebar() {
  const [ countFuits, setCountFruits] = useState(0)
  const [ total, setTotal ] = useState(0)
  const { username} = useContext(UsernameContext)

  const { shoppingCart, clearShoppingCart} = useContext(ShoppingCartContext)

  useEffect(() => {
    setCountFruits(shoppingCart.length)
    setTotal(shoppingCart.reduce((acc, item) => (item.price * item.amount) + acc ,0) )
  }, [shoppingCart])


  return (
    <Container>
      <Header> 
        
        <Profile>
          <ProfileImage>
            {username.slice(0,2).toUpperCase()}
          </ProfileImage>

          <div>
            <span>{username}</span>
            <SignOutProfile>
              <Link to="/"> Sair</Link>
            </SignOutProfile>
          </div>

        </Profile>

        <CountFruits> {countFuits} </CountFruits>
      </Header>
      <PrincipalContent>
        <CreditCard>
          <div>
            <img src={mastercardImg} />
          </div>
          <div>
            <span>Pagamento</span>
            <span>Mastercard **** 7580</span>
          </div>        
          <span>Editar</span>
        </CreditCard>

        <ShoppingCart />
        <div className='total'>
          <span>Total: </span>
          <span>
            {
              formatCurrency(total)
            }
          </span>
        </div>

        <ClearShoppingCartButton onClick={clearShoppingCart}>Limpar</ClearShoppingCartButton>
      </PrincipalContent>
            
    </Container>
  )
}
