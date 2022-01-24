import styled from 'styled-components'

export const Container = styled.div `
    display:flex;
    align-items:center;
    background-color:#E6F5EE;
    padding:0 2rem;
    width:100%;
   
    border-radius:1rem;
    img {
        width:10rem;
    }
    button {
        margin:0 2rem 0 auto;
        background:transparent;
        border:1px solid #AAC0B6;
        color:var(--green);
        padding:0.8rem 1.2rem;
        font-weight:700;
        cursor:pointer;
        transition:background-color .2s;
        &:hover {
            background:var(--green);
            color:#FFF;
        }
        border-bottom-left-radius:1rem;
        border-top-right-radius:1rem;
    }

`
export const TextContent = styled.div `
    margin-left:2rem;
    h1 {
        color:var(--green);
    }
    h2 {
        color:#AAC0B6;
        font-size:1rem;
    }
`
