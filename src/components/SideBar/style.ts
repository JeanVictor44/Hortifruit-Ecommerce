import styled from "styled-components";

export const Container = styled.aside `
    background-color:var(--secondary-background);
    height:100vh;
    display:grid;
    grid-template-rows: var(--header-size) 1rem;
    .total {
        span:first-child {
            text-transform:uppercase;
        }
        span:last-child {
            font-weight:700;
        }
    }
`
export const Header = styled.header `
    border-bottom:var(--default-border-size) solid var(--default-border-color);
    padding:0 var(--sidebar-padding);
    display:flex;
    align-items:center;
    justify-content:space-between ;

`
export const CreditCard = styled.div `
    background-color:#FFF;
    height:6rem;
    padding:1rem;
    display:flex;
    justify-content: space-between;
    border-radius:1rem;
    align-items:center;
    margin:0.5rem 0 2rem 0;

    div:nth-child(2) {
        display:flex;
        flex-direction: column;
        span:first-child {
            color:var(--text-body);
        }
        span:last-child {
            font-weight:700;
        }
    } 
    
    img {
        width:2.8rem;
    }
    & > span {
        align-self: flex-start;
        color:var(--text-body);
        cursor:pointer;
    }
`
export const PrincipalContent = styled.div `
    .total {
        display:flex;
        justify-content:space-between;
    }
    padding:var(--sidebar-padding);
`
export const Profile = styled.div `
    display:flex;
    align-items: center;
    div {
        display:flex;
        flex-direction:column;    
    }
    span {
        display:block;
        margin-left:0.5rem;
    }
`
export const SignOutProfile =  styled.span `
    a{
        color:var(--text-body);
        font-size: 0.8rem;
    }
`
export const ProfileImage = styled.div `
    height:3rem;
    width:3rem;
    border-radius:50%;
    background-color:var(--green);
    display:flex;
    justify-content:center ;
    align-items:center;
    color:#FFF;

`
export const CountFruits = styled.div `
    height:2.8rem;
    width:2.8rem;
    display:flex;
    justify-content: center;
    align-items: center;
    background-color:var(--green);
    color:#FFF;
    border-bottom-left-radius: 1rem;
    border-top-right-radius: 1rem;
`
export const ClearShoppingCartButton = styled.button `
    border:none;
    color:#FFF;
    background-color:var(--green);
    display:block;
    margin: 0.8rem 0;
    padding:0.5rem 1.5rem;
    font-weight:700;
    cursor:pointer;
    width: 100%;
    
    transition:background-color .2s;
    &:hover {
        filter:brightness(0.8);
    }
`