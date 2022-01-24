import styled from "styled-components";

export const Container = styled.div `
    width:13rem;
    padding:1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    & > img {
        width:6rem;
        display:block;
        margin:0 auto;
        margin-bottom:0.5rem;
    }
`
export const DescribeContainer = styled.div `
    display:flex;
    justify-content: space-between;
    margin-bottom:0.5rem;
    & > span {
        color:var(--green);
    }
    div {
        
        span {
            font-size:1.1rem;
            display:flex;
            &:nth-child(2){
                margin-top:0.2rem;
                font-size:0.8rem;
                color:var(--text-body);

            }
        }

    }
`

export const ButtonsContainer = styled.div `
    display:flex;
    justify-content: space-between;
    div {
        button {
            
            background-color:var(--green);
            padding:0.2rem 0.5rem;
            border-radius:0.25rem;            
            border:none;
            cursor:pointer;
            img {
                width:1rem;
            }

            transition:background-color .2s;
            &:hover {
                filter:brightness(1.2);
            }
        }
        span {
            margin:0 0.5rem;
        }
    }
    & > button {
        cursor:pointer;
        border:none;
        background:none;
        img {
            width:1.4rem;
        
        }
    }
`