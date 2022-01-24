import { DetailsFruitModal } from "../../components/DetailsFruitModal"
import { Header } from "../../components/Header"
import { Main } from "../../components/Main"
import { Sidebar } from "../../components/SideBar"
import { Container } from "./style"

export const Products = () => {
    return(
    <Container>  
        <Header />
        <Sidebar />
        <Main />
        <DetailsFruitModal />
      

    </Container> 
    )
}