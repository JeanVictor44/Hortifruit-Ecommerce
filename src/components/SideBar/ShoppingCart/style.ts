import styled from "styled-components";

export const Container = styled.div `
    height:40vh;
    overflow-y:scroll;
    border-bottom:var(--default-border-size) solid var(--default-border-color);
    margin-bottom:1rem;
    margin-top:0.5rem;
    &::-webkit-scrollbar {
    width: 0.5rem;
    background: var(--secondary-color);
}
    ::-webkit-scrollbar-thumb {
        background:#F0F0F0;
        border-radius:1rem;
    }
    
`
export const FruitsContainer = styled.ul `
    padding:1rem;
    
    li {
        display:flex;
        justify-content: space-between;
        align-items:center;
        img {
            width:4rem;
        }
        span:last-child{
            color:var(--text-body);
        }
        & + li {
            margin-top:1rem;
        } 
        button {
            border:none;
            background-color:var(--green);
            padding:0.5rem;
            color:#FFF;
            cursor:pointer;
        }
    }
`