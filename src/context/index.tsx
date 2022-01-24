import { ShoppingCartProvider } from "./ShoppingCart"
import { DetailsFruitModalProvider } from "./DetailsFruitModal"
import { ReactNode } from "react"
import { UsernameProvider } from "./Username"

interface GlobalContextProps {
    children: ReactNode
}
export const GlobalContext = ({children}: GlobalContextProps) => {
    return (
        <ShoppingCartProvider>
            <DetailsFruitModalProvider>
                <UsernameProvider>
                    {
                        children
                    }
                </UsernameProvider>
            </DetailsFruitModalProvider>
        </ShoppingCartProvider>
    )
}