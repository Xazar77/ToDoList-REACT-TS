import { Outlet } from "react-router-dom"
import { Header } from "../components/Header/Header"
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { GlobalStyle } from "../styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../store";

import errorIcon from '../assets/images/error.gif'


export const Layout = () => {
    const theme = useSelector((state: RootState) => state.themeList.theme) 


    
    return (
        <>
        <ThemeProvider theme={theme}>
            <HelmetProvider>
                <Helmet>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet"/>
                </Helmet>
            </HelmetProvider>
            <GlobalStyle icon={errorIcon}/>
            <Header/>
            <Outlet/>
        </ThemeProvider>
        </>
    )
}