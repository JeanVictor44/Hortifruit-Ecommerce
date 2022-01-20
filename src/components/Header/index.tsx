import { 
    Container, 
    SearchContainer, 
    MobileMenu,
    Search

} from './style'

export const Header = () => {
    return (
        <Container>
            <MobileMenu>
                <div></div>
                <div></div>
                <div></div>
            </MobileMenu>

            <SearchContainer>
                <label >
                    <i className="fas fa-search"></i>
                </label>
                
                <Search type="text" placeholder="Search..." id="search"/>
            </SearchContainer>
        </Container>
    )
}