import styled from "styled-components";

export const Container = styled.div `
    height:100vh;
    display:grid;
    grid-template-columns: 1fr minmax(350px, 450px);
    grid-template-rows: var(--header-size) 1fr;
    overflow: hidden;
`