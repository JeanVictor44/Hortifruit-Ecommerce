import { 
    createContext, 
    ReactNode,
    useState
} from 'react'
import { Fruit as  ShoppingCartItem} from '../../types'
import { FruitApi } from '../../types'

const defaultValue = {
    shoppingCart: [],
    addFruitInShoppingCart:() => {},
    subtractFruitInShoppingCart: () => {},
    deleteFruitInShoppingCart: () => {},
    clearShoppingCart: () => {}
}

interface ShoppingCartContextProps {
    shoppingCart:ShoppingCartItem[];
    addFruitInShoppingCart: (fruit: FruitApi ) => void
    subtractFruitInShoppingCart: (fruit: FruitApi ) => void,
    deleteFruitInShoppingCart: (fruit: ShoppingCartItem) => void,
    clearShoppingCart: () => void
}

export const ShoppingCartContext = createContext<ShoppingCartContextProps>(defaultValue)

interface ShoppingCartProviderProps {
    children: ReactNode
}

export const ShoppingCartProvider = ({children}: ShoppingCartProviderProps) => {
    const [ shoppingCart, setShoppingCart] = useState<ShoppingCartItem[]>([])

    const addFruitInShoppingCart = (fruit: Omit<ShoppingCartItem, 'amount'>) => {
        // Procurar pelo id, se tiver acrescenta +1 ao amount, se não, adiciona o fruit com a propriedade amount
        const NOT_FOUND = -1
        const fruitIndex = shoppingCart.findIndex((item) => fruit.name === item.name)

        if( fruitIndex === NOT_FOUND ){
            
            const newFruitShoppingCart = { 
                ...fruit,
                amount: 1
            } 
            setShoppingCart((fruits) => [newFruitShoppingCart, ...fruits,] )

        }else {
            const shoppingCartCopy = [...shoppingCart]
            shoppingCartCopy[fruitIndex].amount += 1
            setShoppingCart(shoppingCartCopy)
        }         
    }

    const subtractFruitInShoppingCart = (fruit: Omit<ShoppingCartItem, 'amount'>) => {
        const fruitIndex = shoppingCart.findIndex((item) => fruit.name === item.name)
        const shoppingCartCopy = [...shoppingCart]

        if(shoppingCartCopy[fruitIndex].amount === 1){
            const newShoppingCart = shoppingCartCopy.filter((item) => item.name !== fruit.name)
            setShoppingCart(newShoppingCart)
        }else {
            shoppingCartCopy[fruitIndex].amount -= 1
            setShoppingCart(shoppingCartCopy)
        }

    }

    const deleteFruitInShoppingCart = (fruit: ShoppingCartItem) => {
        const newShoppingCart = shoppingCart.filter( item => item.name !== fruit.name)
        setShoppingCart(newShoppingCart)
    }
    
    const clearShoppingCart = () => {
        setShoppingCart([])
    }
            
    return (
        <ShoppingCartContext.Provider value={
            {
                shoppingCart,
                addFruitInShoppingCart,
                subtractFruitInShoppingCart,
                deleteFruitInShoppingCart,
                clearShoppingCart
            }
        }>

            {
                children
            }

        </ShoppingCartContext.Provider>
    )
}