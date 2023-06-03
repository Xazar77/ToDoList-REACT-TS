import { createGlobalStyle } from 'styled-components'
import normalize from 'styled-normalize'


export const GlobalStyle = createGlobalStyle<{icon: string}>`
    ${normalize}
    * {
        box-sizing: border-box;
    }

    body {
        background-color: #edf0f1;
        padding: 50px 0 0 0;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        line-height: 1.429;
        color: black;
    }
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 50px;
    }
    .error {
        height: 100vh;
        background-image: url(${props => props.icon});
        background-repeat: no-repeat;
        background-size: cover;
        background-position-x: center;
        background-position-y: center;

    }

    .title {
        font-size: 70px;
        margin-top: 200px;
        font-style: italic;
        font-weight: bold;
        color: rgba(255, 0, 0, 0.5);
    }
    .to-home{
        text-decoration: none;
        font-size: 35px;
        color:rgba(204, 255, 0, 0.5)
    }


`