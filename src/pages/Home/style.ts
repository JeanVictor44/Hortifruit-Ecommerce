import styled from "styled-components";
import { darken,} from "polished";

interface ContainerProps {
    nameLength: number
}

const generateBackgroundColor = (nameLength: number): string=> {
    if(nameLength === 0){
        return '#F8F8F8'
    }else if(nameLength < 4 && nameLength > 0) {
        return darken(nameLength / 10, '#76FFB8')
    }else {
        return '#00A952'
    }

}

export const Container = styled.div<ContainerProps> `
    background-color:${({nameLength}) => generateBackgroundColor(nameLength)};
    height:100vh;
    display:flex;
    justify-content: center;
    align-items: center;
    transition:background-color .2s;
`

export const HomeBox = styled.div `
    width:100%;
    max-width:30rem;
    background-color:#FFF;
    padding:1.5rem 2.5rem;
    margin:2rem;
    border-radius:1rem;
    img {
        display:block;
        width:15rem;
        margin:0 auto;
    }
    h1 {
        color:var(--green);
        font-size:1rem;
    }
    input {
        width:100%;
        background-color:#F6F6F8;
        border:none;
        height: 3rem;
        padding-left:0.5rem;
        margin-top:1rem;
        outline:none;
        font-size:rem;
        border-radius:0.5rem;

    }
    button {
        height:3rem;
        margin-top:0.8rem;
        width:100%;
        background-color:var(--green);
        border:none;
        border-radius:0.5rem;
        cursor:pointer;
        a {
            color:#FFF;
            display:flex;
            justify-content: center;
            align-items:center;
            height:100%;
            width:100%;
        }
    }
`