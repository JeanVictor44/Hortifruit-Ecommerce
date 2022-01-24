import { Container, TextContent} from "./style"
import bannerImg from '../../../assets/banner.svg'

export const Banner = () => {
    return (
        <Container>
            <img src={bannerImg} />
            <TextContent>
                <h1>Selected fruits</h1>
                <h2>Our professionals select the best fruits for you</h2>
            </TextContent>
            <button>Learn more</button>
        </Container>
    )
} 