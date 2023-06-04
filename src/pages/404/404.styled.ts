import styled from 'styled-components'
import errorIcon from '../../assets/images/error.gif'

export const NotFoundContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
    background-image: url(${errorIcon});
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;
    background-position-y: center;
    height: 100vh;
`

export const NotFoundTitle = styled.h1`
    font-size: 70px;
    margin-top: 200px;
    font-style: italic;
    font-weight: bold;
    color: rgba(255, 0, 0, 0.5);

`