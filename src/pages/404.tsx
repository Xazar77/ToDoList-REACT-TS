import { Link } from "react-router-dom"


export const NotFound = () => {
    return (

        <div className="container error">
            <h1 className="title"> Page not Found</h1>
            <Link className="to-home" to='/'>To Home</Link>
        </div>
        
    )
}