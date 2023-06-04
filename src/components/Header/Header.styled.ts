import styled from 'styled-components'

export const HeaderItem = styled.header`
    position: relative;
    top: 0;
    right: 0;
    left: 0;
    // height: 100px;
    background-color: #4682b4;
    display: flex;
    align-items: center;
`
export const HeaderContainer = styled.div`
    max-width: 97%;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    position; relative;
`
export const ToggleTheme = styled.div`
    position: absolute;
    right: 30px;
    top: 50%;
    transform: translateY(-50%);
`
export const ToggleThemeBtn = styled.button`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: ${({theme}) => theme.colors.backgroundPrimary};
    color: ${({theme}) => theme.colors.backgroundSecondary};
    font-style: italic;
    border: 1px solid ${({theme}) => theme.colors.backgroundSecondary};

`

