import { createContext, Dispatch, ReactNode, SetStateAction, useState} from "react";

const defaultValue = {
    username:'',
    setUsername: () => {},
}
type UsernameContextProps = {
    username: string,
    setUsername: Dispatch<SetStateAction<string>>
}

export const UsernameContext = createContext<UsernameContextProps>(defaultValue)

interface UsernameProviderProps {
    children: ReactNode
}

export const UsernameProvider = ({children}: UsernameProviderProps) => {
    const [ username, setUsername ] = useState('')

    return(
        <UsernameContext.Provider value={{
            username,
            setUsername
        }}>
            {
                children
            }
        </UsernameContext.Provider>
    )

}