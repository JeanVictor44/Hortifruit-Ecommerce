import styled from "styled-components";

export const Container = styled.div `
    background-color:#FFF;
    padding:2rem 2.5rem;
    h2 {
        font-size:1rem;
    }
    .fruit-image {
        width:12rem;
        display:block;
        margin:0 auto;
    }

` 
export const Description = styled.div `
background:var(--green);
color:#FFF;
padding:1rem 1.5rem;
margin-top:1rem;
border-radius:0.25rem;
    div{
        display:flex;
        justify-content:space-around;
        & + div {
            margin:1.2rem 0;
        }
    }
    & > span {
        display:block;
        text-align:center;
    }
`