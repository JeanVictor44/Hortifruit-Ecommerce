import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle `
    :root {

        --primary-background:#FFF;
        --secondary-background: #F8F8F8;
        --green:#00A952;
        --text-body:#C8C8C8;

        --header-size:100px;
        --default-border-size:2px;
        --default-border-color:#F0F0F0F0;

        --sidebar-padding:1.5rem;

        --default-padding-left-right:3rem;
        --default-padding-top-bottom:2rem;
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
    
    .react-modal-overlay {
      background:rgba(0,0,0,0.5);
      position:fixed;
      width:100%;
      top:0;
      left:0;
      height:100vh;
      display:flex;
      justify-content: center;
      align-items:center;
      
    }
    .react-modal-content {
      width:100%;
      max-width:576px;
      background:var(--background);
      padding:3rem;
      position:relative;
      border-radius: 0.25rem;
    }
    .react-modal-close {
      cursor:pointer;
      border:none;
      background:transparent;
      position:absolute;
      top:1.5rem;
      right:1.5rem;
      transition:filter 0.2s;
      &:hover {
        filter:brightness(0.8);
      }
    }
`