import { Link } from "react-router-dom";

const Menubar = (props) => {

    return (
        <>
            <ul>
                <li> <Link to={'/'}>Home</Link> </li>
                <li> <Link to={'/emp'}>Employee</Link> </li>
                <li> <Link to={'/parent'}>Parent</Link> </li>
                <li> <Link to={'/login'}>Login</Link> </li>
            </ul>
        </>
    );
};

export default Menubar;
