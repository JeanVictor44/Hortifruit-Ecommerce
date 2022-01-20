import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle `
    :root {
        --primary-background:#FFF;
        --secondary-background: #F8F8F8;
        --green:#00A952;
        --text-body:#C8C8C8;
        --header-size:100px;
        --header-border-size:2px;
        --header-border-color:#F0F0F0F0;
        --sidebar-padding:1.5rem;
    }

    * {
        box-sizing:border-box;
        margin:0;
        padding:0;
    }
    html {
        @media (max-width:1080px) {
            font-size:92.75%; // 15px
        }
        @media (max-width:720px){
            font-size:87.5%;// 14px
        }
    }

    body {
        font-family:'Roboto';
    }
    a {
        text-decoration:none;
    }
    #root {
        height:100vh;
        display:grid;
        grid-template-columns: 1fr minmax(250px, 350px);
        grid-template-rows: var(--header-size) 1fr;
    }
`