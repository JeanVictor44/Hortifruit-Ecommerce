import logoImg from '../../assets/logo.png'
import { Container, HomeBox } from './style'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UsernameContext } from '../../context/Username'

export const Home = () => {
    const {username,setUsername} = useContext(UsernameContext)
    return (
        <Container nameLength={username.length}>
            <HomeBox>
                <img src={logoImg} />
                <h1>Seja bem vindo ao Greencommerce</h1>
                <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Digite seu nome para entrar"/>
                <button disabled={!username}>
                    <Link to="/products">Entrar no App</Link>
                </button>
            </HomeBox>
        </Container>
    )
}