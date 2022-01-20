import styled from 'styled-components'

export const Container = styled.header `
    padding:2rem 2.5rem;
    display:flex;
    justify-content:space-between;
    border-bottom:var(--header-border-size) solid var(--header-border-color);
`

export const MobileMenu = styled.div `
    cursor:pointer;
    width:2rem;
    height:2rem;    

    div {
        height:3px;
        background-color:#0C0C0C;
       

        &+div {
            margin-top:0.2rem;
        }
    }
    div:nth-child(1) {
        width:50%;
        margin-left:auto;
    }
    div:nth-child(3) {
        width:40%;
        margin-right:auto;
    }
`   
export const SearchContainer= styled.div `
    display:block;
    width:40%;
    height:2.5rem;
    display:flex;
    align-items: center;

    .fa-search {
        color:var(--green);
        position:relative;
        left:1.5rem;
        font-size:0.8rem;
    }
`
export const Search = styled.input `
    background-color:var(--secondary-background);
    border:none;
    outline:none;
    padding:0px 1rem 0px 2rem ;
    width:100%;
    height:100%;
    
`