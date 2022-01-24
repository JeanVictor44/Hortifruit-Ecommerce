import { 
    useState,
    useEffect 
} from 'react'
import { Api } from '../../../services'
import { FruitCard } from '../FruitCard'
import { Container }from './style'
import { FruitApi } from '../../../types'

//Fruit API
export const FruitsList = () => {
    const [ fruits, setFruits ] = useState<FruitApi[]>([])

    useEffect(() => {
        const loadFruits = async () => {
            try {
                const response = (await Api.get('/frutas.json')).data
                setFruits(response)
                
            }catch(err) {
                console.log(err)
            }
    
        }
        loadFruits()
    }, [])
    return (
        <Container>
            {
                fruits.map((fruit) => (
                    <FruitCard {...fruit} price={Math.floor(Math.random() * (Number(fruit.calories) - 1 + 1)) + 1} />
                ))

            }
        </Container>
    )
}