import { Link } from "react-router-dom"
import { NotFoundContainer, NotFoundTitle } from "./404.styled"



const styleLink = {
    textDecoration: 'none',
    fontSize: '35px',
    color:'rgba(204, 255, 0, 0.5)'
}
export const NotFound = () => {
    return (

        <NotFoundContainer>
            <NotFoundTitle> Page not Found</NotFoundTitle>
            <Link style={styleLink} to='/'>To Home</Link>
        </NotFoundContainer>
        
    )
}