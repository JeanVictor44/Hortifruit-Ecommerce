import styled from "styled-components";

export const Container = styled.main `
    padding:var(--default-padding-top-bottom) var(--default-padding-left-right) ;
    overflow-y:scroll;
    &::-webkit-scrollbar {
    width: 0.5rem;
    background: var(--secondary-color);
}
    ::-webkit-scrollbar-thumb {
        background:#F0F0F0;
        border-radius:1rem;
    }
`