import styled from "styled-components";

export const Container = styled.aside `
    background-color:var(--secondary-background);
    height:100vh;
    display:grid;
    grid-template-rows: var(--header-size) 1rem;
`
export const Header = styled.header `
    border-bottom:var(--header-border-size) solid var(--header-border-color);
    padding:0 var(--sidebar-padding);
    display:flex;
    align-items:center;
    justify-content:space-between ;

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