import { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";
import { FruitApi } from '../../types'

type DetailsFruitModalContextProps = {
    isDetailsFruitModalOpen: boolean,
    closeDetailsFruitModal: () => void,
    openDetailsFruitModal: () => void,

    fruitDetails: FruitApi,
    setFruitDetails: Dispatch<SetStateAction<FruitApi>>
}

const defaultValue = {
    isDetailsFruitModalOpen: false,
    closeDetailsFruitModal: () => {},
    openDetailsFruitModal: () => {},
    fruitDetails: {} as FruitApi,
    setFruitDetails: () => {}
}

export const DetailsFruitModalContext = createContext<DetailsFruitModalContextProps>(defaultValue)

interface DetailsFruitModalProviderProps {
    children: ReactNode
}

export const DetailsFruitModalProvider = ({children}:DetailsFruitModalProviderProps ) => {
    const [ isDetailsFruitModalOpen, setIsDetailsFruitModalOpen ] = useState(false) 
    const [ fruitDetails, setFruitDetails  ] = useState<FruitApi>({} as FruitApi) 

    return (
        <DetailsFruitModalContext.Provider value={{
            isDetailsFruitModalOpen,
            closeDetailsFruitModal: () => setIsDetailsFruitModalOpen(false),
            openDetailsFruitModal: () => setIsDetailsFruitModalOpen(true),
            fruitDetails,
            setFruitDetails
        }}>
            {
                children
            }
        </DetailsFruitModalContext.Provider>
    )
}